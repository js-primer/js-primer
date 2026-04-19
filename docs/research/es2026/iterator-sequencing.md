# Iterator Sequencing (`Iterator.concat`)

- Proposal: https://github.com/tc39/proposal-iterator-sequencing
- Spec: https://tc39.es/proposal-iterator-sequencing/
- MDN: [Iterator.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/concat)
- Meta Issue: https://github.com/js-primer/js-primer/issues/1869
- Baseline: 2026 (Chrome 146 / Safari 26.4)

## 概要

`Iterator.concat(...iterables)` 静的メソッドが追加される。複数のiterableを順番につなげて1つのiteratorとして返す。

```js
const lows = [1, 2, 3];
const highs = [6, 7, 8];
const digits = Iterator.concat(lows, [4, 5], highs);

for (const n of digits) {
    console.log(n);
}
// => 1, 2, 3, 4, 5, 6, 7, 8
```

- `Array.prototype.concat` のIterator版
- 遅延評価: 先頭のiterableから順に必要な分だけ消費する
- 配列・文字列・Map・Setなどの**iterable**が対象
- iterableでないiterator(ジェネレータ以外の独自iteratorなど)は `Iterator.from()` でラップしてから渡す

## 主なユースケース

### 複数のデータソースをまとめて処理

```js
// 複数ページのデータをストリーム的に処理
for (const item of Iterator.concat(page1, page2, page3)) {
    process(item);
}
```

### 無限イテレータと有限値を連結

```js
const naturalNumbers = /* infinite iterator */;
Iterator.concat([0], naturalNumbers); // 0, 1, 2, 3, ...
```

### 既存の `flatMap` での代替

`Iterator.prototype.flatMap`(恒等関数を使う)でも同様のことは可能だが、`concat` の方が意図が明確。

```js
// 同等だが concat の方が読みやすい
Iterator.from([iter1, iter2, iter3]).flatMap(x => x);
Iterator.concat(iter1, iter2, iter3);
```

## js-primerでの関連箇所

### iterator-generator章

