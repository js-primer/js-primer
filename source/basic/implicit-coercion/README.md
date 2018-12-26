---
author: azu
---

# 暗黙的な型変換 {#implicit-coercion}

この章では、明示的な型変換と暗黙的な型変換について学んでいきます。

[演算子][]の章にて、等価演算子において**暗黙的な型変換**による意図しない挙動について紹介しました。

> 等価演算子（`==`）はオペランド同士が異なる型の値であった場合に、
> 同じ型となるように**暗黙的な型変換**してから比較します。

暗黙的な型変換の例として、数値と真偽値の加算を見てみましょう。
多くの言語では、数値と真偽値の加算は型エラーとなり、コンパイルエラーまたは実行時エラーとなります。
しかし、JavaScriptでは暗黙的な型変換が行われ、エラーなく処理されます。

この例では、真偽値の`true`が数値の`1`へと暗黙的に変換されてから加算処理が行われます。

{{book.console}}
```js
// エラーとなって欲しい
// しかし、暗黙的な型変換が行われ、数値の加算として計算される
1 + true; // => 2
// 次のように暗黙的に変換されてから計算される
1 + 1; // => 2
```

JavaScriptでは、エラーが発生するのではなく、暗黙的な型変換が行われてしまうケースが多くあります。
暗黙的に変換が行われた場合、プログラムは例外を投げずに処理が進むため、バグの発見が難しくなります。

そのため、暗黙的な型変換は避けるべき挙動です。

この章では、次のことについてを学んでいきます。

- 暗黙的な型変換とはどのようなものなのか
- 暗黙的ではない明示的な型変換の方法
- 明示的な変換だけでは解決しないということ

## 暗黙的な型変換とは {#what-is-implicit-coercion}

暗黙的な型変換とは次のことをいいます。

- ある処理において、その処理過程において行われる明示的ではない型変換のこと

暗黙的な型変換は、演算子による演算や関数の処理過程で行われます。
ここでは、演算子における暗黙的な型変換についてを中心に見ていきます。

### 等価演算子の暗黙的な型変換 {#implicit-coercion-of-equal-operator}

もっとも有名な暗黙的な型変換は、先ほども出てきた等価演算子（`==`）です。
等価演算子は、オペランド同士が同じ型となるように暗黙的な型変換をしてから、比較します。

次のように等価演算子（`==`）による比較は、驚くような結果を作り出します。

{{book.console}}
```js
// 異なる型である場合に暗黙的な型変換が行われる
1 == "1"; // => true
0 == false; // => true
10 == ["10"]; // => true
```

この他にも等価演算子による予想できない結果は、比較する値と型の組み合わせの数だけあります。
そのため、等価演算子の比較結果がどうなるかを覚えるのは現実的でありません。

