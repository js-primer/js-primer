# Uint8Array to/from Base64

- Proposal: https://github.com/tc39/proposal-arraybuffer-base64
- Spec: https://tc39.es/proposal-arraybuffer-base64/
- MDN:
  - [Uint8Array.fromBase64](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64)
  - [Uint8Array.prototype.toBase64](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/toBase64)
- Meta Issue: https://github.com/js-primer/js-primer/issues/1869

## 概要

`Uint8Array` と base64 / hex 文字列の相互変換メソッドが追加される。

### 追加API

- **エンコード(instance)**
  - `Uint8Array.prototype.toBase64(options?): string`
  - `Uint8Array.prototype.toHex(): string`
  - `Uint8Array.prototype.setFromBase64(string, options?): {read, written}`
  - `Uint8Array.prototype.setFromHex(string): {read, written}`
- **デコード(static)**
  - `Uint8Array.fromBase64(string, options?): Uint8Array`
  - `Uint8Array.fromHex(string): Uint8Array`

```js
const bytes = new Uint8Array([72, 101, 108, 108, 111]);
bytes.toBase64(); // => "SGVsbG8="

Uint8Array.fromBase64("SGVsbG8="); // => Uint8Array(5) [72, 101, 108, 108, 111]
```

### オプション (Base64)

- `alphabet`: `"base64"` または `"base64url"`
- `lastChunkHandling`: `"loose"`(デフォルト) / `"strict"` / `"stop-before-partial"`
- `omitPadding`: パディング(`=`)を含めるか

## 主なユースケース

- SSHキー、暗号鍵、ハッシュ値などバイナリデータのbase64/hex変換
- `atob` / `btoa` は文字列の base64変換なので、バイナリを扱うには不適切(Latin-1制約、エンコーディング問題)
- `TextEncoder/Decoder` はテキスト符号化専用でbase64/hexには使えない

## js-primerでの関連箇所

### TypedArrayの扱い

[配列章](https://jsprimer.net/basic/array/) (`source/basic/array/README.md`) の [ES2015 TypedArray コラム](https://jsprimer.net/basic/array/#typed-array) (L166-) で軽く触れられているのみ。

コラムの位置づけは「配列と似ているが別物」という紹介レベルで、**TypedArrayを本格的に扱う章はない**。

```
配列章
├── 配列の作成とアクセス
├── ...
├── オブジェクトが配列かどうかを判定する
│   └── [コラム] [ES2015] TypedArray    ← ここで軽く紹介のみ
└── ...
```

### Base64関連の章

- `atob` / `btoa` / `TextEncoder` / `TextDecoder` も **js-primer全体で登場しない**
- バイナリ処理、エンコーディング処理は入門書のスコープ外

## 対応方針の検討

本ProposalはJavaScript入門書のスコープに対してかなりニッチ:

- TypedArray自体が入門書のスコープ外で、コラム扱い
- バイナリ変換・base64エンコーディングは入門者の典型課題ではない
- 紹介するにはTypedArray/Uint8Arrayの本格解説が必要になる

### 選択肢

- **A: 対応しない**
  - リリースノートのみ
  - TypedArrayコラムに一言「base64/hex変換メソッドが追加された」と追記するのもあり
- **B: TypedArrayコラムに数行追記**
  - 「ES2026からbase64/hex文字列との相互変換メソッドが追加された」程度の言及
- **C: 本格的にTypedArray/base64の節を追加**
  - TypedArrayを扱う範囲が広がる
  - 入門書のスコープを超える

## 対応方針(仮)

**A (対応しない) または B (コラムに一言)** が妥当。

TypedArrayが入門書でコラム扱いなので、そのレベルに留めるのが整合的。Cは過剰。

## 論点・メモ

- Node.jsでは`Buffer`が類似機能を持っていたが、これが**Web標準として**提供されるのが意義
- 入門者の学習動機が弱い(具体的なユースケースを示しにくい)
- TypedArrayの扱いを拡充する議論は別途の話

## 対応コスト

- A (対応しない): **Point 0**
- B (コラムに一言): **Point 1** (TypedArrayコラムに数行追記)
- C (本格対応): **Point 3-5** (TypedArray自体の拡充が必要)
