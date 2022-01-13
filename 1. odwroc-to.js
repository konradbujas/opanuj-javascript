/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 1 - "Odwróć to"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która odwróci przekazany do niej string.
*
* Przykład:
* reverseMe('abc') // => 'cba'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/
let input = null;


function reverseMe(input) {

  if (typeof input !== 'string') {

  throw new Error (`Hey, "${input}" is not a string type!`);
  } 

  return [...input].reverse().join('');
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}


verify(reverseMe('a'), 'a');
verify(reverseMe('abc'), 'cba');
verify(reverseMe('Przeprogramowani'), 'inawomargorpezrP');
verify(reverseMe('Brawo!'), '!owarB');
verify(reverseMe('Konrad!'), '!darnoK');

verify(reverseMe(246), 642);






// * rozwiązanie łapania błędu w wersji II
// try {
//   verify(reverseMe('a'), 'a');
//   verify(reverseMe('abc'), 'cba');
//   verify(reverseMe('Przeprogramowani'), 'inawomargorpezrP');
//   verify(reverseMe('Brawo!'), '!owarB');
//   verify(reverseMe('Konrad!'), '!darnoK');
//   reverseMe("123", "321");
//   reverseMe("ko", "ok");
//   verify(reverseMe(2600), 00620);
  
//   } catch (Error) {
//     console.log(Error.message);
//   }