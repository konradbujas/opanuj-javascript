


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

// KOLEJNY POZIOM: W związku z tym, że porównujemy tu pary liczb to możemy uprościć cały zapis wykonując ODEJMOWANIE. Możemy odjąc poprzednią wartość od następnej i na tym zakończyć działanie naszej funkcji - sortowanie działa poprawnie, a jeśli chcielbyśmy odwrócić kolejność to wystarczy odwrócić kolejność odejmowania:

const arrLevel = [5, 7, 12, 8, 3, 31];
arrLevel.sort(sortLevel);
function sortLevel (prev, next) {
    console.log(prev, next)
    return next - prev;
}
console.log(arrLevel.sort(sortLevel));

// możemy nasz callback przekazać bezpośrednio do funkcji, czyli usunąć jego nazwę i mamy wtedy funkcję anonimową, którą przekazujemy

arr.sort(sortAsc);
function sortAsc(prev, next) {
    return next- prev;
}
console.log(arr.sort(sortAsc));

// w zapisie funkcji strzałkowej (jeśli jest to funkcja jednoliniowa to możemy usunąć słówko kluczowe 'return' i wtedy musimy usunąć nawiasy klamrowe):
// console.log(arr.sort((prev, next) => prev - next));

// funkcja strzałkowa - skrócony zapis

arr2 = [5, 1, 6, 4, 3, 2, 77];
arr2.sort((prev, next) => next - prev);

console.log(arr2.sort((prev, next) => next - prev));


//*********  *//*  ***************

// forEach - iteruj po tablicy
const arr3 = [5, 18, 10, 3, 15, 21]
arr3.forEach(el => {
    return (el + 5);
});
console.log(arr3);
// ta metoda pozwala nam iterować po każdym kolejnym elemencie tablicy. Określenie iterować jest wykorzystywane np w pętlach aby określić proces powtórzenia. W tym przypadku będziemy powtarzać wykonanie tego callbacka dla każdego kolejnego elementu tablicy

// zwykle wykorzystujemy tą metodę, aby móc wykonać jakąś operację z pomocą każdego elementu tablicy. Metoda ForEach sama w sobie w żaden sposób nie modyfikuje naszej tablicy


// *******************
// map - iteruj i zwróć wynik dla każdego elementu tablicy
console.log(arr);
arr.map(el => {
    return el + 1;
});
console.log(arr.map(el => {
    return el + 1;
}));
// Wartość zwrócona przez callback zastąpi aktualny element naszej tablicy,

// dochodzi tutaj do mapowanie tablicy 

// metoda map nie modyfikuje oryginalnej tablicy tylko zwraca nową - oznacza to, że wynik jej działania musimy dopisać do zmiennej i do tej zmiennej trafi nowa, zmodyfikowana przez nas tablica:
arr;
const mapped = arr.map(el => {
    return el + 5;
});
console.log(mapped);
console.log(arr);
// jeśli podejrzymy oryginalną tablicę to zobaczymy, że jej zawartość nie została w żaden sposób zmieniona (mapowanie naszej tablicy)

// ******************
// metoda REDUCE - obliczenie pojedyńczej wartości dla wszystkich elementów tablicy - wykonując metodę reduce na tablicy otrzymujemy jedną wartość, która w tym przypadku trafi do zmiennej 'sum'. Metoda ta analogicznie do poprzednich przyjmuje jako argument callback, który z kolei przyjmuje następujące elementy:
    // total - zawiera bieżący wynik naszej metody
    // item - wskazuje na bieżący element naszej tablicy
    // index - wskazuje na jego index
    // array - nasza tablica, w niektórych przypadkach obecność tego argumentu jest pomocna

const sum = arr.reduce((total, item, index, array) => {
    return total += item;
}, 0);
    // jako drugi argument podajemy początkową wartość dla zmienniej 'total' - w naszym przypadku 0 (zero)
sum;
console.log(sum);
    // jest to suma wartości elementów przechowywanej w naszej tablicy

    // możemy tez ustawić mnożenie *= , z tym, że drugim argumentem metody reduce (wartością początkową) musi być 1 (bo nie mnożymy przez zero - przecież ;D ) - otrzymamy wtedy iloczyn elementów naszej tablicy

