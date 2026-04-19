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

[Map/Set · JavaScript Primer #jsprimer](https://jsprimer.net/basic/map-and-set/) (`source/basic/map-and-set/README.md`)

- [ES2015] Map/Set (`#map-and-set`)
- Map (`#map`)
  - マップの作成と初期化 (`#map-new`)
  - **要素の追加と取り出し (`#map-read-and-write`)** — `set`/`get`/`has` を説明 (L43-L82)
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

#### WeakMap のキャッシュ例 (L353-L365) → `getOrInsertComputed` に置き換え可能

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

#### EventEmitter のリスナー管理 (L326-L337)

```js
// 現在
addListener(listener) {
    const listeners = listenersMap.get(this) ?? [];
    const newListeners = listeners.concat(listener);
    listenersMap.set(this, newListeners);
}
```

この例は非破壊更新(`concat`)なので、`getOrInsert` で置き換えるとpushで破壊的にしてしまう。書き換えるなら例コード全体の方針を変える必要がある。

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

- `getOrInsert(key, defaultValue)` は `defaultValue` が**事前評価される**
  - `map.getOrInsert(key, [])` は毎回配列リテラルが作られる(キーが既に存在していても)
  - 重い計算や副作用のあるデフォルト生成では無駄
- `getOrInsertComputed(key, callback)` は **キーが無い時だけcallbackが呼ばれる**(遅延評価)
  - メモ化/キャッシュ、重いオブジェクト生成、副作用のある生成で活きる

RustやPythonにも同様の使い分けがある:

- Rust: `Entry::or_insert(value)` / `Entry::or_insert_with(|| ...)`
- Python: `dict.setdefault(key, value)` / `collections.defaultdict(factory)`

## 対応方針(仮)

- 対応する方向で問題なし
- 位置はB案(`[ES2026] Map.prototype.getOrInsert / getOrInsertComputed` の独立小節)が既存の並びと整合
- **紹介する対象の粒度**は判断が必要
  - A) `getOrInsert` だけを紹介し、`getOrInsertComputed` は「遅延評価版も別途ある」程度に留める
  - B) 両方を並べて紹介し、使い分け(事前評価 vs 遅延評価)を1-2行で説明
  - C) 両方を別々に解説
  - 入門書的にはAまたはBが妥当
- WeakMap版をどう扱うか
  - WeakMap節のキャッシュ例を `getOrInsertComputed` に書き換える余地あり
  - 「WeakMapにも同じメソッドがある」程度に留めるのも手

## 論点・メモ

- `Map.groupBy` が独立小節で扱われている前例があるので、独立小節方針は妥当
- `getOrInsertComputed` は入門書的には複雑に寄るので、基本は `getOrInsert` 中心で書く方が読者に優しい
- 既存のWeakMapキャッシュ例(L353-L365)は `getOrInsertComputed` の典型例なので、章内で再利用できる
- Array/Object には同種APIがなくMap/WeakMap限定なので、他章への波及はない
