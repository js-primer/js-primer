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

[配列章](https://jsprimer.net/basic/array/) ([`source/basic/array/README.md`](https://github.com/js-primer/js-primer/blob/f51b078770d648f227a1b471d2f4fcc5a7223049/source/basic/array/README.md)) の [ES2015 TypedArray コラム](https://jsprimer.net/basic/array/#typed-array) ([L166-](https://github.com/js-primer/js-primer/blob/f51b078770d648f227a1b471d2f4fcc5a7223049/source/basic/array/README.md#L166)) で軽く触れられているのみ。

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

- `atob` / `btoa` / `TextEncoder` / `TextDecoder` も **js-primer全体で登場しない**(`source` 全体にgrepして一切ヒットなし)
- バイナリ処理、エンコーディング処理は入門書のスコープ外

## 対応方針の検討

本ProposalはJavaScript入門書のスコープに対して非常にニッチ:

- `TypedArray` 自体がコラム扱いで本格的に扱われていない
- `Uint8Array` のメソッドや使い方は **js-primer本文に一切登場しない**(サンプル以外で)
- `atob` / `btoa` / `TextEncoder` / `TextDecoder` / `Buffer` なども本文に登場しない
- base64 という話題自体が本文に登場しない
- **紹介するための足場がない**

### 選択肢

- **A: 対応しない**
  - リリースノートのみ
  - 足場がない中で紹介するのは収まりが悪い
- **B: TypedArrayコラムに一言追記**
  - 「ES2026からbase64/hex文字列との相互変換メソッドが追加された」程度
  - コラム止まりなので詳細には立ち入らない

## 対応方針

**A (対応しない)**。リリースノートで「Uint8ArrayのBase64/Hex変換メソッドが追加された」と言及するだけ。

入門書で紹介するには、そもそもTypedArray/Uint8Arrayの本格解説が必要になるが、それは本Proposalとは独立した課題。

## 論点・メモ

- Node.jsでは`Buffer`が類似機能を持っていたが、これがWeb標準として提供されるのが本Proposalの意義
- 入門者の学習動機が弱く、具体的なユースケースを示しにくい
- TypedArrayの扱いを拡充する議論は別途の話であり、本Proposal単体で扱うものではない

## 対応コスト

- A (対応しない): **Point 0**
- B (コラムに一言): **Point 1** (TypedArrayコラムに数行追記)
- C (本格対応): **Point 3-5** (TypedArray自体の拡充が必要)
