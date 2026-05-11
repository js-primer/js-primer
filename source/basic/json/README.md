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
    "email": "alice@example.com",
    "name": "Alice",
    "isPremium": true,
    "following": [2],
    "followers": [2, 3]
}
```

JSONの構文は、JavaScriptのオブジェクトの構文に制約を加えたものになっています。
たとえば、オブジェクトのキーや文字列値は常にダブルクォートで括る必要があり、オブジェクトや配列の最後の要素の末尾にカンマを付けてはいけません。

JSONは文字列リテラルの内部を除いてインデントや改行に意味を持ちません。
前述のJSONは次のJSONと等価です。

```json
{"id":1,"email":"alice@example.com","name":"Alice","isPremium":true,"following":[2],"followers":[2,3]}
```

JSONのトップレベルには、オブジェクトリテラルでなく配列リテラルを用いることもできます。

```json
[
  { "id": 1, "email": "alice@example.com", "name": "Alice", "isPremium": true, "following": [2], "followers": [2,3] },
  { "id": 2, "email": "bob@example.com", "name": "Bob", "isPremium": false, "following": [1], "followers": [1] },
  { "id": 3, "email": "charlie@example.com", "name": "Charlie", "isPremium": false, "following": [1], "followers": [] }
]
```

JSONの仕様は[ECMA-404][]として標準化されており、ECMA-404をベースに[RFC 8259][]も発行されています。
JSONの詳細な仕様は[json.orgの日本語ドキュメント][]にわかりやすくまとまっているので参考にするとよいでしょう。

## `JSON`オブジェクト {#json-object}

JavaScriptでJSONを扱うには、ビルトインオブジェクトである[JSONオブジェクト][]を利用します。

`JSON`オブジェクトには2つの主要な静的メソッドが用意されています。
ひとつはJSON文字列をJavaScriptのデータに変換する`parse`静的メソッドです。
もうひとつはJavaScriptのデータをJSON文字列に変換する`stringify`静的メソッドです。

なお一般に、データをバイト列や文字列に変換することを「シリアライズ」、シリアライズされた値をデータに戻すことを「デシリアライズ」と呼びます。

### JSON文字列をJavaScriptのデータに変換する {#json-parse}

[JSON.parseメソッド][]は、第一引数に与えられた文字列をJSONとしてパースし、その結果をJavaScriptのデータとして返します。

`JSON.parse`静的メソッドを使う例を見てみましょう。

<!-- textlint-disable eslint -->
{{book.console}}
```js
const json = '{ "id": 1, "email": "alice@example.com", "name": "Alice" }';
const data = JSON.parse(json);
console.log(data.id); // => 1
console.log(data.name); // => "Alice"
```
<!-- textlint-enable eslint -->

`JSON.parse`静的メソッドの第一引数にはJSON文字列を渡します。
返り値はJSONのトップレベルリテラルに対応するJavaScriptの値です。
この例では`data`はオブジェクトになりますが、JSONのトップレベルが配列リテラルであれば`data`は配列になります。

`JSON.parse`静的メソッドは、第一引数にJSONとして妥当な文字列が渡されなかった場合に例外が投げられます。
JSONがパースに失敗する場合でもプログラム全体を止めないためには、`try...catch`構文を用いて例外処理をする必要があります。

<!-- textlint-disable eslint -->
{{book.console}}
```js
// オブジェクトのキーがダブルクォートで括られていないため、JSONとして不正な例
const json = '{ id: 1, email: "alice@example.com", name: "Alice" }';
try {
    const data = JSON.parse(json);
    console.log(data.name);
} catch (error) {
    console.error("JSONのパースに失敗しました");
}
// => "JSONのパースに失敗しました"
// ... 後続の処理は引き続き実行される
```
<!-- textlint-enable eslint -->

### JavaScriptのデータをJSON文字列に変換する {#json-format}

[JSON.stringifyメソッド][]は、第一引数に与えられたデータをJSONとしてシリアライズし、その結果の文字列を返します。

`JSON.stringify`静的メソッドを使う例を見てみましょう。

{{book.console}}
```js
const data = { id: 1, email: "alice@example.com", name: "Alice" };
console.log(JSON.stringify(data));
// => '{"id":1,"email":"alice@example.com","name":"Alice"}'
```

`JSON.stringify`静的メソッドは、`JSON.stringify(value, replacer, space)`の形で第三引数まで指定することができます。
第三引数の`space`引数を指定することで生成されるJSON文字列にインデントと改行を付けて整形することができます。
`space`引数は数値または文字列が指定できます。
数値の場合はその数だけスペースでインデントされ、文字列の場合はその文字列でインデントされます。

次のコードはスペース2個でインデントされたJSONを得る例です。

{{book.console}}
```js
const data = { id: 1, email: "alice@example.com", name: "Alice" };
console.log(JSON.stringify(data, null, 2));
/*
{
  "id": 1,
  "email": "alice@example.com",
  "name": "Alice"
}
*/
```

また、次のコードはタブ文字でインデントされたJSONを得る例です。

{{book.console}}
```js
const data = { id: 1, email: "alice@example.com", name: "Alice" };
console.log(JSON.stringify(data, null, "\t"));
// このコードを実際に実行するとインデントはスペースではなくタブ文字になります
/*
{
    "id": 1,
    "email": "alice@example.com",
    "name": "Alice"
}
*/
```

`space`引数は第三引数であるため、インデントを指定したい場合には第二引数の`replacer`に`null`を指定することが一般的です。
`replacer`の活用方法については後述します。

## JSONにシリアライズできないオブジェクト {#not-serialization-object}

`JSON.stringify`静的メソッドはJSONで表現可能な値だけをシリアライズします。
シリアライズできない一部の値は別の値に変換されたりJSONから取り除かれることに注意してください。

次に、JSON変換後に値がどのように扱われるかを表に示します。

| # | 元の値 | JSON変換後の値 |
| :---: | --- | --- |
| 1 | String（文字列） | その値そのもの |
| 2 | Number（有限の数値） | その値そのもの |
| 3 | Boolean（真偽値） | その値そのもの |
| 4 | null | nullそのもの |
| 5 | undefined（オブジェクトの値） | プロパティごと削除される |
| 6 | undefined（配列の値） | nullに変換される |
| 7 | undefined（引数自体） | undefined |
| 8 | Function（関数） | 上記undefinedと同じ |
| 9 | Symbol（シンボル） | 上記undefinedと同じ |
| 10 | BigInt（長整数） | 例外が発生する |
| 11 | Infinity（無限）やNaN（非数） | nullに変換される |
| 12 | Array（配列） | 配列として扱われる |
| 13 | Object（オブジェクト） | オブジェクトとして扱われる |
| 14 | 循環参照オブジェクト | 例外が発生する |
| 15 | Date | toISOStringメソッドの結果の文字列 |
| 16 | RegExp（正規表現リテラル） | 空オブジェクト {} に変換される |
| 17 | Map, Set | 空オブジェクト {} に変換される |

実際に実行できるサンプルコードは以下です。

{{book.console}}
```js
function test(arg) {
    try {
        console.log(JSON.stringify(arg));
    } catch (e) {
        console.error(e.message);
    }
}

