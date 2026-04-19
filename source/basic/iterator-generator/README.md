---
author: azu
description: "JavaScriptにおけるイテレータとジェネレータの基本概念と使い方について紹介します。ES2025で導入される新しいイテレータメソッドについても解説します。"
sponsors: []
---

# イテレータとジェネレータ {#iterator-generator}

本章では、JavaScriptのイテレータ（Iterator）とジェネレータ（Generator）を扱います。
イテレータは`for...of`の背後で動く「順に値を取り出す」仕組み、ジェネレータは順番に値を返せる関数を定義するための構文です。
あわせて、ES2025で追加されたIteratorメソッドを使ったデータ処理についても紹介します。

## はじめに {#introduction}

JavaScriptで複数のデータを処理する場合、多くの場面で配列を使用します。
しかし、大量のデータや無限に続くデータを扱う場合には、配列で扱うのが適切ではない場合があります。
なぜなら、利用できるメモリの限界や処理効率の観点から配列で扱うと問題となることがあるためです。

### 配列とイテレータの違い {#array-vs-iterator}

たとえば、1から5000までの数値を処理する場合を考えてみましょう。
配列を使う場合、まずすべての数値をメモリに格納してから処理を開始します。
つまり5000個の要素をもつ配列が必要となります。

{{book.console}}
[import, title="配列を使った場合"](./examples/basic/array-vs-iterator.example.js)

一方、イテレータを使う場合は、必要になったタイミングで値を生成します。
そのため、最初から5000個の要素をメモリに格納する必要はなく、必要な分だけを生成して処理できます。

次のコードでは、イテレータを使った例を示しています。
（`function*`はジェネレータ関数を定義するための構文で、詳しい使い方は後のセクションで説明します）

{{book.console}}
[import, title="イテレータを使った場合"](./examples/basic/iterator.example.js)

このような必要なタイミングで値を評価できる仕組みを**遅延評価（lazy evaluation）**と呼びます。

#### 遅延評価とは {#lazy-evaluation-concept}

遅延評価とは、値が実際に要求されるまで計算を遅らせる仕組みです。
配列の場合は「先行評価（eager evaluation）」で、すべての値を即座に計算してメモリに保存します。
一方、イテレータは「遅延評価（lazy evaluation）」で、`next`メソッドを呼び出したタイミングで初めて値を計算します。

{{book.console}}
```js
// 配列（先行評価）：すべての値を事前に計算
const numbers = [1, 2, 3];
console.log(numbers[0]); // => 1
console.log(numbers[1]); // => 2
console.log(numbers[2]); // => 3

// イテレータ（遅延評価）: 値は必要な時に計算
function* numberGenerator() {
    yield 1; // 初めてnext()が呼ばれた時に評価される
    yield 2; // 次のnext()が呼ばれた時に評価される
    yield 3; // さらに次のnext()が呼ばれた時に評価される
}
const iterator = numberGenerator();
console.log(iterator.next().value); // => 1
console.log(iterator.next().value); // => 2
console.log(iterator.next().value); // => 3
```

この必要なタイミングで処理を行うという点は、無限に続くデータや非常に大きなデータセットを扱う場合において重要になります。

## IterableプロトコルとIteratorプロトコル {#iterable-and-iterator}

JavaScriptにおけるイテレーション（反復処理）は、**Iterableプロトコル**と**Iteratorプロトコル**という2つのプロトコルによって定義されています。

この2つのプロトコルは、`for...of`ループの背後で動作する仕組みとなっています。

### Iterableプロトコル {#iterable-protocol}

Iterableプロトコルは、オブジェクトが反復可能であることを示すプロトコルです。
オブジェクトがIterableになるためには、`Symbol.iterator`というメソッドを持つ必要があります。

`Symbol.iterator`は、JavaScriptの組み込みSymbolの1つで、オブジェクトがIterableであることを示す特殊なキーです。
次のコードでは、Iterableプロトコルを実装した`iterableObject`を定義しています。

```js
const iterableObject = {
    // Symbol.iteratorメソッドの定義
    [Symbol.iterator]() {
        // Iteratorオブジェクトを返す
        return {
            // Iterator プロトコルを実装
        };
    },
};
```

### Iteratorプロトコル {#iterator-protocol}

