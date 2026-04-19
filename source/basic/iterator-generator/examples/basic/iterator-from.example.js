// Iterator.from を使って配列からイテレータを作成
const iterator = Iterator.from([1, 2, 3]);
// for...of でイテレータから値を取り出す
for (const value of iterator) {
    console.log(value);
}