[![JavaScript-Equality-Table](./img/JavaScript-Equality-Table.png)](https://dorey.github.io/JavaScript-Equality-Table/)

しかし、等価演算子については暗黙的な型変換を避ける簡単な方法があります。

それは、常に厳密等価演算子（`===`）を使うことです。
値を比較する際は、常に厳密等価演算子を使うことで、暗黙型変換をせずに値を比較できます。

{{book.console}}
```js
1 === "1"; // => false
0 === false; // => false
```

### さまざまな暗黙的な型変換 {#various-implicit-coercion}

他の演算子についても、具体的な例を見てみましょう。

次のコードでは、数値の`1`と文字列の`"2"`をプラス演算子で処理しています。
プラス演算子（`+`）は、数値の加算と文字列の結合を両方実行できるように多重定義されています。
このケースでは、JavaScriptは文字列の結合を優先する仕様となっています。
そのため、数値の`1`を文字列の`"1"`へ暗黙的に変換してから、文字列結合します。

{{book.console}}
```js
1 + "2"; // => "12"
// 演算過程で次のように暗黙的な変換が行われる
"1" + "2"; // => "12"
```

もうひとつ、数値と文字列での暗黙的な型変換を見てみましょう。
次のコードでは、数値の`1`から文字列の`"2"`を減算しています。

JavaScriptには、文字列に対するマイナス演算子（`-`）の定義はありません。
そのため、マイナス演算子の対象となりえる数値が優先されます。
これにより、文字列の`"2"`を数値の`2`へ暗黙的に変換してから、減算します。

{{book.console}}
```js
1 - "2"; // => -1
// 演算過程で次のように暗黙的な変換が行われる
1 - 2; // => -1
```

2つの値までは、まだ結果の型を予想できます。
しかし、3つ以上の値を扱う場合に結果を予測できなくなります。

次のように3つ以上の値を演算する場合に、値の型が混ざっていると、
演算する順番によっても結果が異なります。

{{book.console}}
```js
const x = 1, y = "2", z = 3;
console.log(x + y + z); // => "123"
console.log(y + x + z); // => "213"
```

このように、処理の過程でオペランドの型によって、
自動的に変換されることを**暗黙的な型変換**と呼んでいます。

暗黙的な型変換では、結果の値の型はオペランドの型に依存しています。
それを避けるには、暗黙的ではない変換 ー つまり明示的な型変換をする必要があります。

## 明示的な型変換 {#explicit-coercion}

プリミティブ型への明示的な型変換する方法を見ていきます。

### Any -> 真偽値 {#any-to-boolean}

JavaScriptでは`Boolean`コンストラクタ関数を使うことで、任意の値を`true`または`false`の真偽値に変換できます。

```js
Boolean("string"); // => true
Boolean(1); // => true
Boolean({}); // => true
Boolean(0); // => false
Boolean(""); // => false
Boolean(null); // => false
```

JavaScriptでは、どの値が`true`でどの値が`false`になるかは、次のルールによって決まります。

- **falsy**な値は`false`になる
- **falsy**でない値は`true`になる

**falsy**な値とは次の6種類の値のことを言います。

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- `""`（空文字）

この変換ルールはif文の条件式の評価と同様です。
次のようにif文に対して、真偽値以外の値を渡した時に、真偽値へと暗黙的に変換されから判定されます。

{{book.console}}
```js
// x は undefined
let x; 
if (!x) {
    console.log("falsyな値なら表示", x); 
}
```

真偽値については、暗黙的な型変換のルールが少ないため、明示的に変換せずに扱われることも多いです。
しかし、より正確な判定をして真偽値を得るには、次のように厳密等価演算子（`===`）を使い比較することです。

```js
// x は undefined
let x;
if (x === undefined) {
    console.log("xがundefinedなら表示", x); 
}
```


### 数値 -> 文字列 {#number-to-string}

数値から文字列へ明示的に変換する場合は、`String`コンストラクタ関数を使います。

{{book.console}}
```js
String(1); // => "1"
```

`String`コンストラクタは、数値以外にも色々な値を文字列へと変換できます。

{{book.console}}
```js
String("str"); // => "str"
String(true); // => "true"
String(null); // => "null"
String(undefined); // => "undefined"
String(Symbol("シンボル")); // => "Symbol(シンボル)"
// プリミティブ型ではない値の場合
String([1, 2, 3]); // => "1,2,3"
String({ key: "value" }); // => "[object Object]"
String(function() {}); // 実装依存の結果
```

<!-- TODO(es2018): Function.prototype.toStringはES2018で仕様化される -->

上記の結果からも分かるように`String`コンストラクタ関数での明示的な変換は、万能な方法ではありません。
真偽値、数値、文字列、undefined、null、シンボルのプリミティブ型の値に対して変換は見た目どおりの文字列を得ることができます。

一方、プリミティブ型以外の値に対しては直感的な値を返しません。
これは、オブジェクトに対しては別の方法があるためです。
配列には`Array#join`メソッド、オブジェクトには`JSON.stringify`メソッドなどより柔軟な文字列化をする方法があります。
そのため、`String`コンストラクタ関数での変換は、あくまでプリミティブ型に対してのみに留めるべきです。

### シンボル -> 文字列 {#symbol-to-string}

プラス演算子を文字列に利用した場合、文字列の結合を優先します。
「片方が文字列なら、もう片方のオペランドとは関係なく、結果は文字列となるのでは？」と考えるかもしれません。

<!-- doctest:disable -->
```js
"文字列" + x; // 文字列となる？
```

しかし、ES2015で追加されたプリミティブ型であるシンボルは暗黙的に型変換できません。
文字列結合演算子をシンボルに対して利用すると例外を投げるようになっています。
そのため、片方が文字列であるからと言ってプラス演算子の結果は必ず文字列になるとは限らないことが分かります。

{{book.console}}
```js
"文字列と" + Symbol("シンボルの説明"); // => TypeError
```

この問題も`String`コンストラクタ関数を使うことで、シンボルを明示的に文字列化することで解決できます。

{{book.console}}
```js
"文字列と" + String(Symbol("シンボルの説明")); // => "文字列とSymbol(シンボルの説明)"
```

### 文字列 -> 数値 {#string-to-number}

文字列から数値に変換する典型的なケースとしてはユーザー入力から数字を受け取ることがあげられます。
ユーザー入力は文字列でしか受け取ることができないため、それを数値に変換してから利用する必要があります。

文字列から数値へ明示的に変換するには`Number`コンストラクタ関数が利用できます。

{{book.console}}
<!-- window.promptはないため -->
<!-- doctest: ReferenceError -->
```js
// ユーザー入力を文字列として受け取る
const input = window.prompt("数字を入力してください", "42");
// 文字列を数値に変換する
const number = Number(input);
console.log(typeof number); // => "number";
console.log(number); // 入力された文字列を数値に変換したもの
```

また、文字列から数字を取り出し変換する関数として`Number.parseInt`、`Number.parseFloat`も利用できます。
`Number.parseInt`は文字列から整数を取り出し、`Number.parseFloat`は文字列から浮動小数点数を取り出すことができます。
`Number.parseInt(文字列, 基数)`の第二引数には基数指定します。
たとえば、文字列をパースして10進数として数値を取り出したい場合は、第二引数に基数として`10`を指定します。

{{book.console}}
```js
// "1"をパースして10進数として取り出す
Number.parseInt("1", 10); // => 1;
// 余計な文字はパース時に無視して取り出す
Number.parseInt("42px", 10); // => 42
Number.parseInt("10.5", 10); // => 10
Number.parseFloat("1"); // => 1
Number.parseFloat("42.5px"); // => 42.5
Number.parseFloat("10.5"); // => 10.5
```

しかし、ユーザーが数字を入力するとは限りません。
`Number`コンストラクタ関数、`Number.parseInt`、`Number.parseFloat`は、
数字以外の文字列を渡すと`NaN`（Not a Number）を返します。

{{book.console}}
```js
// 数字ではないため、数値へは変換できない
Number("文字列"); // => NaN
// 未定義の値はNaNになる
Number(undefined); // => NaN
```

そのため、任意の値から数値へ変換した場合は、`NaN`になってしまった場合の処理を書く必要があります。
変換した結果が`NaN`であるかは`Number.isNaN(x)`メソッドで判定できます。

```js
const userInput = "任意の文字列";
const number = Number.parseInt(userInput, 10);
if (!Number.isNaN(number)) {
    console.log("NaNではない値にパースできた", number);
}
```

### [コラム] NaNはNot a NumberだけどNumber型 {#nan-is-number-type}

`NaN`はNot a Numberの略称で、特殊な性質をもつNumber型のデータです。

この`NaN`というデータの性質については[IEEE 754][]で規定されており、
JavaScriptだけの性質ではありません。

`NaN`という値をつくる方法は簡単で、Number型と互換性のない性質のデータをNumber型へ変換した結果は`NaN`となります。
たとえば、オブジェクトは数値とは互換性の無いデータです。
そのため、オブジェクトを明示的に変換したとしても結果は`NaN`になります。

{{book.console}}
```js
Number({}); // => NaN
```

また、`NaN`は何と演算しても結果は`NaN`になる特殊な値です。
次のように、計算の途中で値が`NaN`になると、最終的な結果も`NaN`となります。

{{book.console}}
```js
const x = 10;
const y = x + NaN;
const z = y + 20;
console.log(x); // => 10
console.log(y); // => NaN
console.log(z); // => NaN
```

`NaN`はNumber型の一種であるという名前と矛盾したデータに見えます。

{{book.console}}
```js
// NaNはnumber型
typeof NaN; // => "number"
```

NaNしか持っていない特殊な性質として、自分自身と一致しないという特徴があります。
この特徴を利用することで、ある値が`NaN`であるかを判定することもできます。

{{book.console}}
```js
function isNaN(x) {
    // NaNは自分自身と一致しない
    return x !== x;
}
isNaN(1); // => false
isNaN("str"); // => false
isNaN({}); // => false
isNaN([]); // => false
isNaN(NaN); // => true
```

同様の処理する方法として`Number.isNaN(x)`メソッドがあります。
実際に値が`NaN`かを判定する際には、`Number.isNaN(x)`メソッドを利用するとよいでしょう。

{{book.console}}
```js
Number.isNaN(NaN); // => true
```

`NaN`は暗黙的な型変換の中でももっとも避けたい値となります。
理由として、先ほど紹介したように`NaN`は何と演算しても結果が`NaN`となってしまうためです。
これにより、計算していた値がどこで`NaN`となったのかが分かりにくく、デバッグが難しくなります。

たとえば、次の`sum`関数は可変長引数（任意の個数の引数）を受け取り、その合計値を返します。
しかし、`sum(x, y, z)`と呼び出した時の結果が`NaN`になってしまいました。
これは、引数の中に`undefined`（未定義の値）が含まれているためです。

```js
// 任意の個数の数値を受け取り、その合計値を返す関数
function sum(...values) {
    return values.reduce((total, value) => {
        return total + value;
    }, 0);
}
const x = 1, z = 10;
let y; // `y`はundefined
sum(x, y, z); // => NaN
```

そのため、`sum(x, y, z);`は次のように呼ばれていたのと同じ結果になります。
`undefined`に数値を加算すると結果は`NaN`となります。

<!-- doctest: ReferenceError -->
```js
sum(1, undefined, 10); // => NaN
// 計算中にNaNとなるため、最終結果もNaNになる
1 + undefined; // => NaN
NaN + 10; // => NaN
```

これは、`sum`関数において引数を明示的にNumber型へ変換したとしても回避することはできません。
つまり、次のように明示的な型変換しても解決できない問題あることが分かります。

{{book.console}}
```js
function sum(...values) {
    return values.reduce((total, value) => {
        // `value`をNumberで明示的に数値へ変換してから加算する
        return total + Number(value);
    }, 0);
}
const x = 1, z = 10;
let y; // `y`はundefined
sum(x, y, z); // => NaN
```

この意図しない`NaN`への変換を避ける方法として、大きく分けて２つの方法があります。

- `sum`関数側（呼ばれる側）で、Number型の値以外を受け付けなくする
- `sum`関数を呼び出す側で、Number型の値のみを渡すようにする

つまり、呼び出す側または呼び出される側で対処するということですが、
どちらも行うことがより安全なコードにつながります。

そのためには、`sum`関数が数値のみを受け付けるということを明示する必要があります。

明示する方法として`sum`関数のドキュメント（コメント）として記述したり、
引数に数値以外の値がある場合は例外を投げるという処理を追加するといった形です。

JavaScriptではコメントで引数の型を記述する書式として[JSDoc][]が有名です。
また、実行時に値がNumber型であるかをチェックし`throw`文で例外をなげることで、`sum`関数の利用者に使い方を明示できます。
（`throw`文については「[例外処理][]」の章で解説します）

この２つを利用して`sum`関数の前提条件を詳細に実装したものは次のようになります。

```js
/**
 * 数値を合計した値を返します。
 * 一つ以上の数値と共に呼び出す必要があります。
 * @param {...number} values
 * @returns {number}
 **/
function sum(...values) {
    return values.reduce((total, value) => {
        // 値がNumber型ではない場合に、例外を投げる
        if (typeof value !== "number") {
            throw new Error(`${value}はNumber型ではありません`);
        }
        return total + Number(value);
    }, 0);
}
const x = 1, z = 10;
let y; // `y`はundefined
console.log(x, y, z);
// Number型の値ではない`y`を渡しているため例外が発生する
sum(x, y, z); // => Error
```

このように、`sum`関数はどのように使うべきかを明示することで、
エラーとなった時に呼ばれる側と呼び出し側でどちらに問題があるのかが明確になります。
この場合は、`sum`関数へ`undefined`な値を渡している呼び出し側に問題があります。

JavaScriptは、型エラーに対して暗黙的な型変換してしまうなど驚くほど許容しています。
そのため、大きなJavaScriptアプリケーションを書く場合は、このような検出しにくいバグを見つけられるように書くことは重要です。

## 明示的な変換でも解決しないこと {#unsolved-problem}

先ほどの例からも分かるように、あらゆるケースが明示的な変換で解決できるわけではありません。
Number型と互換性がない値を数値にしても、`NaN`となってしまいます。
一度、`NaN`になってしまうと`Number.isNaN(x)`で判定して処理を終えるしかありません。

JavaScriptの型変換は基本的に情報が減る方向へしか変換できません。
そのため、明示的な変換をする前に、まず変換がそもそも必要なのかを考える必要があります。

### 空文字かどうかを判定する {#judge-empty-string}

たとえば、文字列が空文字なのかを判定したい場合を考えみましょう。
`""`（空文字）はfalsyな値であるため、明示的に`Boolean`コンストラクタ関数で真偽値へ変換できます。
しかし、falsyな値は空文字以外にもあるため、明示的に変換したからといって空文字だけを判定できるわけではありません。

次のコードでは、明示的な型変換をしていますが、`0`も**空文字**となってしまい意図しない挙動になっています。

{{book.console}}
```js
// 空文字かどうかを判定
function isEmptyString(string) {
    return !Boolean(string);
}
isEmptyString("");// => true
// falsyなら値なら、trueを返してしまっている
isEmptyString(0);// => true
// undefinedを渡した場合もtrueとなる
isEmptyString();// => true
```

殆どのケースにおいて、真偽値を得るには、型変換ではなく別の方法が存在します。

この場合、空文字とは「String型で文字長が0の値」であると定義することで、`isEmptyString`関数はもっと正確に書くことができます。
次のように実装することで、値が空文字であるかを正しく判定できるようになりました。

{{book.console}}
```js
// 空文字かどうかを判定
function isEmptyString(string) {
    // String型でlengthが0の値が空文字
    return typeof string === "string" && string.length === 0;
}
isEmptyString("");// => true
// falsyな値でも正しく判定できる
isEmptyString(0);// => false
isEmptyString();// => false
```

`Boolean`を使った型変換は、楽をするための型変換であり、正確に真偽値を得るための方法ではありません。
そのため、型変換をする前にまず別の方法で解決できないかを考えることも大切です。

[演算子]: ../operator/README.md	"演算子について解説した章"
[JSDoc]: http://usejsdoc.org/  "Use JSDoc: Index"
[IEEE 754]: https://ja.wikipedia.org/wiki/IEEE_754
[例外処理]: ../error-try-catch/README.md
