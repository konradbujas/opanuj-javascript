

// Deklarowanie tablicy
const arrAlternative = new Array();
const arr = [1, 2, 'text', [3, 4, 5], {el: 'value'}];
// oba zapisy generują ten sam efekt, więc nie ma powodu żeby nie korzystać z krótszej drugiej formy ;)

// Dodawanie elementów do tablicy
arr.push(1); // dodawanie na koniec tablicy, wepchnięcie do tablicy
arr;

arr.unshift(2); // dodawanie na początek tablicy
arr;


// Usuwanie elementów z tablicy
arr.pop(); // usuwa ostatni element tablicy
arr;

arr.shift(); // usuwa pierwszy element tablicy
arr;
