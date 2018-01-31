---
author: azu
---

# クラス

「クラス」と一言にいってもさまざまであるため、ここでは**構造**、**動作**、**状態**を定義できるものを示すことにします。
また、この章では概念を示す場合は**クラス**と呼び、クラスに関する構文（記述するコード）のことを`class`構文と呼びます。

**クラス**とは、**動作**を持った**構造**を定義でき、その構造からインスタンスを作成し、そのインスタンスは**状態**をもてるものです。
とても抽象的なことに見えますが、これは今までオブジェクトや関数を使って表現してきたものにも見えます。
実際にJavaScriptではES2015より前までは`class`構文はなく、関数を使いクラスのようなものを表現して扱っていました。

ES2015で`class`構文が導入されましたが、この`class`構文で定義したクラスは一種の関数オブジェクトです。
`class`構文ではプロトタイプベースの継承の仕組みの上に関数でクラスを表現しています。
そのため、`class`構文はクラスを作るための関数定義や継承をパターン化した書き方といえます。[^糖衣構文]

JavaScriptでは関数で学んだことの多くはクラスでもそのまま適応されます。
また、関数の定義方法として関数宣言文と関数式があるように、クラスにもクラス宣言文とクラス式があります。
この章では、`class`構文でのクラスの定義や継承、クラスの性質について学んでいきます。

## クラスの定義 {#class-declaration}

クラスを定義するには`class`構文を使いますが、クラスの定義方法にはクラス宣言文とクラス式があります。

まずは、クラス宣言文によるクラスの定義方法を見ていきます。

クラス宣言文では`class`キーワードを使い、`class クラス名{ }`のようにクラスの**構造**を定義できます。
クラスは必ずコンストラクタを持ち、`constructor`という名前のメソッドとして定義します。
コンストラクタとは、そのクラスからインスタンスを作成する際にインスタンスに関する**状態**の初期化を行うメソッドです。

{{book.console}}
```js
class MyClass {
    constructor() {
        // コンストラクタ関数の処理
    }
}
```

もうひとつの定義方法であるクラス式は、クラスを値として定義する方法です。
クラス式ではクラス名を省略できます。これは関数式における匿名関数と同じです。

{{book.console}}
```js
const MyClass = class MyClass {
    constructor() {}
};

const AnnonymousClass = class {
    constructor() {}
};
```

コンストラクタ関数内で何も処理がない場合はコンストラクタの記述を省略できます。
省略した場合には自動的に空のコンストラクタが定義されるため、クラスにはコンストラクタが必ず存在します。

```js
class MyClassA {
    constructor() {
        // コンストラクタの処理が必要なら書く
    }
}
// コンストラクタの処理が不要な場合は省略できる
class MyClassB {

}
```

## クラスのインスタンス化 {#class-instance}

クラスは`new`演算子でインスタンスであるオブジェクトを作成できます。
`class`構文で定義したクラスからインスタンスを作成することを**インスタンス化**と呼びます。
あるインスタンスが指定したクラスから作成されたものかを判定するには`instanceof`演算子が利用できます。

{{book.console}}
```js
class MyClass {
}
// `MyClass`をインスタンス化する
const myClass = new MyClass();
// 毎回新しいインスタンス(オブジェクト)を作成する
const myClassAnother = new MyClass();
// それぞれのインスタンスは異なるオブジェクト
console.log(myClass === myClassAnother); // => false
// クラスのインスタンスかどうかは`instanceof`演算子で判定できる
console.log(myClass instanceof MyClass); // => true
console.log(myClassAnother instanceof MyClass); // => true
```

このままでは何もできない空のクラスなので、値を持ったクラスを定義してみましょう。

クラスではインスタンスの初期化処理をコンストラクタ関数で行います。
コンストラクタ関数は`new`演算子でインスタンス化されるときに暗黙的によばれ、
コンストラクタのなかでの`this`はこれから新しく作るインスタンスオブジェクトとなります。

次のコードでは`x`座標と`y`座標の値をもつ`Point`というクラスを定義しています。
コンストラクタ関数(`constructor`)の中でインスタンスオブジェクト（`this`）の`x`と`y`プロパティに値を代入して初期化しています。

