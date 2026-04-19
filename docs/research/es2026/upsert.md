# Upsert (`Map.prototype.getOrInsert` / `getOrInsertComputed`)

- Proposal: https://github.com/tc39/proposal-upsert
- Spec: https://tc39.es/proposal-upsert/
- MDN:
  - [Map.prototype.getOrInsert](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/getOrInsert)
  - [Map.prototype.getOrInsertComputed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/getOrInsertComputed)
  - [WeakMap.prototype.getOrInsert](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsert)
  - [WeakMap.prototype.getOrInsertComputed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsertComputed)
- Meta Issue: https://github.com/js-primer/js-primer/issues/1869
- Stage 4到達: 2026-01 TC39 meeting、Baseline 2026-02

## 概要

以下の4メソッドが追加される:

- `Map.prototype.getOrInsert(key, defaultValue)`
- `Map.prototype.getOrInsertComputed(key, callbackFunction)`
- `WeakMap.prototype.getOrInsert(key, defaultValue)`
- `WeakMap.prototype.getOrInsertComputed(key, callbackFunction)`

動作は以下と等価:

```js
// getOrInsert
if (map.has(key)) {
  return map.get(key);
}
map.set(key, defaultValue);
return defaultValue;
```

`getOrInsertComputed` は `defaultValue` の計算コストが高い場合に使う。コールバックはキーが存在しない時だけ評価される。

## 主なユースケース

### マルチマップ (配列へのpush)

```js
// before
if (!map.has(key)) map.set(key, []);
map.get(key).push(value);

// after
map.getOrInsert(key, []).push(value);
```

### デフォルト値の適用

```js
const options = readConfig();
options.getOrInsert("theme", "light");
options.getOrInsert("fontSize", 14);
```

### メモ化/キャッシュ (getOrInsertComputed)

```js
cache.getOrInsertComputed(element, (el) => el.getBoundingClientRect().height);
```

## js-primerでの関連箇所

### Map章の構成

