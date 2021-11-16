

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


// Usuwanie konkretnego elementu tablicy

// Metoda SLICE
const range = [1, 5, 10, 15, 20, 25, 30];

    // rolą metody splice (sPlice) jest usuwanie elementów lub ich zamiana. Przyjmuje następujące parametry - pierwszy to element, od którego chcemy zacząć usuwanie bądź modyfikację, drugi to liczba elementów jakie chcemy usunąć lub zmodyfikować
range.splice(2, 3); 
range;
    // żeby usunąć ostatni element trzeba podać jako pierwszy parametr liczbę -1  - dzięki temu nie trzeba kombinować z liczeniem indeksów i można odwołac się do nich w ten sposób ;)
range.splice(-1,1);
range;
    // metoda splice również modyfikuje parametry, a działa to tak, że wartości które chcemy dodać podajemy jako kolejne parametry, np:
// aby zmodyfikować tablicę metodą SPLICE - wartości które chcemy dodać podajemy jako kolejne parametry, np aby dodać 9 i 14 zamiast 1 wpisujemy tak (zaczynamy ucinając od 0 indeksu i jeden element, dodajemy podane parametry w miejsce ucinania)
range.splice(0, 1, 9, 14);
range;
range.splice(-2, 1);
range;
const range2 = [9, 14, 5, 25];
range2.splice(-3,2);
range2;


// Metoda SLICE
// ucinamy elementy tablicy - do nowej tablicy

const rangeSlice = [3, 6, 9, 12, 15, 18, 21];
rangeSlice;
rangeSlice.slice(2,3);  // nic się nie dzieje, bo trzeba pobrać dane
                        // do nowej tablicy, np. 'fragment' - oryginalna
                        // zostaje, a my pracujemy na kopii
rangeSlice;
const fragment = rangeSlice.slice(0,3);
fragment;
    // pierwszy parametr to indeks, od którego zaczynamy, a drugi to indeks przed którym chcemy skończyć - wycięty kawałek to nowa tablica a oryginalna zostaje - pracujemy na kopii ;)

    // żeby usunąć np. ostatnie dwa elementy korzystamy z metody:
    const fragmentNew = rangeSlice.slice(-2);
    fragmentNew;
    rangeSlice; 
    // oryginalna tablica w przypadku met. SLICE zostaje nie naruszona


// Odczytywanie elementów tablicy

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// aby odczytać wartość elementu z tablicy musimy odwołać się do jego indeksu:
numbers[0] = 5;
console.log(numbers[0]);
        // w tym przypadku odwołujemy się do elementu o indeksie 0, czyli pierwszego elementu, czyli liczba 1

// aby odczytać np. ostatni element tablicy najpierw musimy zobaczyć jaka jest jego długość a następnie odjąć 1, bo zaczynamy od indeksu 0 - jest 10 elementów, ale ostatni ma indeks 9 bo liczymy od 0 ;) (numbers[numbers.length -1]);
console.log(numbers[numbers.length-1]);

// Nadpisywanie elementu tablicy
   
    // aby nadpisać elementy tablicy postępujemy tak samo jak w przypadku zmiennych, z tą różnicą, że tutaj odwołujemy się do konkretnego elementu tej tablicy
numbers[0] = 5;
numbers;
    // jak widać pomimo słowa kluczowego 'const' dalej byliśmy w stanie zmienić wartość elementu tej tablicy i zamiast 1 w oryginalnej tablicy - mamy 5. Jest to coś na co musimy uważać, bo jak wida słówko 'const' nie zawsze zapewnia nas o tym, że wartość jaką przechowuje nie ulegnie zmianie. Możemy zmieniać poszczególne elementy tablicy, ale ta zmienna zawsze musi być tablicą ;)



// Łączenie dwóch tablic
const names1 = ['Sam', ' Dean', ' Castel'];
const names2 = ['Jessica', 'Lisa'];
const family = names1 + names2;
family;
    // jak widać rozwiązanie wydaje się w porządku, ale nie do końca takie jest - skleja nam imiona z dwóch tablic

    const family2 = names1 + ", " + names2;
    family2;
    // to też nie do końca ok ;)

// żeby to dobrze działało możemy użyć metody CONCAT
const trueFamily = names1.concat(names2);
trueFamily;

// drugi sposób to skorzystanie z operatora SPREAD
const superFamily = [...names1, ...names2];
superFamily;



// tablice WIELOWYMIAROWE
    // to takie, które zawierają wewnątrz siebie inne tablice i do elementów tych zagnieżdżonych tablic odwołujemy się dodając kolejno nawiasy kwadratowe oraz indeks konkretnego elementu. 
const tictactoe = [
    ['', 'x', ''],
    ['', '', ''],
    ['', '', ''],
];
tictactoe[1][1] = 'o'; // odwołujemy się do elementu o indeksie 1 tej dużej tablicy - czyli element drugi, a w tym elemecie odwołujemy się do indeksu 1 - czyli element drugi
tictactoe;

    // i 3 element w tablicy pierwszej to - tablica o indeksie 0 i w tej tablicy element o indeksie 2
tictactoe[0][2] = 'x';
tictactoe;

    // Zagnieżdżeń może być więcej, ale wtedy praca jest utrudniona i lepiej tutaj sprawdzają się obiekty