Iteratorプロトコルは、反復処理時に次の値を取得するためのプロトコルです。
Iteratorプロトコルを実装するオブジェクトは、`next`メソッドを持つ必要があります。

`next`メソッドは、`{ value: 次の値, done: 完了かどうか }`という形式のオブジェクトを返します。

<!-- doctest:disable -->
```js
// nextメソッドの戻り値の形式
const result = iterator.next();
console.log(result.value); // 現在のIteratorが生成する値
console.log(result.done); // 反復が完了したかどうか（true: 完了、false: 継続）
```

### Iterable Iterator {#iterable-iterator}

IterableとIteratorはよく似ていますが、次の点が分かれば十分です。

- Iterable: `[Symbol.iterator]`メソッドでIteratorを返す
- Iterator: `next`メソッドで値を1つずつ取り出せるオブジェクト

次は、2つのプロトコルを両方とも実装したオブジェクトのコード例です。

```js
const iterableObject = {
    // Iteratorプロトコルを実装
    next() {
        // { value: 次の値, done: false } または { value: undefined, done: true } を返す
    },
    // Iterableプロトコルを実装
    [Symbol.iterator]() {
        return this; // 自分自身を返す（= 自分もIterable）
    },
};
// Iteratorを取得
const iterator = iterableObject[Symbol.iterator]();
// IteratorもIterable（自分自身を返す）
console.log(iterator === iterator[Symbol.iterator]()); // => true
```

このように、IterableとIteratorの両方のプロトコルを実装するオブジェクトを**Iterable Iterator**と呼びます。
基本的には「Iterableが新しいIteratorを返す」ため、この2つのプロトコルはセットで使われます。

### シンプルなIterable Iteratorの実装 {#simple-iterable-iterator}

具体例として、指定された範囲の数値を生成するIterable Iteratorを実装してみましょう。

次の`createRange`関数は、指定された`start`から`end`までの数値を順番に生成するIterable Iteratorを返します。
Iteratorの`next`メソッドを呼び出すことで、`start`から`end`までの数値を1つずつ取得できます。

{{book.console}}
[import, title="指定範囲の数値を生成するIterable/Iteratorの実装"](./examples/protocol/create-range.example.js)

### for...ofループでIterable Iteratorを使用する {#for-of-usage}

Iteratorの`next`メソッドを直接呼び出すことで、値を1つずつ取得できますが、通常は`for...of`ループを使ってIterable Iteratorを反復処理します。
`for...of`ループは、Iterableの`[Symbol.iterator]`メソッドを呼び出し取得したIteratorの`next`メソッドを自動的に繰り返し呼び出します。
つまり、先ほどの手動で`[Symbol.iterator]`メソッドを呼び出して取得したIteratorの`next`メソッドを繰り返し呼び出すという処理を自動的に行います。

{{book.console}}
[import, title="for...ofループでIterable Iteratorを反復処理"](./examples/protocol/manual-iteration.example.js)

Iterable Iteratorを扱うときは、基本的には`for...of`ループを使用します。
そのため、`[Symbol.iterator]`メソッドや`next`メソッドを直接呼び出すケースはあまりありません。

`for...of`などの構文を使うと、両プロトコルを意識する機会は多くありません。
ただし内部では、この2つのプロトコルが動いていることを理解しておくとよいでしょう。

## Iterableなビルトインオブジェクト {#built-in-iterables}

JavaScriptには、Iterableプロトコルを実装したビルトインオブジェクトが多数存在します。
これらのビルトインオブジェクトはIterableであるため、`for...of`ループで反復処理が可能です。
これらのビルトインオブジェクトが返すイテレータの多くがIterable Iteratorです。

いくつかの代表的なIterableなビルトインオブジェクトを紹介します。

### 配列（Array） {#array-iterable}

配列はもっとも基本的なIterableで、各要素を順番に反復できます。

{{book.console}}
```js
const fruits = ["apple", "banana", "orange"];

// for...of ループで配列を反復
for (const fruit of fruits) {
    console.log(fruit); // "apple", "banana", "orange"
}
```

### 文字列（String） {#string-iterable}

文字列もIterableであり、各文字を順番に反復できます。
このときの文字は、Code Pointごとに反復されます。

{{book.console}}
```js
const text = "Hello";

// 文字列の各文字を反復
for (const char of text) {
    console.log(char); // "H", "e", "l", "l", "o"
}
```

### Map {#map-iterable}

