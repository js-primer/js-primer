const map = new Map([["one", 1], ["two", 2], ["three", 3]]);
// Map.prototype.entries はキーと値のペアのイテレータを返す
for (const [key, value] of map.entries()) {
    console.log(`${key}: ${value}`);
}
