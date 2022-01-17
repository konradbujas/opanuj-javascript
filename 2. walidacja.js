2 - "Walidacja"/*
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

let password = "5tezxvzvxvdfg5";
const specialCharacters = ["!", "@", "#"];
console.log(specialCharacters);

const hasNumber = (/\d/);
password = "!@#dfbd1fg";
console.log(specialCharacters.includes(password));
console.log(password.search(/\d+/));
console.log(password.match(/'!' ||  '@' || '#'/));



  console.log(/\d/.test(password));
  console.log(password.search(/\d/));
  console.log(password.match(/\d/));
  console.log(/\d/.exec(password));
  password = "!@#dfbd4fg";
  console.log(password.match(/\!\@\#/);
  console.log(/\!\@\#/.test(password));

function validatePassword(password) {
    //password = "tedfz!zvg!";
    
    console.log(password.length)
    if ( password.length > 10) {
    throw new Error ('Password must be shorter than 11 characters!') ;
    }
    console.log(password.length);
    if ( password.length < 3) {
        throw new Error ('Password must be longer than 2 characters!') ;
    }
    console.log(password.includes([specialCharacters]))
    if (!password.split('').includes(specialCharacters)) {
        throw new Error (`Password must contains one of special characters: ${specialCharacters}`);
    }
}

// trzeba dopisać fragment czy w haśle zawiera się znak specjalny oraz czy zawiera się liczba. Można to chyba zrobić jako for Each i sprawdzać po każdym elemencie ze zmiennej a potem na końcu sprawdzić alternatywę czy któreś rozwiązanie jest true i wtedy jeśli nie to błąd że brakuje znaku a jak tak to ok





/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(validatePassword('!@#'), false);
verify(validatePassword('lol !'), false);
verify(validatePassword('ToDziala1#'), true);