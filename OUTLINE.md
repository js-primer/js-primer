# OUTLINE

## [JavaScriptとは](./basic/introduction/README.md)
## [コメント](./basic/comments/README.md)
## 字句構造
## Strict mode
## [変数と宣言](./basic/variables/README.md)
## [値の評価と表示](./basic/read-eval-print/README.md)
## [データ型とリテラル](./basic/data-type/README.md)

- @未使用
	- ガーベジコレクションの簡単な説明

```js
let array = [ 1,2,4];
array = [10,2,3,0];
// この時最初に代入されていた配列のオブジェクトは参照できなくなる
// => GCされる
```

## [関数と宣言](./basic/function-method/README.md)
## [文と式](./basic/statement-expression/README.md)
## [暗黙的な型変換](./basic/implicit-coercion/README.md)
## [条件分岐](./basic/condition/README.md)
## [ループと反復処理](./basic/loop/README.md)
## [演算子](./basic/operator/README.md)
## オブジェクト
- 目的
	- オブジェクトの作り方、アクセス方法について学ぶ
	- オブジェクトはすべてのオブジェクトの元となっていることを学ぶ。
	- Objectのインスタンスメソッドの使い方と継承について学ぶ
	- Objectの静的メソッドの使い方について学ぶ
- サマリ
	- オブジェクトはプロパティの集合のことで、連想配列に近いですがキーには文字列かSymbolのみが利用できます。キーにオブジェクトを利用する場合はMapオブジェクトというものを利用できます
	- JavaScriptのほぼすべてのオブジェクトがObjectコンストラクタを継承しています。
	- プリミティブ値も、それぞれコンストラクタとなるオブジェクトが存在し、それらはObjectコンストラクタを継承しています。
		- `null`と`undefined`を除いたもの
		- この２つは toStringとやった場合に次のようなエラーがでます
	- そのため、それぞれのプリミティブ値もオブジェクトコンストラクタのインスタンスメソッドとして定義されているものは利用できるようになっています。
	- そのため、Objectのインスタンスが利用できるメソッドはObjectを通じて利用できます。
	- また、Objectの静的メソッドは便利なものが用意されているので、簡単な使い方を見てみます。
- アウトライン
	- オブジェクトとは
		- オブジェクトはプロパティの集合
		- オブジェクトリテラルで作成できる
		- ショートハンドで書ける
		- 値は何でも格納できるけど、キーはプロパティ名は"文字列"となる
			- これは数値や関数を渡した場合に勝手に文字列化される
		- 連想配列とかハッシュとか言われることがある
		- キーにオブジェクトが使えるのはMap
			- そのため連想配列とは若干違う
	- オブジェクトへのアクセス
		- プロパティへのアクセス方法が2種類ある
			- 簡単で分かりやすい方法
				- ドットを繋げてのアクセス方法
			- 読みにくいけど動的な方法
				- ブラケット記号によるアクセス方法
				- ブラケットは変数をプロパティ名に利用できたし、ドットでは書けない文字列もプロパティにできる
		- オブジェクトへの追加
			- 変数をプロパティ名に利用する
			- ブラケット記法の 対となる Computed Property
		- オブジェクトのショートカット
			- `{ key }`
	- オブジェクトの静的メソッド
		- `Object.keys`、`Object.values`、`Object.entries`
			- こいつらはIterableじゃなくて普通に配列を返す
			- Object.keysでマージ？
		- `Object.assign({})`でコピー
		- `Object.is`
			- `===`では`+0`と`-0`は区別しない、また`NaN`は区別される
			- このメソッド自体は重要ではないが、この比較ロジックが他でも利用されている
	- オブジェクトのインスタンスメソッド
		- プロパティの存在確認
		- プロパティがあるかを確認する方法としては `in` 演算子 か hasOwnPropertyが利用できる
			- `in`演算子は継承元(親)が持っている場合も`true`を返す
				- `toString`などは親が持っているのでtrue
			- `hasOwnProperty` はオブジェクト自身が持っているなら`true`を返す
				- `{}.hasOwnProperty("toString")// false`ということ
	- オブジェクトはすべての元
		- プリミティブ以外はすべてがオブジェクト
		- JavaScriptのほぼすべてのオブジェクトは`Object`クラスを継承している
			- `Object`のインスタンスは`Object.prototype`を継承
			- これによりin演算子と`Object#hasOwnProperty`メソッドの違いが起きてる
			- `Object.create`を使ってオブジェクト継承を表現できる
		- `Array`を例にしてみる
			- `Array`のインスタンスは`Array.prototype`を継承
			- `Array.prototype`は`Object.prototype`を継承
			- これをprototype継承と呼ぶが詳しくはあとで
			- 結果として、Objectのインスタンスが持つメソッドは、他のオブジェクトからも利用できるということ
		- 殆どのオブジェクトが文字列にできるのも`Object#toString()`が継承されているから
		- 関数、正規表現、文字列オブジェクト、数値オブジェクト、真偽値オブジェクト、配列、Map、Setとにかく何でも
	- [コラム] Object.create(null)
		- Objectはすべてのオブジェクトの元といったけど例外があります。
		- それが`Object.create(null)`です。
		- プロパティの値が関数であるものがメソッドと学びました
		- そしてObjectのインスタンスは`toString`などのメソッドを始めから持っていることを知りました
		- ここである問題があることに気づきます。
		- 任意の文字列をキーにするオブジェクトを作るときに `toString` 始めからプロパティとして存在することが分かります。
		- この問題を解決するには、オブジェクトではなくMapを使うか、もしくはメソッドを持たないObjectを作れば良いはずです。
	- `Object.assign`
		- 複製とマージに使えるコピーメソッド
		- コピー
			- あるものをすでにあるところへコピーすること
		- 複製
			- あるものを元に新しく同じものをつくること
		- マージするときは空のオブジェクトを起点にする
		- 複製は空のオブジェクトへマージすることで表現できる
		- 基本的にshallow copyであることに注意が必要
		- deep copyは再帰的にshallow copyすることで実現できる
		- 同様に、JavaScriptでは基本的にshallowなものばかり
			- `Array#slide`、`Array#flatten`など
		- そのためユーザーランドのライブラリに一般にある機能が多い
			- npmというパッケージ管理ツールでそのエコシステムが成り立っている
