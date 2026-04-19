# Math.sumPrecise

- Proposal: https://github.com/tc39/proposal-math-sum
- Spec: https://tc39.es/proposal-math-sum/
- MDN: [Math.sumPrecise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sumPrecise)
- Meta Issue: https://github.com/js-primer/js-primer/issues/1869

## 概要

`Math.sumPrecise(iterable)` 静的メソッドが追加される。イテラブルの数値を精度ロスなく合計する。

```js
const values = [1e20, 0.1, -1e20];
values.reduce((a, b) => a + b, 0);  // => 0 (精度ロス)
Math.sumPrecise(values);            // => 0.1 (精確)
```

## 動作仕様

- 「任意精度で加算してから64-bit floatに丸めた場合の結果」と等しい最大限正確な値を返す
- 実装はShewchuk '96アルゴリズム(Pythonの`math.fsum`と同等)
- 入力はiterableのみ(可変長引数ではない)
- 非数値は拒否(`Math.max` と異なる)
- BigIntは非対応
- 空のiterableは `-0` を返す

## 主なユースケース

- 大きな値と小さな値が混在するデータの合計(天文計算、会計、科学計算)
- 多数の浮動小数点数の精度保持合計

## 既存手段との違い

```js
// reduceでの合計 (精度ロスしやすい)
values.reduce((a, b) => a + b, 0);

// Math.sumPrecise (精度保持)
Math.sumPrecise(values);
```

### 制約

- `0.1 + 0.2 !== 0.3` のような**リテラル段階での誤差は解決できない**
  - `0.1` と `0.2` は float の時点で既に誤差がある
  - Math.sumPreciseは加算アルゴリズムの誤差のみ対策

## js-primerでの関連箇所

### Math章

[Math章](https://jsprimer.net/basic/math/) (`source/basic/math/README.md`) の現在の構成:

- Mathオブジェクト
- 乱数を生成する (`#create-random-number`)
- 数値の大小を比較する (`#compare-number`)
- 数値を整数にする (`#convert-to-integer`)
- まとめ

章全体で115行と非常に小さく、「使用頻度が高いものに絞る」方針で書かれている。

### 数値/浮動小数点の扱い

[データ型とリテラル章](https://jsprimer.net/basic/data-type-and-literal/) の浮動小数点数リテラル節 (L201-) で浮動小数点は触れられているが、**精度ロス(`0.1 + 0.2`)への言及や対処法は扱われていない**。

```
データ型とリテラル章
├── 数値（Number）
│   ├── 整数リテラル
│   └── 浮動小数点数リテラル     ← 浮動小数点の定義はあるが精度ロスの話はなし
├── [ES2020] BigInt
├── [ES2021] Numeric Separators
```

## 対応方針の検討

主要ユースケースが「精度保持のためのsum」で、入門書的には比較的ニッチ:

- 浮動小数点誤差そのものが章で扱われていない
- 「合計を正確に取りたい」という課題は入門者の典型課題ではない
- ただし Math 章の小さな追加としては収まる

### 選択肢

- **A: 対応しない**
  - リリースノートのみ
- **B: Math章に1節追加**
  - `## [ES2026] Math.sumPrecise` として、浮動小数点誤差の回避方法として紹介
  - Math章がそもそも「使用頻度高いものに絞る」方針なので、あまり増やさない方がいいかもしれない
- **C: データ型とリテラル章の浮動小数点節にも言及**
  - 浮動小数点誤差→Math.sumPreciseの流れで紹介
  - 章構成見直しが必要

## 対応方針(仮)

**B (Math章に1節追加)** が一番自然。

Math章は小さいので、1節追加のコストは低い。紹介内容も `Math.sumPrecise([1e20, 0.1, -1e20])` の例が視覚的にインパクトがあって入門者にも伝わりやすい。

## 論点・メモ

- Math章は意図的に小さく保たれている。節を増やす判断は要検討
- 浮動小数点誤差の話題はそれ自体で独立した説明が必要になるが、Math.sumPreciseを紹介するだけなら軽く触れる程度でも成立する
- 学習動機としてはあまり強くない(多くの入門者にとって `reduce((a,b)=>a+b)` で十分)

## 対応コスト

- A (対応しない): **Point 0**
- B (Math章に節追加): **Point 1-2**

類似先例:
- Map.groupBy ([PR #1751](https://github.com/js-primer/js-primer/pull/1751)): Point 2 (1セクション追加)
