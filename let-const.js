let balanch = 1340;
balanch = 1340;

let ueseName = 'janpakhi potas potas';
const weTogether = 'ami ' + ueseName;
console.log(weTogether);
// ueseName = 'moyna apkhi';

const number = [45, 55, 89, 29];
// number = [22, 33, 55, 66]; noi allowed const 
number.push(555);
number[1] = 333;

let sum = 0;
for (let i = 0; i < number.length; i++) {
    const element = number [i];
    sum = sum + element;
    return sum;    
}

const student = {foll: 101, name: 'mofij', job: 'intern'};
student.name = 'Mofazzol';
// student = {name : 'mofazzal'}; not const