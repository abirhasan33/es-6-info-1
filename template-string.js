const priya = 'Asif akbar';
const meye = "Meye tumi ki chino";
const kobita = `kobita tumi sopno chrini`;

const multiLine = 'This is my first line \n' + 
'This is second line \n' + 
'This is thrid line \n' +
'This is fort line \n';

const multiLineNew = `this is First line
This is second line
Thie is thirs Line
Thie is Fort Line
`;

const  friends = ['abir', 'abul', 'kabil', 'babil'];
const count= 5;
const old = '<h3 class="friend-name"friend-5</h3>'
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>'
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`

const first = 'Mamun';
const list = 'Chowdhuty';
const fullold = 'This parson name is:' + first + ' ' + list;
const fullNew = `This parson name is: ${first} ${list}. Has money ${friends.length+10 * 500}. He liven in dhoca`;
console.log(fullNew);