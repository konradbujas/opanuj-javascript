const user = {
    name: 'Michał',
    lastName: 'Kowalski',
}
console.log(user);
function shoutMyName(user) {
  // user.nameUpper = user.name.toUpperCase();
  user.name = user.name.toUpperCase();
  console.log('Your name is:', user.name, '!');}
  shoutMyName(user);
  // tutaj widzimy jaki jest problem:
  console.log(user);


const sayHello = 'hello! ;) ...';
console.log(sayHello.repeat(5));

console.log('hello, ...');

console.log('hello, ...');

console.log('hello, ...');



