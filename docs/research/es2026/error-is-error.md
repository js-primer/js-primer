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

## 対応方針案

### A. 対応しない

- 入門者には `instanceof Error` で実質的に十分
- クロスレルム（iframe / Worker / vm）は入門書のスコープ外
- `Symbol.toStringTag` による改ざんを前提にする場面も入門者には縁遠い

### B. エラー処理章に `[ES2026] Error.isError` 節を追加

- [ES2022] Error Cause と同じ粒度で末尾に短い節を追加
- クロスレルムの深い説明には立ち入らず、`instanceof` の代替として紹介する
- [エラーオブジェクト > Error](https://jsprimer.net/basic/error-try-catch/#error) で `error instanceof Error` を使っているので、そこへの参照/言及は自然

## 論点

- `instanceof` は入門者向けには十分機能しているので、`Error.isError` をあえて紹介するモチベーションは弱い
- 追加するとしても「より堅牢な判定手段」という立ち位置で、ユースケースがイメージしにくいとコラム止まりになりそう
