const year = new Date().getFullYear();
if (year % 400 === 0) { // 400で割り切れる
    console.log("うるう年です");
} else if (year % 100 === 0) { // 100で割り切れる
    console.log("うるう年ではありません");
} else if (year % 4 === 0) { // 4で割り切れる
    console.log("うるう年です");
} else { // それ以外
    console.log("うるう年ではありません");
}
