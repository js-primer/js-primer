// `number`が偶数ならtrueを返す
function isEven(number) {
    return number % 2 === 0;
}
// `numbers`に偶数が含まれているならtrueを返す
function isEvenIncluded(numbers) {
    let isEvenIncluded = false;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (isEven(number)) {
            isEvenIncluded = true;
            break;
        }
    }
    return isEvenIncluded;
}
const array = [1, 5, 10, 15, 20];
console.log(isEvenIncluded(array)); // => true
