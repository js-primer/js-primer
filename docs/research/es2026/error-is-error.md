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

## `Error.isError` は種類判定には使えない

[仕様](https://tc39.es/proposal-is-error/) 上、`Error.isError` は内部スロット `[[ErrorData]]` の有無だけで判定する。

```js
Error.isError(new Error());       // => true
Error.isError(new TypeError());   // => true  （TypeErrorでもtrueになる）
Error.isError(new RangeError());  // => true
```

したがって `TypeError`/`ReferenceError`/`SyntaxError` の**種類判定はProposalのスコープ外**で、第二引数でクラスを指定するAPIも提案されていない。種類判定は引き続き `instanceof TypeError` など `instanceof` を使うことになる。

### 既存コードの `instanceof` 利用状況

エラー処理章(`source/basic/error-try-catch/README.md`)で `instanceof` が例コードに登場するのは6箇所で、置き換え可能なのはL106の1箇所のみ:

| L | コード | 用途 | 置き換え |
|---|---|---|---|
| L31 | `error instanceof ReferenceError` | 種類判定 | `instanceof`のまま |
| L106 | `error instanceof Error` | Error判定 | `Error.isError`に置換可能 |
| L148 | `error instanceof ReferenceError` | 種類判定 | `instanceof`のまま |
| L176 | `error instanceof SyntaxError` | 種類判定 | `instanceof`のまま |
| L194 | `error instanceof TypeError` | 種類判定 | `instanceof`のまま |
| L222 | `error instanceof TypeError` | 種類判定 | `instanceof`のまま |

## 対応方針

**コラムレベルの軽い紹介に留める。**

- 独立した節として大きく扱うと、章のほとんどで `instanceof` が主役のまま残るのとちぐはぐになる
- [エラーオブジェクト > Error](https://jsprimer.net/basic/error-try-catch/#error) の `error instanceof Error` の近くで「ただエラーかどうかを判定したい時は `Error.isError` を使う」という一言を添える、あるいは短いコラム扱い
- `instanceof` との違い(クロスレルム、`Symbol.toStringTag`)は深く説明しない
- 種類判定のコード例は `instanceof` のまま変更しない

## 論点・メモ

- `Array.isArray` が専用節として扱われているのに `Error.isError` をコラム格下げするのは対称性が崩れるが、実際の使い分け(「エラーか」だけを判定する場面は限定的、種類判定の方が多い)を踏まえるとコラム扱いの方が素直
- 「判定したい時は使う」と伝えるだけなら `instanceof Error` との差異を深堀りする必要もない