- 未使用
	- コンストラクタとリテラル
		- new演算子
		- コンストラクタ
		- リテラル
	- new 演算子とインスタンス
	- ラッパーオブジェクト
		- プリミティブ値はオブジェクトではないけど、プリミティブ値にもラッパーオブジェクトというオブジェクト版がややこしい。
		- プリミティブな値を`[[Get]]`するときに`ToObject`されてできるのがラッパーオブジェクト
		- ラッパーオブジェクトについては基本的に使い道がほぼないので気にしなくて良い。
		- プリミティブのラッパーオブジェクトは型変換ぐらいしか利用しない。
	- ObjectのStatic method
	- この継承の仕組みがprototypeチェーンであり、それについてはFunctionで詳しくやるのでココでは解説しませんが、クラス継承をJavaScriptではどのようなしくみでうごいているかという点について
	- Object.isは同値性を判定するメソッド
		- `+0`と`-0`の違いが必要になる場面で必要だけど滅多にない

## 配列

- この章では、配列の基本的な操作と配列を扱う場合においてのパターンについて学びます。
- 配列の作り方、取り出し方、データ探索、削除について学んでいきます。
- サマリ
	- 配列は特別なオブジェクトです。まずは配列の作り方と配列への要素の追加方法、配列から値を取り出す方法、配列に値がはいってるかを確認する方法を見ていきます。
	- また配列は`length`が特別な動きをするため、`length`を変更することで値を削除することもできますが、`splice`などの削除方法について見ていきましょう。
	- そして、配列は破壊的な操作と非破壊的な操作が混在する分かりにくい部分を持ち合わせています。そのため、非破壊的に扱う方法を学ぶことでより安全な配列を利用できます。
	- 配列自体が拡張に拡張を重ねた仕様であるため、Lodashのように扱い方を統一したライブラリなども多いです。
	- また配列は 0以上の値を扱うことができるため、空の配列を使うことで値が無い場合とある場合にも同じ操作ができるためパターンとして優れています。
	- そのためには色々なものを配列にする方法を見ていきましょう
- アウトラインの流れ
	- 配列の基礎
		- 読み込み
		- 書き込み
	- 配列の応用
		- 配列と他のオブジェクトでのやり取り
