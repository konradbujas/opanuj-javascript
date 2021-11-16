// // * FUNKCJE *

// deklaracja funkcji:
function sayHello () {
    console.log('Cześć! Jesteś spoko ;)');
}

// teraz funkcję trzeba wywołać:
sayHello(); // po wywołaniu otrzymujemy console.loga wyżej ;)

//*
// function declaration

function sayHelloTo(user) {
    return `Cześć ${user}!`;
}

const result = sayHelloTo('Konrad');
console.log(result);

//*****
// // function expression  
// funkcji nie nadaliśmy nazwy i jest to tzw funkcja anonimowa i przeważnie
// tracimy do niej dostęp, ale w tym przypadku przypisaliśmy ją do zmiennej add2
const add2 = function (arg1, arg2) {   
     return arg1 + arg2; 
}

add2 (4.6);
// wynik działania możemy zapisać w console.logu i w ten sposób otrzymaliśmy sumę
// przekazanych liczb
console.log(add2(3,4));



// TABLICE

const arr2 = new Array(2,44);
arr2;

const arr3 = [3,66];
arr3;

const arr =[1, 2, 'text', [3, 4, 5], { el: 'value' }];
arr;



// * Dodawanie elementów do istniejącej tablicy

arr.push(1);  // wepchnięcie elementu do tablicy - na koniec
arr;


arr.unshift(2); // dodanie elementu na początku tablicy
arr;



// * Ususwanie istniejących elementów z tablicy

arr.pop(); // usuwa element z końca tablicy
arr;

arr.shift(); // usuwa element z początku tablicy
arr;



// metoda SPLICE

const range = [1, 5, 10, 15, 20, 25, 30];
range;


range.splice(2,3); // pierwsza cyfra to indeks, od którego zaczynamy
                    // druga to liczba elementów do usunięcia
range;
    // aby usunąć ostatni parametr tablicy należy podać jako pierwszy parametr liczbę -1
range.splice(-1,1);
range;
    // aby zmodyfikować tablicę metodą SPLICE - wartości które chcemy dodać podajemy jako kolejne parametry, np aby dodać 9 i 14 zamiast 1 wpisujemy tak (zaczynamy ucinając od 0 indeksu i jeden element, dodajemy podane parametry w miejsce ucinania)
range.splice(0, 1, 9, 14);
range;
range.splice(-2, 1);
range;
const range2 = [9, 14, 5, 25];
range2.splice(-3,2);
range2;
// metoda SLICE

const rangeSlice = [3, 6, 9, 12, 15, 18, 21];
rangeSlice;
rangeSlice.slice(2,3);  // nic się nie dzieje, bo trzeba pobrać dane
                        // do nowej tablicy, np. fragment - oryginalna
                        // zostaje, a my pracujemy na kopii
rangeSlice;
const fragment = rangeSlice.slice(2,3);
fragment;

const cutFragment = rangeSlice.slice(-2);
cutFragment;
rangeSlice; 
    // oryginalna tablica w przypadku met. SLICE zostaje nie naruszona
