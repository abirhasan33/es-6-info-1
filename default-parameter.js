function add(num1, num2 = 10){
    // num2 = num2 || 0;
    const total = num1 + num2;
    return total;
}
// const result = add(15, );
// function add(num1, num2){
//     const total = num1 + num2;
//     if(num2 == undefined){
//         num2 = 0;
//     }
//     console.log(num1, num2);
//     return total;
// }
const result = add(15, );
console.log(result);

function fullName(first, list = 'chowdhury'){
    const name = first + ' ' + list;
    return name;
}
const nameFull = fullName('abir', );
console.log(nameFull);