- アウトライン
	- 配列は特殊なオブジェクト
		- 配列とは値に順序つけて格納したもの
		- 配列の中身の値のことを**要素**、それぞれの要素の位置のことを**インデックス**という
		- 配列は可変な配列のみ
		- `length`は自動的に追従する
			- `array[array.length] = 1`で`length`が自動で増える
		- typeof をすると "object"
			- 分類としてはオブジェクト
		- 配列かどうかを判定 `Array.isArray` を使う
	- [コラム] TypedArray
		- TypedArrayとは
		- Arrayとの違い
	- 配列の作成とアクセス
		- 配列の宣言には `[]` リテラルが使える
		- `array[num]` でアクセスできる
		- arrayのインデックスは `0` から開始されます
		- 配列の末尾の要素へのアクセスは `length - 1` を使う
		- 存在しないインデックスへのアクセスは`undefined`が返される
		- オブジェクトで存在しないプロパティへアクセスしたのと同じ
	- 配列から要素を検索
		- 存在(真偽値)
			- 配列に含まれているかは`Array#includes`や`Array#some`で見つけられる
		- インデックス
			- `Array#indexOf`や`Array#findIndex`でindexを取ることができる
		- 実体
			- 配列から要素を取り出す場合は `Array#find`を使う
		- なぜそれぞれの方法が用意されているのか?
		- 読む人のコストの低い明示的な書き方と処理コストが主な理由
		- `indexOf`と`includes`の比較
	- 配列と破壊的、非破壊的
		- MutableかImmutableか
		- 基本的に破壊的なAPIと非破壊的なAPIが混在している
	- 配列へ要素を追加と削除(破壊的)
		- 末尾
			- `Array#push`
			- `Array#pop`
		- 先頭
			- `Array#unshift`
			- `Array#shift`
	- 配列から要素を削除(破壊的)
		- 配列から要素を削除する方法も色々ある。
		- 基本的には`Array#splice`を使うのが簡単だけど、これは破壊的な操作
			- 削除と追加を同時に行うという特殊な感じのメソッド
		- 空の配列を作りたいなら `.length = 0`を使うこともある
		- けど、普通は新しい配列を作って変数を上書きしちゃうのが楽です。
	- 疎の配列を作る
		- `new Array` は`length`を指定した配列を作る
			- 疎の配列は基本的に扱いにくく誤解の元となるため避ける
			- パフォーマンス的にも問題になりやすい
			- Array.ofかリテラルを使う
	- Array-likeとは何か
		- `length`と順番をもったオブジェクトのこと
		- ただし `length` が配列のように自動的に更新されない
		- また、Array.prototypeではないのでArrayのメソッドをもっていない
		- Arrayのようなオブジェクトのこと
		- DOM Node、arugmnent
		- `Array#from`で配列にできる
	- 配列をコピー
		- 配列は参照型
			- 配列はオブジェクトであるため参照型
			- 破壊的な変更は参照先にも影響を与えしまう
			- 配列は基本的に破壊的な操作になってることが多い
		- `Array#slice`または`Array#concat`
		- `Array#copy`はない
		- 破壊せずに扱うならコピーするか破棄せずに変更を加える事ができるメソッドを使う
	- 高階関数とメソッドチェーン
		- これについてはLoopのところで少しやっているが、基本的に配列の中身をすべて走査するため一見処理コストはあるが、膨大な数にやセンシティブな状況でなければこれらの高階関数で配列を扱ったほうが安全で読みやすいコードになる。
		- なぜ読みやすいコードになるかというと、手続きではなく、処理を関数(大体は無名関数だが)にして扱うため処理のまとまりが生まれやすい。
	- パターン: nullを返さずに配列を返す
		- また null を返すパターンなどが減るため、常に配列を受け取り/必要なら配列を返すというパターンが出来上がるところが良いところ。
		- nullを渡すな空の配列を渡せ、nullを返すな空の配列を返せ