MapオブジェクトもIterableで、キーと値のペアを順番に反復できます。

{{book.console}}
```js
const userMap = new Map([
    ["name", "Alice"],
    ["age", 25],
    ["city", "Tokyo"],
]);

// Mapのエントリ（キーと値のペア）を反復
for (const [key, value] of userMap) {
    console.log(key + ": " + value); // "name: Alice", "age: 25", "city: Tokyo"
}
```

### Set {#set-iterable}

SetオブジェクトもIterableで、Setの重複のない値を順番に反復できます。

{{book.console}}

```js
const numberSet = new Set([1, 2, 3, 2, 1]);

// Setの要素を反復（重複は除去されている）
for (const num of numberSet) {
    console.log(num); // 1, 2, 3
}
```

## ジェネレータ関数 {#generator-functions}

今まではIterable Iteratorを手動で実装してきましたが、JavaScriptには**ジェネレータ関数**というIterable Iteratorを定義するための構文があります。

ジェネレータ関数は、`function*`キーワードを使って定義し、`yield`式を使って値を生成します。

```js
function* generatorFunction() {
    yield 1; // 最初の値を生成
    yield 2; // 次の値を生成
    yield 3; // 最後の値を生成
}
```

値を返しているように見える点で`yield`式は、関数の`return`文と似ています。
一方で、ジェネレータ関数では`next`メソッドが呼ばれるたびに、`yield`式の位置で関数の実行が一時停止し、その右辺の値を返します。
この`yield`式の特性は、通常の関数とは異なるので具体的なコードで確認してみましょう。

次のコードでは、`function*`キーワードで`simpleGenerator`というジェネレータ関数を定義しています。
`simpleGenerator`関数は、`yield`式を使って1, 2, 3の値を順番に生成します。
`simpleGenerator`関数で作成したGeneratorオブジェクトの`next`メソッドを呼び出すことで、次の`yield`まで関数の実行が進み、その値を取得できます。

{{book.console}}
```js
// ジェネレータ関数の定義
function* simpleGenerator() {
    yield 1; // 1度目のnext()が呼ばれたときに、ここまで実行され1を返す
    yield 2; // 2度目のnext()が呼ばれたときに、ここまで実行され2を返す
    yield 3; // 3度目のnext()が呼ばれたときに、ここまで実行され3を返す
    // 以降のnext()呼び出しで { value: undefined, done: true } を返して終了する
}

// Generatorオブジェクトを作成
const generator = simpleGenerator();

// Iteratorとして使用
console.log(generator.next()); // => { value: 1, done: false }
console.log(generator.next()); // => { value: 2, done: false }
console.log(generator.next()); // => { value: 3, done: false }
console.log(generator.next()); // => { value: undefined, done: true }
```

ジェネレータ関数から返されるGeneratorオブジェクトは、IterableプロトコルとIteratorプロトコルの両方を実装しています。
つまり、GeneratorオブジェクトもIterable Iteratorであり、`for...of`ループで反復処理が可能です。

{{book.console}}
```js
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// for...ofループでIterable Iteratorとして利用
for (const num of simpleGenerator()) {
    console.log(num); // 1, 2, 3
}
```

### ジェネレータ関数の利点 {#generator-benefits}

ジェネレータ関数では、通常の関数とは異なり、関数の途中で実行を一時停止し、値を返すことができます。
`yield`式は、関数の実行を一時停止し、値を呼び出し元に返します。
`next`メソッドが呼ばれると、次の`yield`まで関数の実行が再開されます。

そのため、次のように`next`メソッドを呼ぶまで、ジェネレータ関数の処理は実行されません。

{{book.console}}
```js
function* createGenerator() {
    console.log("a. 開始");
    yield 1;
    console.log("b. 中間");
    yield 2;
    console.log("c. 終了");
    yield 3;
}

const generator = createGenerator();
// ここではまだ何も出力されない
console.log(generator.next()); // "a. 開始" が出力され、{ value: 1, done: false }が返される
console.log(generator.next()); // "b. 中間" が出力され、{ value: 2, done: false }が返される
console.log(generator.next()); // "c. 終了" が出力され、{ value: 3, done: false }が返される
// 列挙が完了したので、次のnext()ではdoneがtrueになる
console.log(generator.next()); // => { value: undefined, done: true }
```

