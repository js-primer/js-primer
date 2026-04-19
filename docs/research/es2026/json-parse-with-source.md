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
- JSONにシリアライズできないオブジェクト (`#not-serialization-object`)
- `toJSON`メソッドを使ったシリアライズ (`#serialization-by-toJSON`)
- まとめ

### 重要ポイント

- **`reviver` 引数自体が現状の章で解説されていない**
  - `JSON.parse(text)` の形でしか使われていない
  - `context.source` を紹介するには、まず `reviver` から解説する必要がある
- `replacer` は解説されている (`stringify` の第2引数)
- BigIntはjs-primer全体で**ほとんど触れられていない**
  - 入門書的にBigInt自体がスコープ外

## 対応方針の検討

本ProposalはJavaScript入門書のスコープに対してかなりニッチ:

- 主要ユースケースが **BigInt対応 / 精度保持**で、入門者の典型的な課題ではない
- `reviver` すら紹介していない章に `context.source` を紹介するのは飛躍が大きい
- `JSON.rawJSON` / `JSON.isRawJSON` も精度保持のための上級的API

### 選択肢

- **A: 対応しない**
  - 入門書のスコープ外と判断
  - ES2026の対応としてリリースノートに言及するだけ
- **B: コラムで軽く言及**
  - 「JSONには精度ロスの問題があり、ES2026からこれらのAPIで対処できる」程度の紹介
  - `JSON.parse` 節の末尾にコラムで1段落
- **C: 本格的に節を追加**
  - `reviver` から解説を始める必要があるため、JSON章の構成を大きく変える
  - 入門書的には過剰

## 対応方針(仮)

**A (対応しない) または B (短いコラム) が妥当**。

C は入門書のスコープを超える。ES2025/ES2024の扱い(`Set集合演算`、`Map.groupBy` など、実用性が高く入門者に親しみやすいAPI)と比べてユースケースがニッチすぎる。

## 論点・メモ

- BigIntの扱い方針は js-primer 全体で未着手(数値章でもほぼ言及なし)
- Twitter APIの例など具体的なユースケースはあるが、入門者の学習動機として弱い
- 精度ロスの話題はそれ自体で1つのテーマになるため、ついでに軽く書くのは難しい
- 対応しない場合もリリースノートでは言及する(ES2026対応の一部として列挙)

## 対応コスト(仮)

- A (対応しない): **Point 0** (変更なし、リリースノートのみ)
- B (コラムで言及): **Point 1-2** (JSON章のparse節に短いコラム1つ追加)
- C (本格対応): **Point 3-5** (reviverの説明から始まる広範な書き直し、JSON章の章構成見直し)