const ratio = arr.reduce((total, item, index, array) => {
    return total *= item;
})
ratio;

    // drugim argumentem może być też pusta tablica - dzięki temu możemy otrzymać nową tablicę zawierającą wszystkie elementy dotychczasowej tablicy, która zostanie zwrócona (total) oraz bieżący element, który możemy zmodyfikować np. mnożąc jego wartość razy 2. Korzystamy tu z operatora spread
    
arr;
const newArr = arr.reduce((total, item, index, array) => {
    return [...total, item * 2];
}, []);
newArr;

    // metoda REDUCE nie musi operować na wartościach liczbowych, może też modyfikować zawartość tablicy lub obiektów


// **********
// metoda FILTER - filtruje elementy tablicy na podstawie warunku. Metoda ta oczekuje od przekazanego callbacku, aby zwrócił prawdę lub fałsz - w zależności od tego czy element ma zostać uwzględniony w nowej tablicy czy nie - no bo metoda FILTER podobnie jak 'map' generuje nam nową tablicę, którą możemy zapisać w zmiennej:

const filtered = arr.filter(el => {
    return el < 4;
});
console.log(filtered);


//**********
// metoda SPLIT & JOIN
// split - zamienia ciąg znaków na tablicę 
const user = 'Adam Gospodarczyk';
const userDetails = user.split(' ');
 // podział ciągu znaków w miejscu spacji ' ' tzn ciąg znaków będzie ucinany w tym miejscu i kolejne elementy będą trafiały do tablicy - w efekcie otrzymamy tablicę zawierającą imię i nazwisko:
console.log(userDetails);
// gdyby spacji było więcej to kolejne elementy dodawane były by do naszej tablicy - można użyć tej metody np w polu formularza proszącym od podanie imienia i nazwiska

// możemy zamienić odwrotnie: tablicę na ciąg znaków łącząc kolejne elementy wskazanym przez nas znakiem. Np imię i nazwisko łączymy myślnikiem i oraz w przypadku wyniku zmieniami litery na małe ;) 
const joined = userDetails.join('-').toLowerCase();
console.log(joined);
console.log(typeof(joined));
    // join - zmiana tablicy na ciąg znaków (string)

    // split - zmiana ciągu znaków na tablicę:
const usersplit = user.split();
usersplit;

//************** */
// searching - proste przeszukiwanie elementów tablicy
// do zaawansowanych przeszukiwań istnieją gotowe biblioteki, które używają tzw. fazi-search (phase-search), czyli możliwość przeszukiwania danych nawet jeśli podamy tylko mały fragment
const toSearch = ['Adam', 'Przemek', 'Marcin', 'Adam'];
toSearch.indexOf('Marcin');
console.log(toSearch.indexOf('Marcin'));
    // indexOf zwraca nam indeks szukanego elementu w tablicy

toSearch.includes('Adam');
console.log(toSearch.includes('Adam'));
    // zwraca nam prawdę lub fałsz, gdy szukany element znajduje się w tablicy

toSearch.find(el => el === 'Adam');
console.log(toSearch.find(el => el === 'Adam'));
    // find wyszukuje wartość elementu, który spełnia warunek
    // find przyjmuje callback, którego rolą jest zwrócenie prawdy lub fałszu

const arr4 = [4, 6, 12, 17, 3, 1, 2];
arr4.find(el => el < 4);
console.log(arr4.find(el => el < 4));
    // metoda find wyszukuje element, który spełnia podany warunek, z tym, że poprzestaje na pierwszym znalezionym wyniku, który spełnia ten warunek

toSearch.findIndex(el => el === 'Adam');
console.log(toSearch.findIndex(el => el === 'Adam'))
    // findIndex - zwraca indeks pierwszego elementu, który spełnia warunek


//*********** */
// isArray() - określa czy dana wartość jest tablicą. Wymagana ze względu na to, że jeśli wykorzystamy operator typeof żeby sprawdzić typ przekazywanej wartości to w przypadku tablic otrzymamy 'object'. Wynika to z faktu, że w przypadku JavaScriptu tablice są obiektami. Ale często chcemy wiedzieć, czy obiekt rzeczywiście jest tablicą a nie jakimś innym rodzajem obiektu

const myArray = [];
console.log(typeof myArray);

console.log(Array.isArray(myArray));
    // odwołujemy się do klasy Array oraz wykonać na niej metodę isArray() -> otrzymaliśmy true - czyli myArray jest rzeczywiście tablicą ;)