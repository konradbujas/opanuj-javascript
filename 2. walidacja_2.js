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
let password = "text1@"

const specialCharacters = ['!', '@', '#',];




function validateLength(password) {
    return password.length >= 3 && password.length <= 10;
}
console.log(password.length);



function hasSpecialCharacters(password) {
    return password.split('').some(x => specialCharacters.includes(x));
}  
console.log(hasSpecialCharacters(password));
  


function hasNumber(password) {
    return password.split('').some(x => !isNaN(x));
}
console.log(hasNumber(password));
  

function validatePassword(password) {
    if(typeof password === 'string'){
        return validateLength(password) && hasSpecialCharacters(password) && hasNumber(password);
    } else {
        throw new Error(`Parametr (${password}) nie jest typu: string`);
    }
}
console.log(validatePassword(password));

  
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

console.log(validatePassword("todziala1@"));
console.log(validatePassword("todziala1@zxczx"));
console.log(validatePassword("tdf1#"));
console.log(validatePassword(246));