test({ v1: "foo" });
test({ v2: { a: -1, b: 10, c: 123.45, d: 1e+30 } });
test({ v3: { a: true, b: false } });
test({ v4: null });
test({ v5: { a: 1, b: undefined, c: 3 } });
test({ v6: [1, undefined, 3] });
test(undefined);
test({ v8a: { a: 1, b: function() {}, c: () => 0, d: 4 } });
test({ v8b: [1, function() {}, () => 0, 4] });
test(function() {});
test({ v9a: { a: 1, b: Symbol("foo"), c: Symbol.for("bar"), d: 4 } });
test({ v9b: [1, Symbol("foo"), Symbol.for("bar"), 4] });
test(Symbol("foo"));
test({ v10: 112233445566778899n });
test({ v11: { a: 1 / 0, b: -1 / 0, c: 0 / 0 } });
test({ v12: [1, 2, 3, 4] });
test({ v13: { a: 1, b: 2, [Symbol.for("foo")]: 3, d: 4 } });
const obj = { a: 1 }; obj.b = obj; test({ v14: obj });
test({ v15: new Date("2000-01-01T10:20:30Z") });
test({ v16: { a: /\d+/, b: new RegExp("/.+/") } });
test({ v17a: { map: new Map([["foo", 1], ["bar", 2]]) } });
test({ v17b: { set: new Set(["foo", "bar"]) } });

