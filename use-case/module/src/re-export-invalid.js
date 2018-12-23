// ./myModule.jsのすべての名前付きエクスポートを再エクスポートする
export * from "./myModule.js";
// ./myModule.jsの名前付きエクスポートを選んで再エクスポートする
export { foo, bar } from "./myModule.js";
// ./myModule.jsの名前付きエクスポートにエイリアスをつけて再エクスポートする
export { foo as myModuleFoo, bar as myModuleBar } from "./myModule.js";
// ./myModule.jsのデフォルトエクスポートをデフォルトエクスポートとして再エクスポートする
export { default } from "./myModule.js";
// ./myModule.jsのデフォルトエクスポートを名前付きエクスポートとして再エクスポートする
export { default as myModuleDefault } from "./myModule.js";
// ./myModule.jsの名前付きエクスポートをデフォルトエクスポートとして再エクスポートする
export { foo as default } from "./myModule.js";