{{book.console}}
```js
class Point {
    // コンストラクタ関数の仮引数として`x`と`y`を定義
    constructor(x, y) {
        // コンストラクタ関数における`this`はインスタンスを示すオブジェクト
        // インスタンスの`x`と`y`プロパティにそれぞれ値を設定する
        this.x = x;
        this.y = y;
    }
}
```

この`Point`クラスのインスタンスを作成するには`new`演算子を使います。
`new`演算子には関数呼び出しと同じように引数を渡すことができます。
`new`演算子の引数はクラスの`constructor`メソッド（コンストラクタ関数）の仮引数に渡されます。
そして、コンストラクタのなかではインスタンスオブジェクト(`this`）の初期化処理を行います。

{{book.console}}
```js
class Point {
    // 2. コンストラクタ関数の仮引数として`x`には`3`、`y`には`4`が渡る
    constructor(x, y) {
        // 3. インスタンス(`this`)の`x`と`y`プロパティにそれぞれ値を設定する
        this.x = x;
        this.y = y;
        // コンストラクタではreturn文は書かない
    }
}

// 1. コンストラクタを`new`演算子で引数とともに呼び出す
const point = new Point(3, 4);
// 4. `Point`のインスタンスである`point`の`x`と`y`プロパティには初期化された値が入る
console.log(point.x); // => 3
console.log(point.y); // => 4
```

このようにクラスからインスタンスを作成するには必ず`new`演算子を使います。

一方、クラスは通常の関数として呼ぶことができません。
これは、クラスのコンストラクタはインスタンス（`this`）の初期化する場所であり、通常の関数とは役割が異なるためです。

{{book.console}}
```js
class MyClass {
    construtor() { }
}
// クラスのコンストラクタ関数として呼び出すことはできない
MyClass(); // => TypeError: class constructors must be invoked with |new|
```

コンストラクタは初期化処理を書く場所であるため、`return`文で値を返すべきではありません。
JavaScriptでは、コンストラクタで任意のオブジェクトを返すことが可能ですが行うべきではありません。
なぜなら、コンストラクタは`new`演算子で呼び出び、その評価結果はクラスのインスタンスを期待するのが一般的であるためです。

{{book.console}}
```js
// 非推奨の例: コンストラクタで値を返すべきではない
class Point {
    constructor(x, y) {
        // `this`の代わりにただのオブジェクトを返せる
        return { x, y };
    }
}

// `new`演算子の結果はコンストラクタ関数が返したただのオブジェクト
const point = new Point(3, 4);
console.log(point); // => { x: 3, y: 4 }
// Pointクラスのインスタンスではない
console.log(point instanceof Point); // => false
```

### [Note] クラス名は大文字で始める {#class-name-start-upper-case}

JavaScriptでは慣習としてクラス名は大文字で始まる名前を付けます。
これは、変数名にキャメルケースを使う慣習があるのと同じで、名前自体には特別なルールがあるわけではありません。
クラス名を大文字にしておき、そのインスタンスは小文字で開始すれば、名前が被らないため合理的な理由で好まれています。

```js
class Thing {}
const thing = new Thing();
```

### [コラム] `class`構文と関数でのクラスの違い {#class-vs-function}

ES2015より前はこれらのクラスを`class`構文ではなく、関数で表現していました。
その表現方法は人によってさまざまで、これも`class`構文という統一した表現が導入された理由の1つです。

次のコードでは先ほどの`class`構文でのクラスを簡略化した関数での1つの実装例です。
この関数でのクラス表現は、継承の仕組みなどは省かれていますが、`class`構文とよく似ています。

{{book.console}}
```js
// コンストラクタ関数
const Point = function PointConstructor(x, y) {
    // インスタンスの初期化処理
    this.x = x;
    this.y = y;
};

// `new`演算子でコンストラクタ関数から新しいインスタンスを作成
const point = new Point(3, 4);
```

大きな違いとして、`class`構文で定義したクラスは関数と呼び出すことができません。
クラスは`new`演算子でインスタンス化して使うものなので、これはクラスの誤用を防ぐ仕様です。
一方、関数でのクラス表現はただの関数なので、当然関数として呼び出せます。

{{book.console}}
```js
// `class`構文でのクラス
class MyClass {
}
// 関数でのクラス表現
function MyClassLike() {
}
// 関数なので関数として呼び出せる
MyClassLike(); 
// クラスは関数として呼び出すと例外が発生する
MyClass(); // => TypeError: class constructors must be invoked with |new|
```

このように、`class`構文で定義したクラスは一種の関数ですが、そのクラスはクラス以外には利用できないようになっています。

## クラスのメソッドの定義 {#class-method-definition}

クラスにおける**動作**はメソッドによって定義できます。
`constructor`メソッドは初期化時に呼ばれる特殊なメソッドですが、`class`構文ではクラスに対して自由にメソッドを定義できます。

次のように`class`構文ではクラスに対してプロトタイプメソッドを定義できます。
メソッドの中からクラスのインスタンスを参照するには、`construtor`メソッドと同じく`this`を使います。
このクラスのメソッドにおける`this`は「[関数とthis][]の章」で学んだメソッドと同じくベースオブジェクトを参照します。

<!-- doctest:disable -->
```js
class クラス {
    メソッド() {
        // ここでの`this`はベースオブジェクトを参照
    }
}

const インスタンス = new クラス();
// メソッド呼び出しのベースオブジェクト(`this`)は`インスタンス`となる
インスタンス.メソッド();
```

クラスのプロトタイプメソッド定義では、オブジェクトにおけるメソッドとは異なり`key : value`のように`:`区切りでメソッドを定義できないことに注意してください。
つまり、次のような書き方はSyntax Errorとなります。

<!-- textlint-disable -->
<!-- doctest:disable -->
```js
// クラスでは次のようにメソッドを定義できない
class クラス {
   // Syntax Error
   メソッド: () => {}
   // Syntax Error
   メソッド: function(){}
}
```
<!-- textlint-enable -->

このようにクラスに対して定義したメソッドは、クラスの各インスタンスから**共有されるメソッド**となります。
このインスタンス間で共有されるメソッドのことを**プロトタイプメソッド**と呼びます。
また、プロトタイプメソッドはインスタンスから呼び出せるメソッドであるため**インスタンスメソッド**とも呼ばれます。

この書籍では、プロトタイプメソッド（インスタンスメソッド)を`クラス#メソッド名`のように表記します。