/*
{"v1":"foo"}
{"v2":{"a":-1,"b":10,"c":123.45,"d":1e+30}}
{"v3":{"a":true,"b":false}}
{"v4":null}
{"v5":{"a":1,"c":3}}
{"v6":[1,null,3]}
undefined
{"v8a":{"a":1,"d":4}}
{"v8b":[1,null,null,4]}
undefined
{"v9a":{"a":1,"d":4}}
{"v9b":[1,null,null,4]}
undefined
// v10: 例外エラー（BigInt値はJSONにシリアライズできません）
{"v11":{"a":null,"b":null,"c":null}}
{"v12":[1,2,3,4]}
{"v13":{"a":1,"b":2,"d":4}}
// v14: 例外エラー（オブジェクトが循環参照しています）
{"v15":"2000-01-01T10:20:30.000Z"}
{"v16":{"a":{},"b":{}}}
{"v17a":{"map":{}}}
{"v17b":{"set":{}}}
*/
```

オブジェクトがシリアライズされる際は、そのオブジェクト自身の列挙可能な文字列キーのプロパティだけが再帰的にシリアライズされます。
キーが文字列ではなくシンボルであったり、列挙可能でないプロパティは無視されます。
`RegExp`や`Map`、`Set`などのインスタンスは列挙可能なプロパティを持たないため、結果的に空のオブジェクトに変換されます。

また、`JSON.stringify`静的メソッドは実行時に例外を投げてシリアライズに失敗することもあります。
`JSON.parse`静的メソッドだけでなく、`JSON.stringify`静的メソッドも必要に応じて例外処理を行って安全に使いましょう。

## `toJSON`メソッドを使ったシリアライズ {#serialization-by-toJSON}

オブジェクトが`toJSON`メソッドを持っている場合、`JSON.stringify`静的メソッドはオブジェクトそのものの代わりに`toJSON`メソッドの返り値を使ってシリアライズを試みます。

{{book.console}}
```js
const obj = {
    foo: "foo",
    toJSON() {
        return "bar";
    }
};
console.log(JSON.stringify(obj)); // => '"bar"'
console.log(JSON.stringify({ x: obj })); // => '{"x":"bar"}'
```

`toJSON`メソッドは特定のクラスのインスタンスなどのオブジェクトをJSONとして使いやすい形式でシリアライズするために使われます。

{{book.console}}
```js
const date = new Date("2000-01-01T10:20:30Z");
console.log(JSON.stringify(date)); // => '"2000-01-01T10:20:30.000Z"'
```

`Date`クラスのインスタンスをシリアライズするとき`toISOString`メソッドの結果に変換されるのは、`Date.prototype.toJSON`メソッドが定義されているためです。

## JSONで扱えない値を扱う方法 {#json-extended-serialization}

`JSON.parse`静的メソッドや`JSON.stringify`静的メソッドを使うにあたって、値の変換前に特殊な処理を施したい場合は、それを行うための仕組みが用意されています。

### `JSON.parse`の`reviver`引数 {#json-parse-reviver}

`JSON.parse`静的メソッドにはオプショナルな引数が1つあります。
第二引数はreviver引数とも呼ばれ、関数を渡せます。
関数を渡した場合は引数にプロパティのキーと値が渡され、その返り値によってJSONの値をデシリアライズする際の挙動をコントロールできます。

<!-- textlint-disable eslint -->
{{book.console}}
```js
const json = '{ "valueof(2**64)_int_as_str": "18446744073709551616" }';

console.log(JSON.parse(json));
// => { "valueof(2**64)_int_as_str": "18446744073709551616" };

