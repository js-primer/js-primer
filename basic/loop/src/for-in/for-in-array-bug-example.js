const numbers = [5, 10];
let total = 0;
for (const num in numbers) {
    total += num;
}
console.log(total); // => "001"