次のコードでは、`Counter`クラスに`increment`メソッド（`Counter#increment`メソッド）を定義しています。
`Counter`クラスのインスタンスはそれぞれ別々の状態（`count`プロパティ）を持ちます。
一方、`increment`メソッドはプロトタイプメソッドとして定義されているため、各インスタンス間から参照先が同じとなります。

{{book.console}}
```js
class Counter {
    constructor() {
        this.count = 0;
    }
    // `increment`メソッドをクラスに定義する
    increment() {
        // `this`は`Counter`のインスタンスを参照する
        this.count++;
    }
}
const counterA = new Counter();
const counterB = new Counter();
// `counterA.increment()`のベースオブジェクトは`counterA`インスタンス
counterA.increment();
// 各インスタンスのもつプロパティ(状態)は異なる
console.log(counterA.count); // => 1;
console.log(counterB.count); // => 0
// 各インスタンスのメソッドは共有されている(同じ関数を参照している)
console.log(counterA.increment === counterB.increment); // => true
```

プロトタイプメソッドはクラスの継承の仕組みとも関連するため後ほど詳細に解説します。

### クラスのインスタンスに対してメソッドを定義する {#class-instance-method}

`class`構文でのメソッド定義はプロトタイプメソッドとなり、インスタンス間で共有されます。

一方、クラスのインスタンスに対して直接メソッドを定義することも可能です。
これは、コンストラクタ関数内でインスタンスに対してメソッドを定義するだけです。

次の例では`Counter`クラスのコンストラクタ関数で、インスタンスに`increment`メソッドを定義しています。
コンストラクタ関数内でインスタンス(`this`)に対してメソッドを定義しています。
コンストラクタで毎回同じ挙動の関数（オブジェクト）を新しく定義しているため、各インスタンスからのメソッドの参照先も異なります。

{{book.console}}
```js
class Counter {
    constructor() {
        this.count = 0;
        this.increment = () => {
            // `this`は`constructor`メソッドにおける`this`を参照する
            this.count++;
        };
    }
}
const counterA = new Counter();
const counterB = new Counter();
counterA.increment();
// 各インスタンスのもつプロパティ(状態)は異なる
console.log(counterA.count); // => 1;
console.log(counterB.count); // => 0
// 各インスタンスのもつメソッドも異なる
console.log(counterA.increment === counterB.increment); // => false
```