[イテレータとジェネレータ](https://jsprimer.net/basic/iterator-generator/) (`source/basic/iterator-generator/README.md`) はES2025のIterator Helpers対応で追加された章([#1782](https://github.com/js-primer/js-primer/issues/1782))。

節構成:
- はじめに
- IterableプロトコルとIteratorプロトコル
- Iterableなビルトインオブジェクト
- ジェネレータ関数
- **[ES2025] イテレータのメソッド** (`#iterator-methods`) L391-
  - `Iterator.from`静的メソッド (`#iterator-from`) L399-
  - `Iterator.prototype.toArray`メソッド
  - `Iterator.prototype.take`メソッド
  - `Iterator.prototype.map`メソッド
  - `Iterator.prototype.filter`メソッド
  - `Iterator.prototype.drop`メソッド
  - `Iterator.prototype.flatMap`メソッド
  - `Iterator.prototype.reduce`メソッド
  - メソッドチェーンによる宣言的な処理
- まとめ

Iterator.concatは**静的メソッド**なので、`Iterator.from` と並ぶ位置が自然。章内に「複数iteratorを手動で結合」している既存パターンは**存在しない**ため、書き換え対象はなく、新規解説のみ。

### `Array.prototype.concat` との対称性

[配列章](https://jsprimer.net/basic/array/) には `concat` メソッドが専用節として詳しく解説されている:

- [配列同士を結合](https://jsprimer.net/basic/array/#concat) (L522-L540): `array.concat(array, value, ...)` の基本動作
- [ES2015 配列の展開](https://jsprimer.net/basic/array/#spread) (L542-L560): Spread構文との比較
- [破壊的/非破壊的メソッド](https://jsprimer.net/basic/array/#mutable-immutable) (L667-L678): 非破壊メソッドの代表例として `concat` が登場

既に `Array.prototype.concat` は章内で繰り返し登場しており、**`Iterator.concat` を対称のAPIとして紹介する筋は通っている**。

## API設計の経緯

本Proposalは当初「`Iterator.from(...items)` の可変長引数版」として提案されたが、[Issue #1](https://github.com/tc39/proposal-iterator-sequencing/issues/1) で以下の問題点が指摘され、独立した`Iterator.concat` に変更された:

- `Iterator.from(null)` は即座にエラーを投げるのに、`Iterator.from(null, it)` だと使用時にエラーになる不整合
- `Array.from(x, y)` (第2引数は mapFn) と意味が大きく異なり、既存APIとの乖離が大きい

## 対応方針

**対応する (A案)**。`Iterator.concat` は既存のIterator Helpers群と同じ粒度で紹介する。

### 追加位置

**A: `[ES2025] イテレータのメソッド` 節内にサブ節として追加** (`Iterator.from` の後)

- タイトル: `### [ES2026] Iterator.concat静的メソッド`
- 静的メソッド枠 (`from`, `concat`) → prototypeメソッド枠 (`toArray`, `take`, ...) の構造で自然
- ES2025括りの中にES2026が混ざるのでサブ節にES2026タグを付けて対応

### 検討した代案

- **B: 独立した `[ES2026] Iterator.concat` 節として追加**
  - `[ES2025] イテレータのメソッド` 節の後ろに配置
  - 年次の独立で見た目は整うが、Iterator Helpers関連なのに節が離れるとつながりが弱くなる
- **C: ES2025節の末尾 (reduce/メソッドチェーンの後) に配置**
  - `from → toArray` の「作成→配列化」ペアは維持できる
  - ただし `Iterator.from` が「まずiteratorを得る手段」として先頭にある構造からすると、同じ静的作成系の `concat` は `from` の直後に並べるほうが構造的に意味が通る

### 前提: #1870

現状の `Iterator.from` 節の例 (L429-441) は、まだ紹介されていない `toArray` を先取り使用している。`from → concat → toArray` の流れを自然にするために、`Iterator.from` 節の例を `for...of` ベースに書き換える [#1870](https://github.com/js-primer/js-primer/issues/1870) を先行または並行で実施する。

### 内容(イメージ)

- `Iterator.concat(...iterables)` の基本動作
- 遅延評価であること
- Iterator Helpersとの組み合わせ例(`map` や `toArray` と繋げる例)
- `Iterator.from` でwrapが必要な場合の注意(iterableでないiterator)

## 変更箇所のアウトライン

```
イテレータとジェネレータ章
├── はじめに
├── IterableプロトコルとIteratorプロトコル
├── Iterableなビルトインオブジェクト
├── ジェネレータ関数
├── [ES2025] イテレータのメソッド
│   ├── Iterator.from静的メソッド
│   ├── [ES2026] Iterator.concat静的メソッド         ← 追加 (A案)
│   ├── Iterator.prototype.toArray
│   ├── Iterator.prototype.take
│   ├── Iterator.prototype.map
│   ├── Iterator.prototype.filter
│   ├── Iterator.prototype.drop
│   ├── Iterator.prototype.flatMap
│   ├── Iterator.prototype.reduce
│   └── メソッドチェーンによる宣言的な処理
└── まとめ
```

## 論点・メモ

- Iterator Helpers章(#1782)と同じ流れで学べるのでA案が自然
- `Iterator.from` の後ろに置くことで「静的メソッド2つ」の並びになる
- サブ節にES2026タグを付けて「ES2025の中にES2026が混ざる」ことを示す前例はjs-primerにない
- `Iterator.from` 節の例が `toArray` を先取り使用している件は #1870 で別対応
- AsyncIteratorHelpersはStage 2で未対応。Iterator.concatもsync側のみ

## 対応コスト

**見積: Point 2** (1つのサブ節を追加)

類似先例:
- [ES2024] Map.groupBy ([PR #1751](https://github.com/js-primer/js-primer/pull/1751)): Point 2 (1セクション追加)
- [ES2022] Error Cause ([PR #1732](https://github.com/js-primer/js-primer/pull/1732)): Point 2 (1セクション追加)
