 const add = (num1, num2) => num1 + num2;
 const sum = add(22, 8);

 const multiply = (num1, num2, num3) => num1 * num2 * num3;
 const result = multiply(4, 12, 3);

 const fiveTimes = (num1) => num1 * 5;
 const output = fiveTimes(17);

 const tenTimes = num1 => num1 * 10;
 const value = tenTimes(17);

 const getname = () => 'brandon Sam';
 const name = getname();

 const doMath = (x, y) => {
     const sum = x + y;
     const diff = x - y;
     const result = sum * diff;
     const output = result * 5;
     return output;
 }
 const total = doMath(12, 5);
 console.log(total);