インスタンスからメソッドを参照できるのは同じですが、`Counter`というクラス自体へのメソッド定義ではない点がことなります。
これは、`Counter`クラスのインスタンスであっても同じ動作（`increment`メソッド）をもたない場合があるという違いあります。

次のコードは、同じ`Counter`クラスのインスタンスでも`increment`メソッドを持たない場合がある実装例です。
コンストラクタの初期化処理ならば、インスタンスにメソッドを定義するかをif文で分岐できます。
しかし、このように同じクラスのインスタンスに対してメソッドを定義するかを分岐することは、混乱を生むためするべきではないでしょう。

{{book.console}}
```js
class Counter {
    // `hasDefineIncrement`に`true`を渡したときだけ`increment`メソッドを定義する
    constructor(hasDefineIncrement) {
        this.count = 0;
        if (hasDefineIncrement) {
            this.increment = () => {
                // `this`は`constructor`メソッドにおける`this`を参照する
                this.count++;
            };
        }
    }
}
const counter = new Counter();
// Counterのインスタンスであるが`increment`メソッドをもっていない
counter.increment(); // => TypeError: counter.increment is not a function 
```

また、プロトタイプメソッドとはことなり、インスタンスへのメソッド定義ではArrow Functionでメソッドを定義できるという違いがあります。
Arrow Functionには`this`が静的に決まるという性質があります。
そのため、Arrow Functionで定義した`increment`メソッドはどんな呼び出し方をしても、必ず`this`は`Counter`のインスタンスを参照することが保証できます。（「[Arrow Functionでコールバック関数を扱う][]」を参照）

{{book.console}}
```js
"use strict";
class ArrowClass {
    constructor() {
        this.method = () => {
            // Arrow Functionにおける`this`は静的に決まる
            // そのため`this`は常にインスタンスを参照する
            return this;
        };
    }
}
const instance = new ArrowClass();
const method = instance.method;
method(); // => instance
```

一方、プロトタイプメソッドにおける`this`は呼び出し時のベースオブジェクトを参照します。
そのためプロトタイプメソッドは呼び出し方によって`this`の参照先が異なります。（[`this`を含むメソッドを変数に代入した場合の問題][]を参照）

{{book.console}}
```js
"use strict";
class PrototypeClass {
    method() {
        // `this`はベースオブジェクトを参照する
        return this;
    };
}
const instance = new PrototypeClass();
const method = instance.method;
method(); // => undefined
```

## クラスのアクセッサプロパティの定義 {#class-accessor-property}

<!-- textlint-disable no-js-function-paren -->

クラスに対してメソッドを定義できますが、メソッドは`メソッド名()`のように呼び出す必要があります。
クラスでは、プロパティのように参照するだけで呼び出せるgetterやsetterと呼ばれる**アクセッサプロパティ**を定義できます。
アクセッサプロパティとは、プロパティの参照（getter）、プロパティへの代入（setter）に対応するメソッドのことです。

<!-- textlint-enable no-js-function-paren -->

次のコードでは、プロパティの参照（getter）、プロパティへの代入（setter）に対するアクセッサプロパティ（`get`と`set`)を定義しています。
getter（`get`）には仮引数はありませんが、必ず値を返す必要があります。
setter（`set`）の仮引数にはプロパティへ代入された値が入りますが、値を返す必要はありません。

<!-- doctest:disable -->
```js
class クラス {
    // getter
    get プロパティ名() {
        return 値;
    }
    // setter
    set プロパティ名(仮引数) {
        // setterの処理
    }
}
const インスタンス = new クラス();
インスタンス.プロパティ名; // getterが呼び出される
インスタンス.プロパティ名 = 値; // setterが呼び出される
```

次のコードでは、`NumberValue#value`をアクセッサプロパティとして定義しています。
`number.value`へアクセスした際にそれぞれ定義したgetterとsetterが呼ばれていることが分かります。
このアクセッサプロパティで実際に読み書きされているのは、`NumberValue`インスタンスの`_value`プロパティとなります。

{{book.console}}
```js
class NumberValue {
    constructor(value) {
        this._value = value;
    }
    // `_value`プロパティの値を返すgetter
    get value() {
        console.log("getter");
        return this._value;
    }
    // `_value`プロパティに値を代入するsetter
    set value(newValue) {
        console.log("setter");
        this._value = newValue;
    }
}

const number = new NumberValue(1);
// "getter"とコンソールに表示される
console.log(number.value); // => 1
// "setter"とコンソールに表示される
number.value = 42;
// "getter"とコンソールに表示される
console.log(number.value); // => 42
```

