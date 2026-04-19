# JSON.parse source text access

- Proposal: https://github.com/tc39/proposal-json-parse-with-source
- Spec: https://tc39.es/proposal-json-parse-with-source/
- MDN:
  - [JSON.rawJSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON)
  - [JSON.isRawJSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON)
  - [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- 2ality解説: https://2ality.com/2022/11/json-parse-with-source.html
- Meta Issue: https://github.com/js-primer/js-primer/issues/1869
- Baseline: 2025-03 (rawJSON) / 2026対応

## 概要

このProposalは以下3つをまとめて追加する:

### 1. `JSON.parse(text, reviver)` の reviver に `context` 引数を追加

```js
JSON.parse('{"amount": 1234567890123456789}', (key, value, context) => {
    if (key === "amount") {
        // context.source で元のJSONソーステキストに直接アクセス可能
        return BigInt(context.source);
    }
    return value;
});
```

- `context.source` はプリミティブ値(Number / String / Boolean / null)の元のJSONテキスト
- オブジェクトや配列を reviver が受け取るときは `context` は `{ source: undefined }` 風の挙動(そもそも `source` は存在しない)

### 2. `JSON.rawJSON(string)`

有効なJSONプリミティブテキストを「生のJSON」としてラップするオブジェクトを返す。`JSON.stringify` がこれを見ると、そのJSONテキストをそのまま出力する。

```js
const rawJSON = JSON.rawJSON("12345678901234567890");
JSON.stringify({ value: rawJSON });
// => '{"value":12345678901234567890}'  ←精度がNumberで失われずに出力される
```

制約: プリミティブ(数値、文字列、真偽値、null)のJSONテキストのみ。オブジェクトや配列はNG。

### 3. `JSON.isRawJSON(value)`

値が `JSON.rawJSON` で作られたオブジェクトかを判定。

```js
JSON.isRawJSON(JSON.rawJSON("123")); // => true
JSON.isRawJSON({ rawJSON: "123" });  // => false
```

## 主なユースケース

### BigInt対応 (最大のユースケース)

```js
const json = '{"id": 9007199254740993}'; // Number.MAX_SAFE_INTEGER超え
JSON.parse(json).id;  // => 9007199254740992 (精度ロス!)

JSON.parse(json, (key, value, context) =>
    key === "id" ? BigInt(context.source) : value
).id;  // => 9007199254740993n (BigIntで正確)
```

これまでは「文字列として送ってもらう」か独自パーサを書くしか無かった。

### Twitter IDのようなケース

Twitter APIは64-bit IDを `id` (数値)と `id_str` (文字列) の両方で送って、精度ロスを回避してきた。`context.source` を使えばそうした二重表現が不要になる。

### 大きな数値のシリアライズ

```js
// 通常だと精度ロス
JSON.stringify({ value: 12345678901234567890 });
// => '{"value":12345678901234567000}'

// rawJSONで精度保持
JSON.stringify({ value: JSON.rawJSON("12345678901234567890") });
// => '{"value":12345678901234567890}'
```

### 型情報の往復変換

`replacer` と `reviver` の両側で `rawJSON` と `context.source` を使えば、BigInt/Numberの区別を失わずに往復できる。

## js-primerでの関連箇所

### JSON章の構成

[JSON章](https://jsprimer.net/basic/json/) (`source/basic/json/README.md`) の現在の構成:

- JSONとは (`#what-is-json`)
- JSONオブジェクト (`#json-object`)
  - **JSON文字列をオブジェクトに変換する (`#json-parse`)** — `JSON.parse` の基本形のみ(L43-L82)
  - **オブジェクトをJSON文字列に変換する (`#json-format`)** — `JSON.stringify`、replacerも解説 (L84-L154)
- **JSONにシリアライズできないオブジェクト (`#not-serialization-object`)** — シリアライズ不可な値を表で解説 (L156-L205)
- `toJSON`メソッドを使ったシリアライズ (`#serialization-by-toJSON`)
- まとめ

### `#not-serialization-object` 節にBigIntが既に登場

`#not-serialization-object` 節の表 (L164-L175) に:

```
| BigInt          |  例外が発生する    |
```

つまりjs-primerは既に「BigIntはJSON.stringifyで例外が発生する」と触れている。ES2026ではこれが `JSON.rawJSON` で扱えるようになるため、**この節の延長として自然に繋げられる**。

### replacerは解説済、reviverは未解説

- `replacer` ([`#json-format`](https://jsprimer.net/basic/json/#json-format)): L97-L123 で解説済み
- `reviver`: **JSON章には未登場**
- BigInt自体はjs-primer全体で本章の表以外はほぼ未登場

## 対応方針の検討

本ProposalはJavaScript入門書のスコープに対してかなりニッチだが、**既に章内でBigIntが「シリアライズ不可」と書かれている**ため、その補足として自然に紹介できる。

### 選択肢

- **A: 対応しない**
  - リリースノートのみ
- **B: `#not-serialization-object` 節にBigIntの扱いとして補足を入れる**
  - 既存表の「BigInt | 例外が発生する」に注記、または節末尾に短い補足節を追加
  - stringify側: `JSON.rawJSON` + replacerでBigIntをシリアライズ可能
  - parse側: `reviver` + `context.source` でBigIntに戻せる
  - 「reviver」の紹介が新規に必要だが、BigIntを扱う文脈に絞れば説明量は抑えられる
- **C: 本格的に節を追加**
  - `reviver` から解説を始めて章構成を見直す
  - 入門書的には過剰

## 対応方針(要検討)

**方向性: B (`#not-serialization-object` 節にBigInt補足として追加)** が妥当だが、**実際に対応するかは要検討**。

BigIntが既に章内で扱われているので、「ES2026からBigIntもシリアライズ/デシリアライズできる」という切り口で繋げられる。入門者も「さっきの表で出てきたBigIntがこうなった」と読みやすい。

一方、BigInt自体がjs-primer入門書のスコープに対してニッチであり、無理に補足を追加せず表の注記程度に留める or 対応しない判断もあり得る。

### 追加位置の案

`#not-serialization-object` 節末尾(L205の後、`#serialization-by-toJSON`節の前)に:

- `[ES2026] BigIntをシリアライズする (JSON.rawJSON)` — stringify側
- `[ES2026] BigIntをデシリアライズする (reviver + context.source)` — parse側

あるいは、両方を1つのサブ節にまとめて `[ES2026] BigIntをJSONで扱う` とするのも手。

## 対応コスト(仮)

- A (対応しない): **Point 0**
- B (`#not-serialization-object` にBigInt補足追加): **Point 2** (1つの補足節相当、reviver新規導入を含む)
- C (本格対応): **Point 3-5**

B を採用する場合、類似先例:
- [ES2022] Error Cause ([PR #1732](https://github.com/js-primer/js-primer/pull/1732)): Point 2 (1セクション追加)
