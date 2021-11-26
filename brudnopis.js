a = 2;
b = 6;

const c = a + b //
console.log(c);

const d = a + c /*?*/

console.log(d);
let z = a + c;
z;

console.log("hey hola wow! ;)");
var name = "Adam";
console.log(name);
name;
var nameUndefined;
console.log(nameUndefined);
var name = 'Przemek';
name;
let name3 = "adamZ";
name3;
console.log(name3);

const user = 'konrad'; 
console.log(user);

// [1x3] zmienne

var name = "Adam";
console.log(name);
name = "Marcin";
console.log(name);
var name = "Przemek";
console.log(name);

// przy deklarowaniu zmiennej słowem kluczowym var istneje ryzyko jej nadpisania
// bądź zdeklarowania ponownie jak na powyższym przykładzie


const arr = [1, 2, 31, 14, 16, 5];

// REVERSE - odwrócenie tablicy
arr.reverse();
arr;
    // dochodzi tutaj do zmodyfikowania tablicy oryginalnej pomimo tego, że zadeklarowana jest jako 'const' (które nie pozwala nadpisywać wartości zmiennych) - czyli zawartość tablicy może się zmieniać, ale musi pozostać tablicą [taka sytuacja ma miejsce w przypadku typów złożonych jak tablice oraz obiekty]


// SORT - sortowanie elementów, ale domyślnie traktuje wartości jako tekst i wtedy np. 16 będzie przed 2, bo zostają porównane pierwsze znaki
arr.sort();
arr;
    // nie jest to najlepsza metoda sortowania, więc trzeba to zrobić w inny sposób:






// zdefiniujemy sobie nową funkcję, a jej wynik przekażemy do funkcji sort - nazywamy to 'callback' - funkcja, która jest przekazywana od innej funkcji jako argument po to, aby można ją było później wykonać - czyli funkcja sortAsc zostanie wykonana wewnątrz funkcji .sort()
arr.sort((prev, next) => next - prev);


console.log(arr.sort((prev, next) => next - prev));
// 31, 16, 14 , 5 , 2, 1

    // funkcja .sort() przyjmuje dwa argumenty, czyli oznaczone tu a oraz b. Tak naprawdę to są wartości 'poprzednia' oraz 'następna'. Czyli ten callback wykona się dla każdej pary znajdującej się w  tablicy - a porównanie to będzie odbywało się OD KOŃCA.
console.log(arr.sort((prev, next) => prev - next));


// next - prev
// prev - next


function compareWithLog (a, b) {
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    if (a > b) {
    return 1;
    } else if (a < b) {
    return -1;
    }
    
    return 0;
    }
    
    console.log(`Wynik sortowania: ${[31,3,5, 7, 22,14].sort(compareWithLog)}`);
    console.log(`Wynik sortowania: ${[4,3,3, 19,1].sort(compareWithLog)}`);
    console.log(`Wynik sortowania: ${[1, 2, 2, 3, 1, 0.5].sort(compareWithLog)}`);