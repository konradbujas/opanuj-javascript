

// Funkcje tablic - metody to funkcje, które wykonywane są na obiektach, a tablice są obiektami

const arr = [1, 2, 3, 4, 16, 5];

// REVERSE - odwrócenie tablicy
arr.reverse();
arr;
    // dochodzi tutaj do zmodyfikowania tablicy oryginalnej pomimo tego, że zadeklarowana jest jako 'const' (które nie pozwala nadpisywać wartości zmiennych) - czyli zawartość tablicy może się zmieniać, ale musi pozostać tablicą [taka sytuacja ma miejsce w przypadku typów złożonych jak tablice oraz obiekty]


// SORT - sortowanie elementów, ale domyślnie traktuje wartości jako tekst i wtedy np. 16 będzie przed 2, bo zostają porównane pierwsze znaki
arr.sort();
arr;
    // nie jest to najlepsza metoda sortowania, więc trzeba to zrobić w inny sposób:

// zdefiniujemy sobie nową funkcję, a jej wynik przekażemy do funkcji sort - nazywamy to 'callback' - funkcja, która jest przekazywana od innej funkcji jako argument po to, aby można ją było później wykonać - czyli funkcja sortAsc zostanie wykonana wewnątrz funkcji .sort()
arr.sort(sortAsc);

function sortAsc() {

}
    // funkcja .sort() przyjmuje dwa argumenty, czyli oznaczone tu a oraz b. Tak naprawdę to są wartości 'poprzednia' oraz 'następna'. Czyli ten callback wykona się dla każdej pary znajdującej się w  tablicy - a porównanie to będzie odbywało się OD KOŃCA.
function sortAsc(prev, next) {
    console.log(prev, next);
    if (prev > next) {
        return 1;
    }
    if (prev === next) {
        return 0;
    }
    if (next > prev) {
        return -1;
    }
}
console.log(arr.sort(sortAsc));


// Przykład 2 - sprawdzenie
const arrNext = [ 2, 4, 14, 7, 19, 5];

arrNext.sort(sortNext);
function sortNext(prev, next) {
    console.log(prev, next);
    if (prev > next) {
        return -1;
    }
    if (prev === next) {
        return 0;
    }
    if (next > prev) {
        return 1;
    }
}
console.log(arrNext.sort(sortNext));

// callback przekazywany do funkcji 'sort' musi wrócić albo 0 (zostawiamy bez zmian), albo wartość dodatnią + (zamieniamy je miejscami), albo wartość ujemną - (zostawiamy bez zmian) = w przypadku sortowania od najmniejszego do największego. W przypadku sortowania od największego do najmniejszego - kiedy wartośc dodatnia to zamieniamy miejscami. 

// KOLEJNY POZIOM: W związku z tym, że porównujemy tu pary liczb to możemy uprościć cały zapis wykonując odejmowanie. Możemy odjąc poprzednią wartość od następnej i na tym zakończyć działanie naszej funkcji - sortowanie działa poprawnie, a jeśli chcielbyśmy odwrócić kolejność to wystarczy odwrócić kolejność odejmowania:

const arrLevel = [5, 7, 12, 8, 3];
function sortAsc (prev, next) {
    return prev - next;
}

arrLevel.sort(sortAsc);
console.log(arrLevel.sort(sortAsc));
