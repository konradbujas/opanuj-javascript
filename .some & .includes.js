const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true



const arr = [2, 4, 1, 3];
const firstCondition = (element) => element > 1;
console.log(arr.some(firstCondition));


const specialCharacters = ['!', '@', '#',];



// 1. podać hasło i przypisać je do zmiennej password
const password = "ToDziala1!";

// // 2. zapisać hasło za pomocą tablicy -> metoda split i dzielimy co znak, więc ('') czyli zmienna.split('');

// const arrPassword = password.split('');

// console.log(arrPassword);

// 3, sprawdzamy czy w arrPassword jest specialCHaracters

function hasSpecialCharacters(password) {
    return password.split('').some(x => specialCharacters.includes(x));
}  
console.log(hasSpecialCharacters(password));


