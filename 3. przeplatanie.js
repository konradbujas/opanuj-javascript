/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 3 - "Przeplatanie"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie"
* - używając kolejnych cyfr parametrów połączy je w jeden string.
*
* Przykład:
* zipIt(111, 222) // => '121212'
* zipIt(123, 456) // => '142536'
* zipIt(12, 5555) // => '152555'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazane parametry są typu number. Jeśli parametry nie
* spełniają tego warunku, funkcja powinna rzucić wyjątek.
*/

const partOne = 1234;
const partTwo = "abcd";

console.log(typeof partOne);
console.log(typeof partTwo);

console.log(partOne);
const first = partOne.toString();
console.log(first)
console.log(typeof first);
console.log(typeof partOne);
console.log(partOne);

const second = partTwo.toString();
console.log(typeof second);


const zip0 = [...first[0], ...second[0]]
console.log(zip0);

const zip1 = [...first[1], ...second[1]]
console.log(zip1);

const zip2 = [...first[2], ...second[2]]
console.log(zip2);

const zip3 = [...first[3], ...second[3]]
console.log(zip3);


zipIt = [...zip0, ...zip1, ...zip2, ...zip3];
console.log(zipIt);




a = "24689";
b = "abcdefgh";

console.log(a.length);
console.log(b.length);
const length = (a.length >= b.length) ? a.length : b.length ;
console.log(length);

function zip(a, b) {
    for (let i=0; i < length; i++){
        const joined = [a[i], b[i]].join('');
        console.log(joined);
    }

    //return zip[i] = [...a[i], ...b[i]];
}

console.log(zip(a, b));
//console.log(zip(first,second));

// zip.forEach((i) => {
//     console.log(i);
//     first[i], second[i];
// });








//const first = partOne.split('');

// const a [setki, dziesiatki, jednosci] = partOne;


console.log(partOne);
console.log(partOne[1]);

//  const arr1 = partOne.split();

// [...partTwo].forEach (el => {
//     console.log(el);

// });




function zipIt(first, second) {
  return `${first}${second}`;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(zipIt(111, 222), '121212');
verify(zipIt(123, 456), '142536');
verify(zipIt(12, 5555), '152555');
verify(zipIt(5555, 12), '515255');
console.log(zipIt('111a', '22b2'))












