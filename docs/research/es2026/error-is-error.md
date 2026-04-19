# Error.isError

- Proposal: https://github.com/tc39/proposal-is-error
- Meta Issue: https://github.com/js-primer/js-primer/issues/1869

## 概要

`Error.isError(value)` は、値がネイティブErrorインスタンスかどうかを真偽値で返すメソッド。

```js
Error.isError(new Error());     // => true
Error.isError(new TypeError()); // => true
Error.isError({ name: "Error", message: "..." }); // => false
```

## 既存の判定手段との違い

### `instanceof Error` の問題点

- **クロスレルム**: iframe / Worker / vm など別レルム由来のErrorは `instanceof Error` が `false` になる
- プロトタイプチェーンに依存するため、`Object.setPrototypeOf` などで改ざんできる

### `Object.prototype.toString.call(v) === "[object Error]"` の問題点

- `Symbol.toStringTag` で改ざん可能なため、信頼できるブランドチェックにならない

```js
const fake = { [Symbol.toStringTag]: "Error" };
Object.prototype.toString.call(fake); // => "[object Error]"
Error.isError(fake);                  // => false （内部スロットで判定）
```

`Error.isError` は内部スロット `[[ErrorData]]` を見て判定するため、上記の問題を受けない。

## js-primerでの関連箇所

### `Array.isArray` の先例

`Error.isError` と類似のAPIである `Array.isArray` は、js-primerで**専用節**として解説されている。

- [配列 > オブジェクトが配列かどうかを判定する](https://jsprimer.net/basic/array/#detect-array) (`source/basic/array/README.md` L144-L178) — 「あるオブジェクトが配列かどうかを判定するには`Array.isArray`静的メソッドを利用します」
- [配列 > Array-likeオブジェクト](https://jsprimer.net/basic/array/#array-like) 付近 (L1096-L1115) — Array-likeと配列の判別手段としても再登場
- `source/OUTLINE.md` L249-L251 に「`Array.isArray`は特殊なものでArrayかどうかを判定できる / Realmが異なるとArrayはinstanceofでも一致しなくなるため」というメモがあり、クロスレルム観点での位置づけが意識されている

`Array.isArray` が専用節で扱われている以上、対になるAPIである `Error.isError` も同様に節として扱う整合性はある。

### `instanceof` の解説

[クラス > 継承の判定](https://jsprimer.net/basic/class/#instanceof) (`source/basic/class/README.md` L1556-L1575) で `instanceof` 演算子の仕組みを解説している。

### エラー判定の例

[エラー処理 > Error](https://jsprimer.net/basic/error-try-catch/#error) (`source/basic/error-try-catch/README.md`) で、`error instanceof Error` / `error instanceof TypeError` / `error instanceof ReferenceError` を**例コード**で使用している（L31, L106, L148, L176, L194, L222）。`instanceof` そのものの解説はなく、エラー種別判定の推奨手段として登場する。

### 節構成

[エラー処理章](https://jsprimer.net/basic/error-try-catch/) の現在の節構成:

- 例外処理 (`#error-handling`)
- エラーオブジェクト (`#error-object`)
  - Error (`#error`)
  - ビルトインエラー (`#built-in-error`)
    - ReferenceError / SyntaxError / TypeError
  - ビルトインエラーを投げる (`#throw-built-in-error`)
- エラーとデバッグ (`#error-and-debug`)
- `console.error`とスタックトレース (`#console.error`)
- [ES2022] Error Cause (`#error-cause`)

## 対応方針

エラー処理章に `Error.isError` を追加する。

- `Array.isArray` が専用節として解説されている先例と整合する
- 基本方針として `instanceof Error` を使う理由はなくなる(`Error.isError` の方が安全)
- ただし `instanceof` との違い(クロスレルム、`Symbol.toStringTag`)は**深く説明しない**。「こちらの方が安全」という軽い説明に留める
- 既存の `error instanceof Error` の例コードも `Error.isError(error)` に差し替える方向で統一する

### 追加位置

[エラーオブジェクト > Error](https://jsprimer.net/basic/error-try-catch/#error) のセクション内、もしくは直後に追加。
粒度感は [ES2022] Error Cause の節と同等。

## 論点・メモ

- `instanceof` との違いを説明しないで「安全」とだけ伝える書き方は要工夫
  - `Array.isArray` の節に倣って「エラーオブジェクトかどうかを判定する」というAPI紹介として自然に置けると良い
- 既存の `instanceof Error` / `instanceof TypeError` の例コードをどこまで差し替えるかは要検討
  - `TypeError` などサブクラスの判定は `Error.isError` ではできないため、ビルトインエラー判定では `instanceof` が残る