- 未整理
	- push/pop/shift/unshift
		- スタックとキューを実装する?
		- キューはEventEmitterを実装する際に使うような気がするけど、キューじゃなく参照か
		- `class`が欲しいのでここだと微妙
		- [unshift, shift, pop, pushが混乱するので、絵で整理した - maeharin log](http://maeharin.hatenablog.com/entry/20130122/unshift_shift_pop_push)
		- [JavaScript による一番簡単なスタックとキューの実装方法 - Web/DB プログラミング徹底解説](http://keicode.com/script/scr25.php)
	- Arrayの要素がないことは `hasOwnProperty`を使うことで判定できます。
	- 配列は特殊なオブジェクトです。
	- 格納した要素はキーに数字を使って取り出せます。
		- `Array#from` で正しく配列にできる
		- そもそもなんでArray-likeというのか。配列の`length`は特殊な性質を持っているため。
		- 配列の中身に対して動的に返す値が切り替わる
		- 存在しない配列の添字に代入できるという点
		- [How ECMAScript 5 still does not allow to subclass array — Perfection Kills](http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/ "How ECMAScript 5 still does not allow to subclass array — Perfection Kills")
		- [class extends構文を使わずにArrayを継承する | Web Scratch](http://efcl.info/2016/11/23/array-subclass-by-reflect/ "class extends構文を使わずにArrayを継承する | Web Scratch")
	- `Array#concat`、`Array#slice` = 新しい配列
	- とにかく配列メソッド(操作)には一貫性がないような感じなので、自分で一貫性を持った扱い方を決めた方が良い。
			- [Array methods - Immutable or Mutable](https://gist.github.com/azu/30b1ff6831c3bbf7fbd5501d6a2bdfb0 "Array methods - Immutable or Mutable")
	- Arrayと高階関数
	- 配列から他のデータ型にする場合で考えるのは、ほぼ文字列ぐらいなので`Array#join`と`Array#map`を使うなどが定番のやり方
	- Arrayのパターン
		- Array -> Array
			- slice、concat、mapなどに代表されるコピーを作って返す操作
		- Array -> void(破壊的)
			- pushやshiftに代表されるArrayに破壊的な操作
		- Array -> String
			- joinなどの文字列
		- Array -> Boolean
			- indexOfやincludes等の操作
			- `Array.isArray`は特殊なものでArrayかどうかを判定できる
				- Realmが異なるとArrayはinstanceofでも一致しなくなるため
		- Array -> any
			- findなどのArrbayからものを取り出す操作
			- 探索処理を書く際には必須だが
			- JavaScriptのデフォルトは大体が線形探索担ってる
		- Other -> Array
			- `Array#from`、`Array#of`
			- Array-likeという概念がある
			- これもやっぱりArrayは特殊なオブジェクトであるから
			- exitic objectについて
		- `new Array`は引数の数で壊れてる
			- `Array.of`を使ってリテラルのように配列を作る

## String

- テーマ
	- JavaScriptにおける文字はユニコードに従っていること
	- 基本的な文字操作と配列との違い、正規表現との関連について学んでいく
	- JavaScriptにおいては特に文字において苦戦する要素は少ないが、UTF-16を扱うためサロゲートペアの問題があることは知っておく
	- 目的な文字列を組み立てる方法を学んでいきます。
- アウトライン
	- 文字列の宣言は、リテラルを使う
		- `""`
		- `''`
		- テンプレートリテラル
	- 文字とはなにか
		- UTF-16 code unitsのシーケンスである
		- Code unitは `\uHHHH` と表現することができる
		- またCode Unitはサロゲートペアの問題がある。
		- Code Pointは`\u{HHHHHH}`として表現できる
			- これは1個または2個のCode Unitをまとめたもの
		- char
		- charCode
		- code unit
	- 文字列の分解
		- インデックスでのアクセス
		- String#slice, String#substring
	- 文字列の結合
		- 加算演算子
		- `string += "String"`
		- 変数と文字列の結合にはテンプレートリテラルを使う
	- 文字列の比較
		- `===`で文字列を比較する
		- また`>`は辞書順
	- 文字列の検索
		- 部分文字列の検索
			- インデックス
				- `対象文字列.indexOf("検索文字列")`: インデックス
			- 真偽値
				- `対象文字列.startsWith("検索文字列")`: 先頭にあるか
				- `対象文字列.endsWith("検索文字列")`: 終端にあるか
				- `対象文字列.includes("検索文字列")`: 含むか
		- 正規表現の検索
			- 真偽値
				- `String#startsWith`: `/^検索文字列/.test(対象文字列)`
				- `String#endsWith`: `/検索文字列$/.test(対象文字列)`
				- `String#includes`: `/検索文字列/.test(対象文字列)`
			- インデックス
				- `String#indexOf`: `対象文字列.search(/検索文字列/)`
			- 詳細な情報
				- `String#match`と`String#exec`
		- 文字列と正規表現の違い
			- 意図の表明
			- 正規表現にはコメントが必要
	- 文字列の置換/削除
		- `String#replace`を使う
		- 削除は空文字への置換
		- 第二引数の関数を使った高度な置換
	- [コラム] 文字列と正規表現
		- Symbolで同じ処理を共有している
	- 構造的な文字列の組み立て
		- 文字列を操作してやりたいことは最終的に目的の文字列を組み立てることです。
		- 多くは文字列の結合や削除だけで目的を満たせますが、構造的な意味を持つ文字列の場合は、専用の処理を書く必要が出てくる場合があります。
		- 例えばある文字列同士からURLを生成したい場合
		- DOMならURL、Node.jsならpathモジュール
		- タグ付きテンプレート
			- DSLを表現できる
		- HTMLエスケープの例
			- コンテキストを考慮しないと安全な文字列結合が難しい
- 未使用
	- 文字列はImmutableな値であるので、削除も新しく文字列を作って返すようになってる
	- Immutableであることがオブジェクトとの大きな違い
	- 文字列をコピーするメソッドは必要ない
		- コピーは `var x = str` や `fn(str)` とというときにコピーされるということ
    - 文字列の知りたいこと分類
        - 作成と取得
            - リテラル、インデックス
            - sliceとstubstring
            - padStart/padEnd
            - コラム なぜ start/end?
            - 結合、分解
        - 文字列組み立て
            - URL、Path、HTMLなど
            - タグ付きテンプレート
        - フォーマット
            - テンプレート、trim
        - 検索/置換
            - search、replace、startsWith、includes
            - <=> 正規表現
        - ユニコード
            - サロゲートペア
            - UTF-16
            - 文字 = `.` `/regexp/u`

## 正規表現

- 正規表現は正規表現リテラルと正規表現オブジェクトがある
- 基本はエスケープが不要なリテラルで
- 正規表現オブジェクトは動的に正規表現を組み立てたい場合に利用する
	- 特殊文字には二重エスケープが必要であるため記述が面倒
- 正規表現はStringと組み合わせて利用する
	- 文字列が正規表現にマッチするかテストする
	- 文字列からマッチする文字列を取り出す

## 未使用
- instanceof
	- instanceofは同一性に近いチェック
- プリミティブと参照型について
	- [data-type: プリミティブと参照型についてを追加する · Issue #145 · asciidwango/js-primer](https://github.com/asciidwango/js-primer/issues/145 "data-type: プリミティブと参照型についてを追加する · Issue #145 · asciidwango/js-primer")
	- 値自体の特性 @done
		- プリミティブ型はImmutable
		- オブジェクトはMustable
	- 値の受け渡し `function`
	- コピー `=` (特にこれはオブジェクト側に統一した方法がないという問題がある)
	- 比較 `===` @done
- 関数名
	- https://jsprimer.net/basic/function-method/
	- 関数名を取得するFunction#nameについては触れていない
	- これはReflection APIなのでminifyで壊れることについては触れたい

## ラッパーオブジェクト

- `"string".toString()`が呼べる理由を理解する
- ラッパーオブジェクトはプリミティブ型の値に対応するオブジェクト
- プリミティブ型の値は評価時に自動的にラッパーオブジェクトへ変換される
- ラッパーオブジェクトも評価時にプリミティブ型の値が取り出される
- 基本的にはラッパーオブジェクトを使う理由がない
- typeofの問題もあるため
- 普段は意識する必要がない


-----

## 配列: Array#slice

- 目的: 配列から指定範囲の要素を取り出すには、`Array#slice`の動作について学ぶこと
- `String#slice`と同様で、範囲を指定して新しい配列を作って返す
- 具体例: 第一引数のみはそれ以降
- 具体例: 第二引数を指定すれば範囲指定になる

```js
var array = ["A", "B", "C", "D", "E"];
console.log(array.slice(1)); // => ["B", "C", "D", "E"]
console.log(array.slice(1, 5)); // => ["B", "C", "D", "E"]
// マイナスを指定すると後ろからの位置となる
console.log(array.slice(-1)); // => ["E"]
// 位置:1から4の範囲を取り出す
console.log(array.slice(1, 4)); // => ["B", "C", "D"]
// 第一引数 > 第二引数の場合、常に空文字を返す
console.log(array.slice(4, 1)); // => []
```

## 配列: 破壊的メソッドと非破壊的メソッド

- 目的: 配列の破壊的なメソッドと非破壊的メソッドの違いについてを知ることは重要です。
	- 破壊的なメソッドとは、配列オブジェクトのプロパティそのものを変更し、配列または変更理由を返すメソッドです。
	- 非破壊的メソッドとは、配列オブジェクトのコピーを作成してから値を変更し、そのコピーを返すメソッドです。
	- 配列の要素を変更するメソッドには、これらの破壊的メソッドと非破壊的メソッドが混在しています。
- 具体例:
    - 破壊的なメソッドの例としては`Array#push`があります。
    - 非破壊的メソッドの例としては`Array#concat`があります。
    - どちらも既存の配列に値を追加することができる点は同じです。
    - 動作: `Array#push`では配列を破壊的に操作する
    - 動作: `Array#concat`は新しい配列を作り値を結合する
- 必要性: 関数で配列を処理する際に受け取った配列を破壊することは問題となることがあるためです。
	- 具体的なコード例
- 解決方法: 破壊的なメソッドは配列をコピーしてから操作することで解決できます。
    - 対策: `slice`や`concat`を使ったコピー
	    - sliceやconcatは引数なしの場合、単純に配列のコピーを返すことが知られています。
    - 対策: ライブラリを利用した方法
	    - immutable-array-prototypeやlodash、immutable.jsなど多用なライブラリが存在しています。

## 配列: Array-like

- 目的: Arrayのようなオブジェクトについて知る
- 問題点: JavaScriptには配列のように扱えるが配列ではない、Array-likeと呼ばれるオブジェクトがあります。Array-likeオブジェクトとは配列のようにインデックスでアクセスでき、配列のように`length`プロパティも持っていますが、配列のメソッドは持っていないただのオブジェクトのことを言います。
	- 具体的なコード例
- 具体例: Array-likeオブジェクトの例として`arguments`があります。
	- `arguments`は関数の引数を順番に格納したArray-likeオブジェクトです。
	- 文字列もArray-likeですが、"文字列"という性質やIterableという性質を合わせ持っています。
- 違い: Array-likeと配列の大きな違いは、Array-likeはArrayのインスタンスではないため、配列が持つメソッドを持っていない点です。
	- たとえば、Array#map`のようなメソッドはArrayのインスタンスではないArray-likeオブジェクトには存在しません。
- 判別: Array-likeか配列なのかを見分けるには`Array.isArray`メソッドを利用できます。
	- `Array-like`は配列ではないので結果は`false`となります。
	- 先ほど配列のメソッドを持ってないと言いましたが、オブジェクトには任意のメソッドを実装できるので、`map`メソッドを持ったArray-likeオブジェクトを作ることもできます。
	- そのため、Array-likeか配列なのかは、メソッドを持っているかではなく`Array.isArray`メソッドで見分けるのが簡単で確実な方法です。
- 変換: Array-likeを配列にするには`Array.from`メソッドが利用できます。
	- なぜ: Array-likeは配列の便利なメソッドがないため、forループなどで展開しないといけないの手間となるため。
	- Array-likeを配列に変換することで配列と同じように便利なメソッドがりようできるので配列に変換してから処理することが多い。

## 配列: map/filter/reduce

- [ ] map
- [x] forEach
- [x] filter
- [x] reduce

## 配列: メソッドチェーン

- 目的: 配列でよく見かけるパターンであるメソッドチェーンがどのような原理で動いてるかを知る。
- 配列でメソッドチェーンを利用するのは処理を一つのまとまりとして定義し、繋げることができるから
- 具体例: メソッドチェーンをしない場合との比較
- メソッドチェーンがどのような仕組みで動いているのかを確認する
	- 具体例: map(a => a * 2).filter(a => a > 10)
	- 具体例: アイテムの配列から特定の値段以上の名前を取り出す
- 必要性: メソッドチェーンを利用すれば途中の一時的な変数を作る必要がなくなります。
- あまりに長いメソッドチェーンはあまりに長い関数と同じように読みにくくなりますが、適度な単位で処理を続ける場合にはメソッドチェーンを利用することで簡潔に処理を書けるようになります。
- メソッドチェーンは配列だけではなく、自作のクラスや文字列など様々な場面で利用されます。
- 有名なところではjQueryはメソッドチェーンを多用したライブラリです。
- 配列には配列を返すメソッドとしてArray#mapやArray#filterがありこれを利用した配列の加工処理がメソッドチェーンで書かれることが多いです。


-----

## 関数

関数の宣言については[関数と宣言 · JavaScriptの入門書 #jsprimer](https://jsprimer.net/basic/function-method/ "関数と宣言 · JavaScriptの入門書 #jsprimer")で紹介している。
宣言は単なるシンタックスなので、関数の機能や挙動についてを目的にした章。

- [[meta] function/関数 · Issue #112 · asciidwango/js-primer](https://github.com/asciidwango/js-primer/issues/112 "[meta] function/関数 · Issue #112 · asciidwango/js-primer")
- 関数の役割
- https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter05.md#introduction-the-role-of-functions


## 関数の目的

- 目的: なぜ関数学ぶ必要があるのか
- アプリケーションを作る場合において、用意された処理だけでは足りません。
- そのため目的に沿った関数を自分で作成する必要があります
- そもそも関数とはある入力に対してある出力を作り出し返すものです
- 目的に沿ったものを作れるようになるには、様々な関数の機能を知ることが大切です。
- またある目的ことにパターンが存在し、これはオブジェクト指向プログラミングや関数型プログラミングなど
- **目的: 関数を使った小さなユースケースを満たすプログラミングを考える**

## 関数の章の分解

- [x] 関数の宣言
- 関数とスコープ
	- var,let,const
- 関数の呼び出し
	- this,new.target
- クラス
	- prototype

## スコープ: var,let,const

- 目的: 関数の中から変数へアクセスするとどのような動きをするのかを理解する

### スコープの要素

- 機能: 関数はスコープを作り出します
- スコープを賢く使うことで読みやすいコードを書くことができ、また意図しない
- 命名：そのときにブロックを使っているこれがいわゆるスコープ
- 名前解決: スコープの中にある変数は外からアクセスできない
	- 引数はスコープの中にある変数?なので外からはアクセスできない
		- 例外: argument.callee.caller
- 機能: 逆にスコープの中から外にある変数へアクセスすることはできる
- 具体例: swithchをスコープに閉じ込めて結果だけを取り返す方法
- 誤解: スコープの中にある変数は、その関数が終了したから消えるわけではない。
- 実際: アクセスがなくなったときに初めて消える = ガーベージコレクション
	- 確認: ガーベージコレクションは仕様ではどのような表現?
- 分類: 静的なスコープと動的なスコープ
	- ある変数がどのスコープにあるのかは見て分かる
	- スコープには関数スコープ、catchのスコープなど何種類化ある
	- 基本的には `{ }`で囲まれたブロック
	- スコープにLexiacal Envという変数が作成され、変数はこのEnvに紐付けられる
	- 静的なスコープ
		- functionや
	- http://azu.github.io/annotation-memo/es6-draft/
- 関連: スコープと変数宣言
	- スコープと変数宣言には大きな関連があります。
	- なぜなら`let`や`const`、`function`文などはすべてそのスコープへ変数を宣言して値を関連付けるたです
- 分類: グローバルスコープ
	- global
	- [x] 確認: 仕様ではどのような言及
	- https://tc39.github.io/ecma262/#sec-global-environment-records
- 分類: ブロックスコープ
- 機能: スコープチェイン
- 名前解決: スコープ間で同じ変数の定義とshadowing
- [コラム] スコープは小さく、変数の影響範囲は小さく
	- 変数を不用意にグローバルに書いてしまうと影響範囲がお多い
	- そのため必要なスコープで必要な変数を定義する
	- 複数のスコープで共有する変数は?
		- => いわゆるデザインパターンの世界
	- 必要なスコープで必要な変数を定義する
- 活用: クロージャー
	- 変数の生きてる例
	- クロージャーはファクトリと言えるかも
		- <http://www.sbcr.jp/products/4797388640.html>
	- ファクトリをその場で作って定義は捨てるIIFE
	- 正規表現の初期化
- [コラム] hoisting、funcitionとvar fn =function、TDZ
- 未使用
	- 参照できない変数を参照した時のエラー

**Note**:

スコープの説明パターン

- コードで説明する
	- 初めてのJavaScript
- 図で説明する
	- JavaScript本格入門
	- [You-Dont-Know-JS/ch1.md at 31e1d4ff600d88cc2ce243903ab8a3a9d15cce15 · getify/You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS/blob/31e1d4ff600d88cc2ce243903ab8a3a9d15cce15/scope%20%26%20closures/ch1.md "You-Dont-Know-JS/ch1.md at 31e1d4ff600d88cc2ce243903ab8a3a9d15cce15 · getify/You-Dont-Know-JS")
- 擬似コードで説明する
	- 仕様をコードにする


## 関数とスコープ: なぜスコープは大事？

- スコープと名前解決
    - プログラミングで重要な概念は値を変数に保存して、必要なときに取り出して使うことです
    - 関数も値であるので、関数を変数に保存して、必要な処理を再利用できます
    - しかし変数は同じ名前をスコープに宣言することはできません
    - 何かアプリケーションを作成する際に、あらゆるところから取り出す必要がある値よりも一時的な値、つまり一時的な変数の方が多いです
    - つまり、ひとつのグローバルスコープへすべての変数を定義する必要性はありません
    - むしろ変数は必要なスコープの中でのみ扱い、その中で完結することが見た目どおりのコードへつながります
- 関数とプログラミング
    - 関数を使わなくてもプログラミングはできます
    - 多くのプログラミング言語は人間が書くために作られたものです
    - すべての処理を関数を使わずに書くこともできその処理結果は同等です
    - しかし次のように関数を使うことで人間が読んで分かるコードを書きやすくなる



## 関数とスコープ: 未使用

- スコープは**静的**に決定される
	- そのため見た目よりははるかに分かりやすい
	- 開眼JavaScript参照
	- スコープチェインの参照は動的(実行時に)おこなわれる
- クロージャー
	- クロージャを一言で表すと「スコープチェーンに存在する変数への参照を(囲い込んで)保持している関数」と言えます。
	- 開眼JavaScript参照
- ScopeとEnviroment
	- scopeによって定義されたenviroment
	- EnvironmentはRecordから構成される
	- inner env -> outer envによりスコープチェインという現象が起きる
	- <https://tc39.github.io/ecma262/#sec-lexical-environments>
- Scope chain
	- https://tc39.github.io/ecma262/#sec-newdeclarativeenvironment
	- スコープを作成するときにouter lexicale envへのリファレンスを
- A global environment is a Lexical Environment
	- GlobalもLexicalの一種
	- globalはouterがnull
- Envの種類
	- <https://tc39.github.io/ecma262/#table-23>
	- LexicalEnv
		- letやconst、classはこちらに登録する
		- https://tc39.github.io/ecma262/#sec-let-and-const-declarations
	- VariableEnv
		- varはこちらに登録する
		- https://tc39.github.io/ecma262/#sec-variable-statement
	- この２つのenvは同じことがあり、実行Contextに紐づく
- module environment もあるよ
	- module envはglobal envとなることがある
- function environment は`this`の新しいバインディングを作成する
- GlobalとLocal Scope?
	- Localという言葉を使うことでの矛盾が起きるかどうか
	- 仕様ではLocalはない、Globalはある
	- lexical scopeという分類のうち、色々あるという体後
	- var 命令を使わずに宣言された変数はすべてグローバル変数と見なす
- Global scopeのメタファ
	- https://github.com/getify/You-Dont-Know-JS/blob/31e1d4ff600d88cc2ce243903ab8a3a9d15cce15/scope%20%26%20closures/ch1.md#building-on-metaphors

擬似コードでのスコープ

```js
const globalScope = {
    outer: null, // <= globalより外側のスコープはないためnull
    envRec: new Map(), // <= envRecはスコープ毎に作られる
};
// globalスコープには`outer`変数が定義されていり
// 変数はglobalスコープのenvRecに記録される
globalScope.envRec.set("outer", "out");

// function宣言により関数fnのスコープを作成する
const fnScope = {
    outer: globalScope, // <= 現在の実装スコープ = globalScope
    envRec: new Map() // <= envRecはスコープ毎に作られる
};
// function fnの中の変数処理
// `arg` 仮引数はfnScopeのenvRecに記録される
fnScope.envRec.set("arg", 1);
// 関数スコープ内で宣言された`inter`変数もfnScopeのenvRecにされる
fnScope.envRec.set("inter", "in");
// fnScopeのなかで`outer`変数を参照する
// この時のcurrentScopeはfnScope
getValue("outer", fnScope);

function getValue(variableName, currentScope) {
    if (!currentScope) {
        throw new Error(`変数:${variableName}は定義されていません`);
    }
    // 現在のScopeのenvRecに変数が定義されているならそのenvRecから取り出す
    if (currentScope.envRec.has(variableName)) {
        return currentScope.envRec.get(variableName);
    } else {
        // ない場合は、outerのscopeに訪ねに行く
        return getValue(variableName, currentScope.outer);
    }
}
```

## Arrow Functionとthis

- Arrow Functionでは`this`が`[[ThisMode]]`が`lexical`になる
- https://tc39.github.io/ecma262/#sec-functioninitialize
- lexicalではもっとも近いfunctionを参照するようになる = 

## 削った章

- Number
- Generator/Iterable/Iterator
- ビルトインオブジェクト
    - Symbol
- Proxy/Reflect API
