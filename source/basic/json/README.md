---
author: laco
description: "JavaScriptのオブジェクトリテラルをベースに作られたデータフォーマットであるJSONを紹介します。また、JavaScriptからのJSONの読み書きするビルトインオブジェクトの使い方を紹介します。"
sponsors: []
---

# JSON {#json}

この章では、JavaScriptと密接な関係にあるJSONというデータフォーマットについて見ていきます。

## JSONとは {#what-is-json}

JSONはJavaScript Object Notationの略で、JavaScriptのオブジェクトリテラルをベースに作られたテキスト形式のデータフォーマットです。

他のテキスト形式のデータフォーマットとしては代表的なものにCSV（カンマ区切り）やXML（マークアップ言語）があります。
JSONはJavaScriptのオブジェクト記法をベースにしているためプログラムと親和性が高く、多くのプログラミング言語でサポートされている主流なデータフォーマットです。

具体的なJSONを見てみましょう。次の例は、あるシステムのユーザー情報を表すJSONです。

```json
{
    "id": 1,
    "name": "Alice",
    "isPremium": true,
    "friends": [2]
}
```

JSONの構文は、JavaScriptのオブジェクトの構文に制約を加えたものになっています。
たとえば、オブジェクトのキーや文字列値は常にダブルクォートで括る必要があり、オブジェクトや配列の最後の要素の末尾にカンマを付けてはいけません。

JSONは文字列リテラルの内部を除いてインデントや改行に意味を持ちません。
前述のJSONは次のJSONと等価です。

```json
{"id":1,"name":"Alice","isPremium":true,"friends":[2]}
```

JSONのトップレベルリテラルには、オブジェクトでなく配列を用いることもできます。

```json
[
  { "id": 1, "name": "Alice", "isPremium": true, "friends": [2] },
  { "id": 2, "name": "Bob", "isPremium": false, "friends": [1] },
  { "id": 3, "name": "Charlie", "isPremium": false, "friends": [] },
]
```

JSONの仕様は[ECMA-404][]として標準化されており、ECMA-404をベースに[RFC 8259][]も発行されています。
JSONの詳細な仕様は[json.orgの日本語ドキュメント][]にわかりやすくまとまっているので参考にするとよいでしょう。

## `JSON`オブジェクト {#json-object}

JavaScriptでJSONを扱うには、ビルトインオブジェクトである[JSONオブジェクト][]を利用します。

`JSON`オブジェクトには2つの主要な静的メソッドが用意されています。
ひとつは`JSON.parse`静的メソッドで、JSON文字列をJavaScriptのデータに変換します。
もうひとつは`JSON.stringify`静的メソッドで、JavaScriptのデータをJSON文字列に変換します。

また一般に、データをバイト列や文字列に変換することを「シリアライズ」、シリアライズされた値をデータに戻すことを「デシリアライズ」と呼びます。
ここでは、`JSON.parse`の処理が「デシリアライズ」、`JSON.stringify`の処理が「シリアライズ」に対応します。

### JSON文字列をJavaScriptのデータに変換する {#json-parse}

[JSON.parseメソッド][]は、第一引数に与えられたJSON文字列をデシリアライズし、その結果をJavaScriptのデータとして返します。

`JSON.parse`静的メソッドを使う例を見てみましょう。

<!-- textlint-disable eslint -->
{{book.console}}
```js
const json = '{ "id": 1, "name": "Alice" }';
const data = JSON.parse(json);
console.log(data.id); // => 1
console.log(data.name); // => "Alice"
```
<!-- textlint-enable eslint -->

`JSON.parse`静的メソッドの第一引数にはJSON文字列を渡します。
返り値はJSON文字列のトップレベルリテラルに対応するJavaScriptの値です。
この例では`data`はオブジェクトになりますが、JSON文字列のトップレベルリテラルが配列であれば`data`は配列になります。

`JSON.parse`静的メソッドは、第一引数にJSONとして妥当な文字列が渡されなかった場合に例外が投げられます。
JSON文字列のデシリアライズに失敗する場合でもプログラム全体を止めないためには、`try...catch`構文を用いて例外処理をする必要があります。

<!-- textlint-disable eslint -->
{{book.console}}
```js
// オブジェクトのキーがダブルクォートで括られていないため、JSONとして不正な例
const json = '{ id: 1, name: "Alice" }';
try {
    const data = JSON.parse(json);
    console.log(data.name);
} catch (error) {
    console.error("JSON.parseの実行に失敗しました");
}
// => "JSON.parseの実行に失敗しました"
// ... 後続の処理は引き続き実行される
```
<!-- textlint-enable eslint -->

### JavaScriptのデータをJSON文字列に変換する {#json-format}

[JSON.stringifyメソッド][]は、第一引数に与えられたデータをJSONとしてシリアライズし、その結果の文字列を返します。

`JSON.stringify`静的メソッドを使う例を見てみましょう。

{{book.console}}
```js
const data = { id: 1, name: "Alice" };
console.log(JSON.stringify(data));
// => '{"id":1,"name":"Alice"}'
```

`JSON.stringify`静的メソッドは、`JSON.stringify(value, replacer, space)`の形で第三引数まで指定することができます。
第三引数の`space`引数を指定することで、生成されるJSON文字列にインデントと改行を付けて整形することができます。
`space`引数は数値または文字列が指定できます。
数値の場合はその数だけスペースでインデントされ、文字列の場合はその文字列でインデントされます。

次のコードはスペース2個でインデントされたJSONを得る例です。

{{book.console}}
```js
const data = { id: 1, name: "Alice" };
console.log(JSON.stringify(data, null, 2));
/*
{
  "id": 1,
  "name": "Alice"
}
*/
```

また、次のコードはタブ文字でインデントされたJSONを得る例です。

{{book.console}}
```js
const data = { id: 1, name: "Alice" };
console.log(JSON.stringify(data, null, "\t"));
// このコードを実際に実行するとインデントはスペースではなくタブ文字になります
/*
{
    "id": 1,
    "name": "Alice"
}
*/
```

`space`引数は第三引数であるため、インデントを指定したい場合には第二引数の`replacer`に`null`を指定することが一般的です。
`replacer`の活用方法については後述します。

<!-- TODO: 見出しIDを見直す -->
## JSONで扱える値 {#not-serialization-object}

JSONはJavaScriptに限らず、さまざまなプログラミング言語で生成したり利用することができます。
そのため、一部のプログラミング言語でしか扱えないデータ型の値はJSONで扱うことができません。
JSONで値として許容されるデータ型は、オブジェクト、配列、文字列、数値、真偽値、`null`です。

JavaScriptの関数やシンボル、`undefined`値は削除され、MapやSetあるいは正規表現のインスタンスは空オブジェクト`{}`に変換されます。

{{book.console}}
```js
const data = {
    v1: "Hello, World!",
    v2: 123.45,
    v3: true,
    v4: false,
    v5: null,
    v6: function() {},
    v7: Symbol("foo"),
    v8: undefined,
    v9: new Map([["a", 1], ["b", 2]]),
    v10: new Set(["a", "b", "c"]),
    v11: /\d+/g,
};
console.log(JSON.stringify(data, null, 4));
/*
{
    "v1": "Hello, World!",
    "v2": 123.45,
    "v3": true,
    "v4": false,
    "v5": null,
    "v9": {},
    "v10": {},
    "v11": {}
}
*/
```

関数やシンボル、`undefined`値が配列の要素であった場合は削除されず`null`に変換されます。

{{book.console}}
```js
const data = {
    array: [1, function() {}, 3, Symbol("foo"), 5, undefined],
};
console.log(JSON.stringify(data));
// => '{"array":[1,null,3,null,5,null]}'
```

また、`JSON.stringify`静的メソッドは、JSON文字列に変換しようとしているデータに特定の値が含まれる場合に例外が投げられます。
たとえば、BigInt型の値を含む場合や、オブジェクトが循環参照している場合が該当します。

{{book.console}}
```js
// 12345nはBigInt型の値でありJSONとしてシリアライズできない
const data = { v1: 123, v2: 12345n };
try {
    console.log(JSON.stringify(data));
} catch (error) {
    console.error("JSON.stringifyの実行に失敗しました");
}
// => "JSON.stringifyの実行に失敗しました"
```

{{book.console}}
```js
const data = { v1: 123 };
data.v2 = data; // data.v2がdataを指す循環参照オブジェクト
try {
    console.log(JSON.stringify(data));
} catch (error) {
    console.error("JSON.stringifyの実行に失敗しました");
}
// => "JSON.stringifyの実行に失敗しました"
```

`JSON.stringify`静的メソッドは、例外を投げずに返り値が得られたときでも、その値が妥当なJSONではない場合があります。
`JSON.stringify`静的メソッドの第一引数が関数、シンボル、`undefined`値である場合には、JSON文字列ではなく`undefined`値が返されます。
このため、`JSON.stringify`静的メソッドで生成した値を`JSON.parse`静的メソッドでデシリアライズできないことがあります。

{{book.console}}
```js
const data = undefined;
const json = JSON.stringify(data);
try {
    console.log(JSON.parse(json));
} catch (error) {
    console.error("JSON.parseの実行に失敗しました");
}
// => "JSON.parseの実行に失敗しました"
```

## JSONで扱えない値を扱う方法 {#json-extended-serialization}

`JSON.parse`静的メソッドや`JSON.stringify`静的メソッドを使う際に、値に独自の処理を施してから変換処理を実行する仕組みが用意されています。

### `JSON.stringify`で使われる`toJSON`メソッド {#serialization-by-toJSON}

`JSON.stringify`静的メソッドは、シリアライズしようとする値が`toJSON`メソッドを持っていた場合、その値の代わりに`toJSON`メソッドの返り値を使ってシリアライズを試みます。

次のコードは、JSONシリアライズの際に正規表現インスタンスを空オブジェクトではなく`toString`メソッドの返り値が使われるように`toJSON`メソッドを設定する例です。

{{book.console}}
```js
const data = { regexp: /\d+/g };
console.log(JSON.stringify(data)); // => {"regexp":{}}

RegExp.prototype.toJSON = function() {
    return this.toString();
};
console.log(JSON.stringify(data)); // => {"regexp":"/\\d+/g"}
```

`toJSON`メソッドは特定のオブジェクトやインスタンスをJSONとして使いやすい形式でシリアライズするために使われます。

また、次のコードは`Date`インスタンスをJSONシリアライズする例です。

{{book.console}}
```js
const data = { date: new Date("2000-01-01T10:20:30Z") };
console.log(JSON.stringify(data)); // => {"date":"2000-01-01T10:20:30.000Z"}
```

このコードでは明示的に`toJSON`メソッドを設定していませんが、`Date`インスタンスをJSONシリアライズすると`toISOString`メソッドの返り値に変換されます。
これは`Date.prototype.toJSON`メソッドが標準で定義されているためです。

このシリアライズ結果を変更したければ、`Date.prototype.toJSON`メソッドを書き換えるか`Date`インスタンスに`toJSON`メソッドを定義することで挙動を変更できます。
ただし、標準で定義されているプロトタイプメソッドを書き換えるのは影響範囲が広いため、行う場合は慎重に行ってください。

### `JSON.parse`の`reviver`引数 {#json-parse-reviver}

`JSON.parse`静的メソッドは、`JSON.parse(text, reviver)`の形で第二引数まで指定することができます。
`reviver`には関数を渡すことができます。
関数を渡した場合、JSONをデシリアライズする際に独自の処理を施してからJavaScriptのデータに変換することができます。

典型的な例としては、64ビット整数値をJSONで扱うケースが挙げられます。
JavaScriptでは整数値と実数値が同じNumber型で表現されるため、絶対値が`2^53-1`（`9007199254740991`）よりも大きな整数値を正確に扱うことができません。
しかし他のプログラミング言語では64ビット整数値（符号なし64ビット整数であれば最大値は`2^64-1`）が一般的に使われるため、桁数の大きな64ビット整数値を正確に扱うための工夫が必要です。

JavaScriptでも64ビット整数値を正確に扱えるよう、JSONに数値リテラルではなく文字列リテラルとしてシリアライズすることがあります。
このとき、JavaScriptでJSONをデシリアライズする際に文字列ではなく整数演算が可能なデータ型として扱いたい場合があります。
JSON上は整数値を文字列リテラルにしておき、JavaScript上では巨大な整数値が表現できるBigInt型の値として扱うために`reviver`引数を利用することができます。

<!-- textlint-disable eslint -->
{{book.console}}
```js
// value = 112233445566778899 (2^56 <= value < 2^57)
const json = '{ "value": 112233445566778899, "value_as_str": "112233445566778899" }';
console.log(JSON.parse(json));
// Number型では精度が足りず下3桁の値が正確に扱えていない
// => { value: 112233445566778900, value_as_str: "112233445566778899" }

const reviver = (key, value) => {
    if (key === "value_as_str") {
        return BigInt(value);
    }
    return value;
};
console.log(JSON.parse(json, reviver));
// => { value: 112233445566778900, value_as_str: 112233445566778899n }
```
<!-- textlint-enable eslint -->

### `JSON.stringify`の`replacer`引数 {#json-stringify-replacer}

`JSON.stringify`静的メソッドは、`JSON.stringify(value, replacer, space)`の形で第三引数まで指定することができます。
`replacer`には関数を渡すことができます。
関数を渡した場合、JSONをシリアライズする際に独自の処理を施してからJSONに変換することができます。

`JSON.parse`の`reviver`引数での操作と逆のことをしたい場合には`replacer`引数を利用することができます。
つまり、一例としてBigInt型の値を文字列としてシリアライズすることができます。

{{book.console}}
```js
const data = { value: 112233445566778899n };

const replacer = (key, value) => {
    if (typeof value === "bigint") {
        return String(value);
    }
    return value;
};
console.log(JSON.stringify(data, replacer));
// => {"value":"112233445566778899"}
```

`replacer`関数の`value`引数は、シリアライズしようとする値が`toJSON`メソッドを持っていた場合には`toJSON`メソッドの返り値が渡ってきます。

### [ES2026] `JSON.parse`における`reviver`関数の`context`引数 {#json-parse-reviver-context}

桁数の大きな整数値を正確に扱うために整数値をJSON上で文字列リテラルとして扱うには、JSONを生成する側との調整が必要です。
また、すでにJSON上に数値リテラルとして桁数の大きな整数値が出力されていた場合、その整数値をJavaScriptで正確に受け取る方法がないことは問題でした。

この問題を解決するため、`JSON.parse`の`reviver`関数の引数が拡張され、`reviver`関数の第三引数に`context`引数が追加されました。
`context`引数はJSONの値をデシリアライズする際に、JSONの値のデータ型によらずその値を文字列として取得できる仕組みです。
その文字列値は`context.source`プロパティで参照できます。
ただし、`context.source`プロパティは値がオブジェクトまたは配列の場合にはセットされません。

<!-- textlint-disable eslint -->
{{book.console}}
```js
// value = 112233445566778899 (2^56 <= value < 2^57)
const json = '{ "value": 112233445566778899 }';
console.log(JSON.parse(json));
// Number型では精度が足りず下3桁の値が正確に扱えていない
// => { value: 112233445566778900 }

const reviver = (key, value, context) => {
    if (typeof value === "number") {
        const INTEGER_TOKEN = /^-?(0|[1-9]\d*)$/;
        if (INTEGER_TOKEN.test(context.source) && !Number.isSafeInteger(value)) {
            return BigInt(context.source);
        }
    }
    return value;
};
console.log(JSON.parse(json, reviver));
// => { value: 112233445566778899n }
```
<!-- textlint-enable eslint -->

### [ES2026] `JSON.stringify`で使う`JSON.rawJSON`静的メソッド {#json-rawjson}

JavaScript上でJSONを生成する際に、桁数の大きな整数値を文字列リテラルではなく数値リテラルとしてシリアライズする目的にも利用できる仕組みが[JSON.rawJSONメソッド][]です。
`JSON.rawJSON`静的メソッドを用いると、与えた文字列を（文字列リテラルではなく）生成されるJSONの値としてそのまま埋め込むことができます。
ただし、`JSON.rawJSON`静的メソッドの第一引数に指定できる文字列は、JSONで許容されるプリミティブ型の値（文字列、数値、真偽値、`null`）のみです。
それ以外の値を渡した場合には例外が投げられます。

{{book.console}}
```js
const data = { value: 112233445566778899n };

const replacer = (key, value) => {
    if (typeof value === "bigint") {
        return JSON.rawJSON(String(value));
    }
    return value;
};
console.log(JSON.stringify(data, replacer));
// => {"value":112233445566778899}
```

## まとめ {#conclusion}

この章では、JSONについて学びました。

- JSONはJavaScriptのオブジェクトリテラルをベースに作られたテキスト形式のデータフォーマット
- `JSON`オブジェクトを使ったシリアライズとデシリアライズ
- JSONで扱えない値もある
- `JSON.stringify`はシリアライズ対象の`toJSON`メソッドを利用する
- JSONで扱えない値を扱いたい場合は`reviver`関数と`replacer`関数を利用する

[ECMA-404]: https://ecma-international.org/publications-and-standards/standards/ecma-404/
[RFC 8259]: https://www.rfc-editor.org/rfc/rfc8259
[json.orgの日本語ドキュメント]: https://www.json.org/json-ja.html
[JSONオブジェクト]: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON
[JSON.parseメソッド]: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
[JSON.stringifyメソッド]: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
[JSON.rawJSONメソッド]: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