IteratorプロトコルとIterableプロトコルを手で書いて同様の実装も可能ですが、かなり複雑になります。
ジェネレータ関数と`yield`式を使うことで、イテレータの実装が簡潔に書けるようになるのがジェネレータ関数の大きな利点です。

### イテレータは一度しか列挙できない {#iterator-single-consume}

Iteratorは「現在どこまで読んだか」という内部状態を持つため、一度すべてを列挙し終えると同じIteratorをもう一度は列挙できません。
次のコードでは、`iterator`変数を`for...of`ループで2回列挙しようとしていますが、最初のループで`iterator`はすべての値を列挙してしまい、2回目のループでは何も出力されません。

{{book.console}}
```js
function* createNumbers() {
    yield 1;
    yield 2;
}
// GeneratorオブジェクトはIterable Iterator
const iterator = createNumbers();
const results = [];
// 1度目の列挙: `iterator`を列挙して値を取得
for (const value of iterator) {
    results.push(value);
}
console.log(results); // => [1, 2]
// 2度目の列挙: 列挙済みの`iterator`を再利用することはできない
for (const value of iterator) {
    results.push(value); // この行は実行されません
}
// 2度目の列挙後では何も追加されないので、resultsは最初の列挙結果のみ
console.log(results); // => [1, 2]
```

同じIteratorオブジェクトを再利用することはできないため、何度も列挙したい場合は新しいIteratorオブジェクトを作成する必要があります。
ジェネレータ関数は呼び出すたびに新しいIteratorを返すため、同じジェネレータ関数を呼び出すことで新しいIteratorを得ることができます。

{{book.console}}
```js
function* createNumbers() {
    yield 1;
    yield 2;
}
const results = [];
// 1度目の列挙: 新しいIteratorを作成して列挙
for (const value of createNumbers()) {
    results.push(value);
}
console.log(results); // => [1, 2]
// 2度目の列挙: 新しいIteratorを作成して列挙
for (const value of createNumbers()) {
    results.push(value);
}
console.log(results); // => [1, 2, 1, 2]
```

配列などのビルトインオブジェクトは`[Symbol.iterator]`メソッドを呼び出すたびに新しいIteratorを返すため、何度でも列挙できます。
次のコードでは、配列である`array`変数を列挙しているように見えます。
しかし、実際には`for...of`ループでは`array[Symbol.iterator]`メソッドが呼び出され、新しいIteratorが作成されているため、2回目のループでも列挙できています。

{{book.console}}
```js
const array = [1, 2];
const results = [];
// 1度目の列挙: `array`から新しいIteratorを作成して列挙
for (const value of array) {
    results.push(value);
}
console.log(results); // => [1, 2]
// 2度目の列挙: `array`から新しいIteratorを作成して列挙
for (const value of array) {
    results.push(value);
}
console.log(results); // => [1, 2, 1, 2]
```

## [ES2025] イテレータのメソッド {#iterator-methods}

ES2025では、`Iterator.prototype`に新しいメソッドが追加されました。
Iterableの`[Symbol.iterator]`メソッドが返すIteratorは`Iterator.prototype`を継承しているため、これらのメソッドを利用できます。

多くのメソッドは[配列のメソッド][]と同じ名前で、ほぼ同様の動作をします。
ただし、配列では全要素を一度に処理するのに対し、Iteratorでは必要になったタイミングで各要素を処理します。

### `Iterator.from`静的メソッド {#iterator-from}

`Iterator.from`メソッドは、GeneratorオブジェクトやIterableオブジェクトからイテレータを作成します。

配列などはIterableプロトコルは実装していますが、Iteratorそのものではありません。
そのため、`Iterator.prototype.take`や`Iterator.prototype.drop`などのイテレータメソッドを配列で使うことはできません。
配列に対して利用したい場合は、まずイテレータへ変換する必要があります。

次のコードでは、`Iterator.from`を使って配列からイテレータを作成し、`next`メソッドでイテレータから要素を取り出しています。

{{book.console}}
<!-- doctest:meta:{ "ECMAScript": "2025" } -->
```js
// 配列からIteratorを作成
const iterator = Iterator.from([1, 2, 3, 4, 5]);

console.log(iterator.next()); // => { value: 1, done: false }
console.log(iterator.next()); // => { value: 2, done: false }
```