### [コラム] プライベートプロパティ {#private-property}

`NumberValue#value`のアクセッサプロパティで実際に読み書きしているのは、`_value`プロパティです。
このように、外から直接読み書きしてほしくないプロパティを`_`（アンダーバー）で開始するのはただの習慣であるため、構文としての意味はありません。

現時点（ES2018）には外から原理的に見ることができないプライベートプロパティ（hard private）を定義する構文はありません。
プライベートプロパティについてはECMAScriptの提案が行われており導入が検討[^Proposal]されています。
また、現時点でも`WeakSet`などを使うことで擬似的なプライベートプロパティ（soft private）を実現できます。
擬似的なプライベートプロパティ（soft private）については「[Map/Set][]」の章について解説します。

### `Array#length`をアクセッサプロパティで再現する {#array-like-length}

getterやsetterを利用しないと実現が難しいものとして`Array#length`プロパティがあります。
`Array#length`プロパティへ値を代入すると、そのインデックス以降の値は自動的に削除される仕様があります。

次のコードでは、配列の要素数(`length`プロパティ)を小さくすると配列の要素が削除されています。

{{book.console}}
```js
const array = [1, 2, 3, 4, 5];
// 要素数を減らすと、インデックス以降の要素が削除される
array.length = 2;
console.log(array.join(", ")); // => "1, 2"
// 要素数だけを増やしても、配列の中身は空要素が増えるだけ
array.length = 5;
console.log(array.join(", ")); // => "1, 2, , , "
```

この`length`プロパティの挙動を再現する`ArrayLike`クラスを実装してみます。
`Array#length`プロパティは、`length`プロパティへ値を代入した際に次のようなことを行っています。

- 現在要素数より小さな**要素数**が指定された場合、その**要素数**を変更し、配列の末尾の要素を削除する
- 現在要素数より大きな**要素数**が指定された場合、その**要素数**だけを変更し、配列の実際の要素はそのままにする

<!-- Note:

- 仕様的にもIf newLen ≥ oldLenでは`length`だけを変更している
- <https://tc39.github.io/ecma262/#sec-arraysetlength>

-->

つまり、`ArrayLike#length`のsetterで要素の追加や削除を実装することで、配列のような`length`プロパティを実装できます。

{{book.console}}
```js
/**
 * 配列のようなlengthを持つクラス
 */
class ArrayLike {
    constructor(items = []) {
        this._items = items;
    }

    get items() {
        return this._items;
    }

    get length() {
        return this._items.length;
    }

    set length(newLength) {
        const currentItemLength = this.items.length;
        // 現在要素数より小さな`newLength`が指定された場合、指定した要素数となるように末尾を削除する
        if (newLength < currentItemLength) {
            this._items = this.items.slice(0, newLength);
        } else if (newLength > currentItemLength) {
            // 現在要素数より大きな`newLength`が指定された場合、指定した要素数となるように末尾に空要素を追加する
            this._items = this.items.concat(new Array(newLength - currentItemLength));
        }
    }
}

const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
// 要素数を減らすとインデックス以降の要素が削除される
arrayLike.length = 2;
console.log(arrayLike.items.join(", ")); // => "1, 2"
// 要素数を増やすと末尾に空要素が追加される
arrayLike.length = 5;
console.log(arrayLike.items.join(", ")); // => "1, 2, , , "
```

このようにアクセッサプロパティは、プロパティのようありながら実際にアクセスした際には他のプロパティなどと連動する動作を実現できます。

[^糖衣構文]: `class`構文でのみしか実現できない機能はなく、読みやすさや分かりやさのために導入された構文という側面もあるためJavaScriptの`class`構文は糖衣構文と呼ばれることがあります。
[^Proposal]: <https://github.com/tc39/proposal-class-fields>においてHard Privateの仕様についての提案と議論が行われている。


[Arrow Functionでコールバック関数を扱う]: ../functiont-this/README.md#arrow-function-callback
[`this`を含むメソッドを変数に代入した場合の問題]: ../functiont-this/README.md#assign-this-function}
[関数とthis]: ../functiont-this/README.md
[Map/Set]: ../map-and-set/README.md