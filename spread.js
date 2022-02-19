const number = [23, 65, 100, 34];
// console.log(number);
// console.log(...number);

const max = Math.max(23, 99, 65);
const maxArray = Math.max(...number);
// console.log(max, maxArray);

const numbers2 = [22, ...number, 88];
number.push(55);
number.unshift(50);
console.log(numbers2)
console.log(number)