Iterableプロトコルを実装しているオブジェクトであれば、`Iterator.from`メソッドを使ってイテレータを作成できます。

また、ビルトインオブジェクトにはイテレータを直接返すメソッドを持つものもあります。
Array/Map/Setでは`keys`/`values`/`entries`メソッドが、新しいイテレータを返します。
次のコードでは、`Map.prototype.entries`メソッドでキーと値のペアのイテレータを取得し、`for...of`文で順に取り出しています。

{{book.console}}
[import, title="Map.prototype.entriesで取得したイテレータをfor...ofで反復する"](./examples/basic/map-entries.example.js)

### `Iterator.prototype.toArray`メソッド {#iterator-toarray}

`Iterator.prototype.toArray`メソッドは、Iteratorのすべての要素を列挙した配列を返します。

{{book.console}}
<!-- doctest:meta:{ "ECMAScript": "2025" } -->
```js
const iterator = Iterator.from([1, 2, 3]).map((x) => x * 2);
// Iteratorを配列に変換
const array = iterator.toArray();
console.log(array); // => [2, 4, 6]
```

`Iterator.prototype.toArray`メソッド以外にも、スプレッド構文（`...`）や`Array.from`静的メソッドでもイテレータを配列に変換できます。

{{book.console}}
<!-- doctest:meta:{ "ECMAScript": "2025" } -->
```js
// スプレッド構文で列挙して配列化
const a = [...Iterator.from([1, 2, 3])];
console.log(a); // => [1, 2, 3]

// Array.from で列挙して配列化
const b = Array.from(Iterator.from([1, 2, 3]));
console.log(b); // => [1, 2, 3]
```

`Iterator.prototype.toArray`メソッドとスプレッド構文（`...`）や`Array.from`静的メソッドによる配列への変換の結果には違いはありません。
一方で、`toArray`メソッドはIteratorのメソッドであるため、他のメソッドと組み合わせてメソッドチェーンとして書く場合に便利です。


### `Iterator.prototype.take`メソッド {#iterator-take}

`Iterator.prototype.take`メソッドは、指定した数の要素のみを取得するIteratorを返します。

ジェネレータでは、無限シーケンスのイテレータを作成することができます。
そのような終わりのないイテレータから、必要な分だけ取り出す `take`メソッドで指定した数の要素を取得できます。

次のコードでは、無限に数値を生成する`infiniteNumbers`ジェネレータ関数から、最初の5つの数値を取得しています。

{{book.console}}
<!-- doctest:meta:{ "ECMAScript": "2025" } -->
```js
// 無限に数値を生成するジェネレータ
function* infiniteNumbers() {
    let num = 1;
    while (true) {
        yield num++;
    }
}
// 無限に数値を生成するジェネレータから最初の5つの数値を取得
const first5 = infiniteNumbers().take(5);
console.log(first5.toArray()); // => [1, 2, 3, 4, 5]
```

配列でこのような無限シーケンスを表現すると利用できるメモリなどの色々な制限があるため、かなり扱いにくいです。
一方で、イテレータとジェネレータを使った場合は無限シーケンスが簡単に作成でき、`take`メソッドを使うことで最初の5つといったように必要な分だけを取得できます。

### `Iterator.prototype.map`メソッド {#iterator-map}

`Iterator.prototype.map`メソッドは、各要素を変換した新しいIteratorを返します。
このメソッドは、[配列の`map`メソッド][配列のmap]と同じように動作します。

{{book.console}}
<!-- doctest:meta:{ "ECMAScript": "2025" } -->
```js
const numbers = Iterator.from([1, 2, 3, 4, 5]);
// 各数値を2倍にする
const doubled = numbers.map((x) => x * 2);
console.log(doubled.toArray()); // => [2, 4, 6, 8, 10]
```

### `Iterator.prototype.filter`メソッド {#iterator-filter}

`Iterator.prototype.filter`メソッドは、条件に一致する要素のみを含む新しいIteratorを返します。
このメソッドは、[配列の`filter`メソッド][配列のfilter]と同じように動作します。

{{book.console}}
<!-- doctest:meta:{ "ECMAScript": "2025" } -->
```js
const numbers = Iterator.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// 偶数のみを抽出
const evenNumbers = numbers.filter((x) => x % 2 === 0);
console.log(evenNumbers.toArray()); // => [2, 4, 6, 8, 10]
```

