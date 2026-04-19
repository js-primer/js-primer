# Array.fromAsync

- Proposal: https://github.com/tc39/proposal-array-from-async
- Spec: https://tc39.es/proposal-array-from-async/
- MDN: [Array.fromAsync](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync)
- Meta Issue: https://github.com/js-primer/js-primer/issues/1869

## 概要

`Array.fromAsync(items, mapFn?, thisArg?)` 静的メソッドが追加される。async iterableから配列を作成する。`Array.from` の非同期版。

```js
async function* asyncGen(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const arr = await Array.fromAsync(asyncGen(4));
console.log(arr); // => [0, 1, 2, 3]
```

## 動作仕様

- 引数: async iterable / iterable / array-like
- Promise を返す (配列に解決)
- **遅延評価**: 各要素を順番に処理(前のPromiseが解決してから次へ)
- 同期iterableの場合も各値が await される
- mapFn があれば各要素に適用(戻り値も await)

## Promise.allとの違い

| 特性 | Array.fromAsync | Promise.all(arr.map(...)) |
|---|---|---|
| イテレーション | 遅延(1つずつ) | 即時(全部) |
| 実行順序 | 直列(前が終わるまで次を待つ) | 並列 |
| 対象 | async iterable が自然に扱える | Promiseの配列 |
| エラー時の挙動 | 早期リターンで残りは実行しない | すべて開始済みでunhandled rejectionになりうる |

```js
// 直列・遅延
await Array.fromAsync(asyncIter);

// 並列・即時
await Promise.all(Array.from(asyncIter));
```

## 主なユースケース

- async iterator の結果を配列に集約(テスト、CLI、ストリーム処理)
- NPMの `it-all` ライブラリ(週50,000 downloads)の標準化
- `for await...of` でループしてpushするコードの置き換え

```js
// before
const results = [];
for await (const item of asyncIter) {
    results.push(item);
}

// after
const results = await Array.fromAsync(asyncIter);
```

## js-primerでの関連箇所

### 非同期処理章

[非同期処理:Promise/Async Function章](https://jsprimer.net/basic/async/) (`source/basic/async/README.md`) は大きく詳細な章:

- 同期処理 / 非同期処理の導入
- [ES2015] Promise
  - Promise.all / Promise.race
  - Promiseチェーン / 逐次処理
- [ES2017] Async Function
- await式
- Async Functionと反復処理 (`#async-function-array`)
- [ES2022] Module直下での await式
- [コラム] エラーファーストコールバック

### async iterator / for await...of の扱い

現状、**`for await...of` / `async iterator` / `async generator` は js-primer の章で一切登場しない**(`source/basic/async/README.md` に対する grep で0件)。

メインの非同期処理章は Promise / Async Function / await式 / Promise.all 中心で、async iterable関連はスコープ外になっている。

### 配列章のArray.from

[配列章](https://jsprimer.net/basic/array/) には **`Array.from` も専用節としては登場しない**(`Array.isArray`は[専用節](https://jsprimer.net/basic/array/#detect-array)がある)。ES2015の `Array.from` は[Array-likeコラム](https://jsprimer.net/basic/array/#array-like) (L1108, L1114) の文脈で触れられる程度。

### Array.fromAsyncの紹介はどこに置くか

位置の候補:
- 配列章にArray.fromの節から追加
- 非同期処理章の末尾
- 独立した小節として非同期処理章内のどこかに

どこに置くにしても、**前提となる `async iterable` / `for await...of` の概念をどこかで紹介する必要がある**(現状js-primerに存在しない)。

## ES2026に含まれるまでの経緯

Array.fromAsyncは2024年頃に既にブラウザ実装が進んでいたが、**ビルトインasync関数(built-in async functions)の仕様編集作業に依存**していたため、ES2025ではなくES2026まで仕様への取り込みが延びた。

> A variadic PR, which is adding `Array.fromAsync` was blocked on editorial work for built-in async functions, now resolved enabling its specification.
> — [2026-01-20 TC39 meeting notes](https://github.com/tc39/notes/blob/main/meetings/2026-01/january-20.md)

## 対応方針の検討

### 選択肢

- **A: 対応しない**
  - リリースノートのみ
- **B: 非同期処理章に軽く紹介**
  - 「Async Functionと反復処理」節の後などに、`Array.fromAsync` の短い紹介を追加
  - async iterableは深入りせず、async generatorの例1つで示す
- **C: 本格的にasync iterator/for await...ofから解説**
  - 章全体の見直しが必要
  - 入門書のスコープを少し超える

### 観察

- async iterableは今後重要度が増すと予想される(streaming, LLM response等)
  - ES2025 Iterator Helpers対応(#1782)でも議論があった
- 一方で現状はasync iterable自体が未解説なので、`Array.fromAsync` 単独の追加だと前提が足りない

## 対応方針

**A (対応しない)**。リリースノートでの言及のみ。

### 根拠

- `for await...of` / `async iterator` / `async generator` が js-primer の章で一切登場しない(`source/basic/async/README.md` に grep で 0 件)
- `Array.fromAsync` の価値は「async iterableを配列化する」ことで、**async iterable自体が未解説のため単独で紹介する足場がない**
- 本Proposal単体のためにasync iterable関連の解説を入れるのはコスト過大(Point 2-3以上)
- AsyncIteratorHelpersはStage 2で未対応。async iterable関連機能が揃ったタイミング(AsyncIteratorHelpersのStage 4到達など)で章立てて再検討するのが自然

Math.sumPreciseと同じく「足場不在で単独紹介が収まらない」パターン。

## 論点・メモ

- `Promise.all` との使い分けは実用上重要(並列 vs 直列、遅延 vs 即時)
- `for await...of` とのパフォーマンス比較で「await per item」の挙動を説明する必要
- LLMのストリーミングレスポンス処理のような今どきのユースケースと相性がいい
- **事前にasync iterator / for await...of の章内解説が必要になる**可能性が高い
- #1782(Iterator Helpers)のコメントで「LLMっぽいプロンプトの表示のようなユースケース」の言及があり、AsyncIteratorHelpersまで待つ判断の文脈もある

## 対応コスト

- A (対応しない): **Point 0**
- B (軽く紹介、async iterable前提解説込み): **Point 2-3**
- C (async iterator/for await...of含めて本格対応): **Point 5**

類似先例:
- Iterator Helpers ([#1782](https://github.com/js-primer/js-primer/issues/1782)): 章全体を追加でPoint 5相当
- Error Cause ([PR #1732](https://github.com/js-primer/js-primer/pull/1732)): Point 2 (1セクション追加)
