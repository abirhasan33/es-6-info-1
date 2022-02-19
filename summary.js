let priyoPerson = 'Thisha the geet';
priyoPerson = 'kamona';

const bow = 'thisa'

function getName(first, list='Chowdhury'){
    return first+ ' ' + list;
};

// templat string 
const myPeople  = `My Lovely person is are ${bow}. and his fullname is ${getName('Abir')}`
console.log(myPeople);

// Array function 
const getName2 = (first, list) => first + ' ' + list;
const fiveTimes = x => x * 5;
const bogArrayFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}

const numbers = [2, 4, 6, 7];
const sum = Math.max(...numbers);