### `Iterator.prototype.drop`メソッド {#iterator-drop}

`Iterator.prototype.drop`メソッドは、指定した数の要素をスキップした新しいIteratorを返します。

{{book.console}}
<!-- doctest:meta:{ "ECMAScript": "2025" } -->
```js
const numbers = Iterator.from([1, 2, 3, 4, 5]);
// 最初の2つの要素をスキップ
const skipped = numbers.drop(2);
console.log(skipped.toArray()); // => [3, 4, 5]
```

### `Iterator.prototype.flatMap`メソッド {#iterator-flatmap}

`Iterator.prototype.flatMap`メソッドは、各要素をマップしてから結果をフラット化します。
このメソッドは、[配列の`flatMap`メソッド][配列のflatMap]と同じように動作します。

{{book.console}}
<!-- doctest:meta:{ "ECMAScript": "2025" } -->
```js
const words = Iterator.from(["hi", "fi"]);
// 各文字列を文字の配列に分割してフラット化
const chars = words.flatMap((word) => word.split(""));
console.log(chars.toArray()); // => ["h", "i", "f", "i"]
```

### `Iterator.prototype.reduce`メソッド {#iterator-reduce}

`Iterator.prototype.reduce`メソッドは、すべての要素を単一の値に集約します。
このメソッドは、[配列の`reduce`メソッド][配列のreduce]と同じように動作します。

{{book.console}}
<!-- doctest:meta:{ "ECMAScript": "2025" } -->
```js
const numbers = Iterator.from([1, 2, 3, 4, 5]);
// 合計を計算
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // => 15
// 文字列を連結
const words = Iterator.from(["Hello", "Iterator", "Methods"]);
const sentence = words.reduce((acc, word) => acc + " " + word);
console.log(sentence); // => "Hello Iterator Methods"
```

### メソッドチェーンによる宣言的な処理 {#method-chaining}

Iteratorメソッドをチェーンすることで、複雑なデータ処理を宣言的に記述できます。

次のコードでは、10個の数値から偶数をフィルタリングし、最初の3つを取得して2乗して配列に変換しています。

{{book.console}}
<!-- doctest:meta:{ "ECMAScript": "2025" } -->
```js
// 複数のメソッドを組み合わせた例
const result = Iterator.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .filter((x) => x % 2 === 0) // 偶数をフィルタリング
    .take(3) // 最初の3つを取得
    .map((x) => x * x) // 2乗する
    .toArray(); // 配列に変換

console.log(result); // => [4, 16, 36]
```

配列では、`filter`メソッドが配列のすべての要素に対して適用されます。
そのため、必ず`1`から`10`までのすべての要素を処理します。

一方で、Iteratorでは必要な分だけを処理します。
そのため、`filter`メソッドは、最初の3つの偶数(`2,4,6`)を見つけた時点で処理を終了します。

要素数が少ない場合は、配列とIteratorの違いはあまり感じられませんが、要素数が多い場合や無限シーケンスを扱う場合は、Iteratorの方が効率的に処理できます。

<!-- doctest:enable -->

## まとめ {#conclusion}

この章では、JavaScriptにおけるイテレータとジェネレータについて紹介しました。

- **Iterableプロトコル**と**Iteratorプロトコル**は、JavaScriptのイテレーション（反復処理）の基盤となる仕組み
- `for...of`ループは、これらのプロトコルを利用してIterableオブジェクトを反復処理できる
- **ジェネレータ関数**（`function*`と`yield`）を使うことで、Iterable Iteratorを簡潔に作成できる
- ES2025で追加された新しいイテレータメソッドにより、配列と同様の宣言的なデータ処理ができる
- イテレータの**遅延評価**特性により、大量のデータや無限シーケンスを効率的に処理できる

イテレータとジェネレータを理解することで、配列では扱うのが難しい大規模なデータなどを効率的に処理できるようになります。
特に実際のアプリケーションでは、一度にメモリへ載せられない大きなデータや、サーバーからのストリーミングのように終わりが見えないデータを扱う場面で有効です。

[配列]: ../array/README.md
[配列のmap]: ../array/README.md#array-map
[配列のfilter]: ../array/README.md#array-filter
[配列のflatMap]: ../array/README.md#array-flatmap
[配列のreduce]: ../array/README.md#array-reduce
[配列のメソッド]: ../array/README.md#array-prototype-method
