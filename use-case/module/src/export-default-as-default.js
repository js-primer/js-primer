const foo = "foo";
function bar() { };
// fooは名前付き、barはデフォルトとしてエクスポートする
export { foo, bar as default };