[Map/Set · JavaScript Primer #jsprimer](https://jsprimer.net/basic/map-and-set/) ([`source/basic/map-and-set/README.md`](https://github.com/js-primer/js-primer/blob/f51b078770d648f227a1b471d2f4fcc5a7223049/source/basic/map-and-set/README.md))

- [ES2015] Map/Set (`#map-and-set`)
- Map (`#map`)
  - マップの作成と初期化 (`#map-new`)
  - **要素の追加と取り出し (`#map-read-and-write`)** — `set`/`get`/`has` を説明 ([L43-L82](https://github.com/js-primer/js-primer/blob/f51b078770d648f227a1b471d2f4fcc5a7223049/source/basic/map-and-set/README.md#L43-L82))
  - マップの反復処理 (`#map-iteration`)
  - [ES2024] Map.groupBy (`#map-group-by`) — 小節
  - マップとしてのObjectとMap (`#object-and-map`)
  - WeakMap (`#weakmap`)
  - [コラム] キーの等価性とNaN (`#key-and-nan`)
- Set (`#set`)
  - ...
  - [ES2025] 集合演算メソッド (`#set-operation-methods`) — 小節
  - WeakSet (`#weakset`)

### 既存コードに存在する「まさに upsert」パターン

既存の章に、`getOrInsert` / `getOrInsertComputed` で置き換えられる典型的なコードがすでに書かれている。

#### WeakMap のキャッシュ例 ([L353-L365](https://github.com/js-primer/js-primer/blob/f51b078770d648f227a1b471d2f4fcc5a7223049/source/basic/map-and-set/README.md#L353-L365)) → `getOrInsertComputed` に置き換え可能

```js
// 現在
const cache = new WeakMap();
function getHeight(element) {
    if (cache.has(element)) {
        return cache.get(element);
    }
    const height = element.getBoundingClientRect().height;
    cache.set(element, height);
    return height;
}

// getOrInsertComputedで書き換え
function getHeight(element) {
    return cache.getOrInsertComputed(element, (el) => el.getBoundingClientRect().height);
}
```

#### Map章 WeakMap節の EventEmitter 例 ([L326-L337](https://github.com/js-primer/js-primer/blob/f51b078770d648f227a1b471d2f4fcc5a7223049/source/basic/map-and-set/README.md#L326-L337)) → `getOrInsert` に置き換え可能

```js
// 現在
addListener(listener) {
    const listeners = listenersMap.get(this) ?? [];
    const newListeners = listeners.concat(listener);
    listenersMap.set(this, newListeners);
}

// 書き換え後 (非破壊スタイルは維持)
addListener(listener) {
    const listeners = listenersMap.getOrInsert(this, []);
    const newListeners = listeners.concat(listener);
    listenersMap.set(this, newListeners);
}
```

`concat` による非破壊更新スタイルは維持したまま、`get(this) ?? []` の部分だけを `getOrInsert(this, [])` に置き換える。`getOrInsert` が空配列をWeakMapにセットした直後に `set` で上書きするため一瞬だけ中間状態が生じる冗長性は残るが、動作は同じで読みやすさを損なわない。

#### todoapp の EventEmitter (`source/use-case/todoapp/**/src/EventEmitter.js`) → `getOrInsert` に置き換え可能

ユースケース章のtodoappでは、同じ `EventEmitter` クラスが複数フォルダに重複して存在しており(update-feature, delete-feature, add-checkbox, final/more, final/final, final/create-view, event-model/event-emitter の7ファイル)、いずれも以下のパターンを含む:

```js
// 現在
addEventListener(type, listener) {
    if (!this.#listeners.has(type)) {
        this.#listeners.set(type, new Set());
    }
    const listenerSet = this.#listeners.get(type);
    listenerSet.add(listener);
}

// getOrInsertComputed で書き換え (new Set()の遅延評価)
addEventListener(type, listener) {
    const listenerSet = this.#listeners.getOrInsertComputed(type, () => new Set());
    listenerSet.add(listener);
}
```

これは `has → set → get` の典型パターンで、**`getOrInsert` / `getOrInsertComputed` の紹介にそのまま使える**。ただし章本体はMap/Set章なので、todoappのコード更新はES2026対応の波及作業になる。

## 追加位置の候補

- **A**: `要素の追加と取り出し` (`#map-read-and-write`) 節の末尾に追記
  - `set`/`get`/`has` の直後に `getOrInsert` を紹介するのが流れとして自然
- **B**: `[ES2026] getOrInsert / getOrInsertComputed` として独立した小節を追加
  - 既存の `[ES2024] Map.groupBy` や `[ES2025] 集合演算メソッド` と並ぶ形
  - 年次明示で一貫性がある
- **C**: WeakMap 節の末尾でもキャッシュ例を書き換えつつ紹介

Map/Set章では既に `[ES2024] Map.groupBy` / `[ES2025] 集合演算メソッド` が独立小節として並んでいるので、**Bが既存方針と整合**する。

## 経緯 (API設計の変遷)

このProposalは名前・API設計が何度か変わっている:

1. **最初は `Map.prototype.emplace(key, { insert, update })`** — 2つのコールバックを持つAPI(C++のemplaceから命名)
2. **名前の問題**: C++の`emplace`は low-level 機能なのに対し本提案は high-level で混乱。`update` コールバックの実用頻度も低かった
3. **2024-10 TC39**: Daniel Minor(Mozilla)がchampionを引き継ぎ、API を `getOrInsert` / `getOrInsertComputed` に簡略化。[PR #58](https://github.com/tc39/proposal-upsert/pull/58)
4. **2025-04**: Stage 2.7
5. **2026-01**: Stage 4 到達

## なぜ `getOrInsertComputed` も追加されたか

[2024-10-09 TC39 meeting notes](https://github.com/tc39/notes/blob/main/meetings/2024-10/october-09.md) によると、2つのメソッドに分けたのは**どちらか一方では両方のユースケースに不都合が出る**から:

- **値による方式 `getOrInsert(key, defaultValue)`**: 計算コストが低いケース(0、`null`、空配列など)に直接値を渡す
- **コールバック方式 `getOrInsertComputed(key, callback)`**: 計算コストが高いケースに関数を渡す(キーが無い時だけ呼ばれる)

Kevin Gibbons (KG) は「多くの場合、デフォルト値は単純な値であり、コールバックでラップするコストは非効率」と指摘し、これが`getOrInsert`(値を直接渡せる版)を残す判断につながった。一方、`setdefault` 風の値渡しだけだと重い計算や副作用を無駄に実行してしまうため `getOrInsertComputed` も必要。

つまり`getOrInsertComputed` だけがあれば事足りるのではなく、

- 単純なデフォルト値では**コールバックのラップが冗長**
- 重い計算を渡すときは**事前評価されると無駄**

の両方を解決するために2つ並んだ。

RustやPythonにも同様の使い分けがある:

- Rust: `Entry::or_insert(value)` / `Entry::or_insert_with(|| ...)`
- Python: `dict.setdefault(key, value)` / `collections.defaultdict(factory)`

## 対応方針

- Map章に `[ES2026] Map.prototype.getOrInsert / getOrInsertComputed` の独立小節を追加する
- `getOrInsert` と `getOrInsertComputed` を**並べて紹介し、使い分け(事前評価 vs 遅延評価)を1-2行で説明する**
- WeakMap節の既存コード例(EventEmitter例 / キャッシュ例)をそれぞれ `getOrInsert` / `getOrInsertComputed` で書き換え、実例として機能させる
- todoappの EventEmitter も `getOrInsertComputed` で書き換える

新設小節の紹介例は、WeakMap節と todoapp で両メソッドの使用例が自然に登場するため、小節自体は軽めの例(カウンタや配列pushなど)でよい。

## 変更箇所のアウトライン

### Map章 (`source/basic/map-and-set/README.md`)

- **[追加] `[ES2026] Map.prototype.getOrInsert / getOrInsertComputed` 小節**
  - 位置: `[ES2024] Map.groupBy` の後、`マップとしてのObjectとMap` の前
  - 内容: 両メソッドを並べて紹介。事前評価(`getOrInsert`) vs 遅延評価(`getOrInsertComputed`) の使い分けを1-2行で説明
  - サンプル: Setはまだ未登場なので Array を値にした例(push / カウンタなど)

- **[書き換え] WeakMap節 EventEmitter例 ([L326-L337](https://github.com/js-primer/js-primer/blob/f51b078770d648f227a1b471d2f4fcc5a7223049/source/basic/map-and-set/README.md#L326-L337))**
  - `get(this) ?? []` → `getOrInsert(this, [])` (非破壊の `concat` スタイルは維持)
  - `getOrInsert` の実例として機能する

- **[書き換え] WeakMap節 キャッシュ例 ([L353-L365](https://github.com/js-primer/js-primer/blob/f51b078770d648f227a1b471d2f4fcc5a7223049/source/basic/map-and-set/README.md#L353-L365))**
  - `has / get / set` → `getOrInsertComputed(element, (el) => el.getBoundingClientRect().height)`
  - `getOrInsertComputed` の実例として機能する(毎回計算を避ける典型)

### todoapp (`source/use-case/todoapp/`)

- **[書き換え] `event-model/README.md` の `#event-emitter` 節(解説本文のコード)**
- **[書き換え] 以下7ファイルの `src/EventEmitter.js`**:
  - `event-model/event-emitter/src/EventEmitter.js`
  - `update-delete/add-checkbox/src/EventEmitter.js`
  - `update-delete/update-feature/src/EventEmitter.js`
  - `update-delete/delete-feature/src/EventEmitter.js`
  - `final/create-view/src/EventEmitter.js`
  - `final/more/src/EventEmitter.js`
  - `final/final/src/EventEmitter.js`
- 書き換え内容: `has / set / get` の3行パターン → `getOrInsertComputed(type, () => new Set())`

### 全体の読者体験

```
Map章
├── 要素の追加と取り出し (set/get/has)
├── マップの反復処理
├── [ES2024] Map.groupBy
├── [ES2026] getOrInsert / getOrInsertComputed          ← 追加 (解説)
├── マップとしてのObjectとMap
├── WeakMap
│   ├── EventEmitter例    (getOrInsert 実例)            ← 書き換え
│   └── キャッシュ例       (getOrInsertComputed 実例)   ← 書き換え
└── [コラム] キーの等価性とNaN
    ↓
todoapp
└── EventEmitter (getOrInsertComputed 実例)             ← 書き換え(7ファイル + 解説)
```

## 論点・メモ

- `Map.groupBy` が独立小節で扱われている前例があるので、独立小節方針は妥当
- 新設小節のサンプルコードを決める余地はある(カウンタ / Array push など)
- Array/Object には同種APIがなくMap/WeakMap限定なので、他章への波及はない

## 対応コスト

**見積: Point 2-3 → 3**

[CONTRIBUTING_EXPENSE.md](../../../CONTRIBUTING_EXPENSE.md) の基準に照らすと:

- 追加量: Map章に `[ES2026]` 小節を新規追加(1セクション相当 → Point 2)
- 書き換え: Map章 WeakMap節の2箇所(EventEmitter例、キャッシュ例)
- 波及: todoapp 章の解説本文 + 7ファイルの `EventEmitter.js` を全て書き換え
- Map章単独ならPoint 2だが、**todoappへの波及で複数章にまたがる**ためPoint 3に引き上げ

類似先例:
- Map.groupBy ([PR #1751](https://github.com/js-primer/js-primer/pull/1751)): Point 2 (1セクション追加のみ)
- Change Array by copy ([PR #1679](https://github.com/js-primer/js-primer/pull/1679)): Point 3 (複数セクションにまたがる)