const reviver = (key, value) => {
    if (key.endsWith("_int_as_str")) {
        return Number.isSafeInteger(Number(value)) ? Number(value) : BigInt(value);
    }
    return value;
};
console.log(JSON.parse(json, reviver));
// => { "valueof(2**64)_int_as_str": 18446744073709551616n }
```
<!-- textlint-enable eslint -->

上記のコードは、JSONの値が整数を表す文字列の値の場合に`Number`または`BigInt`のリテラルに変換する例です。

### `JSON.stringify`の`replacer`引数 {#json-stringify-replacer}

`JSON.stringify`静的メソッドの第二引数はreplacer引数とも呼ばれ、関数を渡せます。
関数を渡した場合は引数にプロパティのキーと値が渡され、その返り値によって値をJSONにシリアライズする際の挙動をコントロールできます。

{{book.console}}
```js
const data = [-(2n ** 64n), -(2 ** 32), 0, 2 ** 32, 2n ** 64n];

const replacer = (key, value) => {
    if (typeof value === "bigint") {
        return String(value);
    }
    return value;
};
console.log(JSON.stringify(data, replacer));
// => '["-18446744073709551616",-4294967296,0,4294967296,"18446744073709551616"]'
```

上記のコードは、変換前の値としてBigInt型の値があれば文字列に変換してJSONを構築する例です。

### [ES2026] `JSON.parse`における`reviver`関数の`context`引数 {#json-parse-reviver-context}

実際のJSONには、JavaScriptで安全に扱える範囲を超えた整数値が（文字列リテラルではなく）数値リテラルとして与えられる場合があります。
従来はこのような数値を精度を落とさずにJavaScriptで受け取る手段がありませんでしたが、それを可能にする仕組みが`context`引数です。

<!-- textlint-disable eslint -->
{{book.console}}
```js
const json = '{ "valueof(2**64)": 18446744073709551616 }';
console.log(JSON.parse(json)); // => { "valueof(2**64)": 18446744073709552000 }
// number（IEEE 754の倍精度浮動小数点数）では精度不足のため、絶対値が2**53以上の整数を正確に扱えない

const reviver = (key, value, context) => {
    if (typeof value === "number") {
        const INTEGER_TOKEN = /^-?(0|[1-9]\d*)$/;
        if (INTEGER_TOKEN.test(context.source) && !Number.isSafeInteger(value)) {
            return BigInt(context.source);
        }
    }
    return value;
};
console.log(JSON.parse(json, reviver)); // => { "valueof(2**64)": 18446744073709551616n }
```
<!-- textlint-enable eslint -->

`reviver`関数の引数では第二引数として`value`がありますが、第三引数として`context`が渡ってくるようになりました。
`context.source`を参照することで、JSONに書かれている元の値を文字列として扱えるようになります。
なお、JSONの値がオブジェクトまたは配列の場合は`context.source`がセットされません。

### [ES2026] `JSON.stringify`で使う`JSON.rawJSON`静的メソッド {#json-rawjson}

`JSON.parse`の例とは逆に、JavaScriptで安全に扱える範囲を超えた整数値を数値リテラルとしてシリアライズする目的にも使える仕組みが[JSON.rawJSONメソッド][]です。

{{book.console}}
```js
const data = [-(2n ** 64n), -(2 ** 32), 0, 2 ** 32, 2n ** 64n];

const replacer = (key, value) => {
    if (typeof value === "bigint") {
        return JSON.rawJSON(String(value));
    }
    return value;
};
console.log(JSON.stringify(data, replacer));
// => '[-18446744073709551616,-4294967296,0,4294967296,18446744073709551616]'
```

`JSON.rawJSON`静的メソッドを用いることで、JSONのシリアライズ結果として値を直接埋め込むことができるようになります。

## まとめ {#conclusion}

この章では、JSONについて学びました。

- JSONはJavaScriptのオブジェクトリテラルをベースに作られた軽量なデータフォーマット
- `JSON`オブジェクトを使ったシリアライズとデシリアライズ
- JSON形式にシリアライズできないオブジェクトもある
- `JSON.stringify`はシリアライズ対象の`toJSON`メソッドを利用する
- JSONで扱えない値を扱いたい場合は`reviver`関数と`replacer`関数を利用する

[ECMA-404]: https://ecma-international.org/publications-and-standards/standards/ecma-404/
[RFC 8259]: https://www.rfc-editor.org/rfc/rfc8259
[json.orgの日本語ドキュメント]: https://www.json.org/json-ja.html
[JSONオブジェクト]: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON
[JSON.parseメソッド]: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
[JSON.stringifyメソッド]: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
[JSON.rawJSONメソッド]: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON
