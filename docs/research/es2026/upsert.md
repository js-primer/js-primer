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

## 対応方針(仮)

- 対応する方向で問題なし
- 位置はB案(`[ES2026] Map.prototype.getOrInsert / getOrInsertComputed` の独立小節を追加)が既存の並びと整合
- WeakMap の既存キャッシュ例は `getOrInsertComputed` に書き換えるのが自然
- WeakMap版の存在も触れる(小節でMapと並べて言及)

## 論点・メモ

- `Map.groupBy` が独立小節で扱われている前例があるので、独立小節方針が妥当
- `getOrInsertComputed` は「計算コストが高い場合」の説明を入れるかどうか。入門書的には単純な例(`getOrInsert` だけ)でも意図は伝わる
- WeakMap側のメソッドも紹介するか。章内に既にキャッシュ例があるのでついでに扱う方が自然
- Array/Object のような「similar upsert」ではなく Map/WeakMap に限定された追加なので扱いやすい
