/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 2 - "Walidacja"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy przekazane hasło spełnia określone warunki:
*
* a) Ma długość od 3 do 10 znaków
* b) Zawiera jeden ze znaków specjalnych - !, @ lub #
* c) Zawiera cyfrę
*
* Przykład:
* validatePassword('test') // => false
* validatePassword('test11!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/
password = 2;
password;
console.log(typeof password)
function validatePassword(password) {
if( (typeof password) !== 'string' ){
  throw Error ('Password is not a String !');
}
console.log(password);
}
password;
validatePassword('')

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(validatePassword(''), false);
verify(validatePassword('lol'), false);
verify(validatePassword('ToDziala1#'), true);




//



const pass2 = 'konrad';
pass2;
console.log(typeof pass2);
console.log(typeof pass2 === "string");

  function reverseMe(pass2){
      if(typeof pass2 !== "string"){
        throw new Error("Input musi być typu string");
      }
      console.log('Podano string ;p');
    }
    reverseMe('hello'); // tutaj modyfikujemy parametr funkcji którą chcemy wywołać ;))