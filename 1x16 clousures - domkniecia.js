// clousures - domknięcia

// Czym jest zakres??
// Zapisywanie i odczytywanie zmiennych, obiektów i funkcji odbywa się w oparciu o zestaw zasad, który nazwywamy zakresem.

// Czym jest zakres LEKSYKALNY??
// Zakres leksykalny uwzględnia dostęp do zmiennych na podstawie tego gdzie zostały ZDEFINIOWANE funkcje, a nie na podstawie tego, gdzie zostały wywołane.

// w innych językach występuje jeszcze zakres dynamiczny - czyli zakres do zmiennych tam gdzie zostały wywołane.

// Czym jest domknięcie??
// Domknięcie występuje wtedy, gdy funkcja zapamiętuje i następnie wykorzystuje swój leksykalny zakres, nawet wtedy, gdy jest wywoływana poza nim. Inaczej mówiąc domknięcie to połączenie samej funkcji oraz części jej otaczającego zakresu.


// Zacznijmy od zdefiniowania funkcji, wewnątz której znajdzie się zmienna, którą za chwilę zwrócimy. W momencie wykonania takiej funkcji otrzymujemy wartość 0, ponieważ jest to wartość, którą zwróciliśmy w linii 20 - return count.

function counter() {
    const count = 0;

    return count;
}
counter();
console.log(counter());

// To co jest teraz istotne to fakt, że po wykonaniu takiej funkcji zmienne, które były w jej zakresie, czyli zmienna 'count' zostają całkowicie usunięte i już więcej nie mamy do nich dostępu - jest to całkowicie normalne, bo tak odbywa się optymalizacja pamięci w JS:

// console.log(count); // count is not defined

// Teoretycznie jedyną opcją do tego, abyśmy mieli dostęp do zmiennej 'count' po zakończeniu wykonywania funkcji counter() było by przeniesienie tej zmiennej poza nią. Jednak w takiej sytuacji o wartości zmiennej 'count' niekoniecznie musi decydować funkcja counter(). No bo jeżeli chcielibyśmy ją modyfikować, musielibyśmy mieć tutaj let count = 0 i sama modyfikacja mogłaby się odbyć poza funkcją counter() - count++

{
    let count = 0
    count++;
    function counter() {
        return count;
    }
    counter();
    console.log(counter());
}
// Odpowiedzią na pytanie czy możemy sobie z tym jakoś poradzić jest właśnie domknięcie. Zobaczmy jak to działa:

function createCounter() { // zamknijmy ten cały kod w oddzielnej funkcji
    let count = 0; // ponownie definiujemy naszą zmienną
    // oraz funkcję, która będzie odpowiedzialna za liczenie:
    function counter() { // wewnątrz znajdzie się:
        count++; // logika odpowiedzialna za zwiększanie zmiennej count
        return `Result: ${count}`; // oraz wyświetlanie bieżącego wyniku
    }
    return counter; // taką funkcję tutaj po prostu zwrócimy
}

const increase = createCounter();

// zobaczmy co się teraz stanie - skoro zwracamy tutaj funkcję counter() to aby z niej skorzystać, to do zmiennej musimy przypisać wynik funkcji createCounter(), czyli inaczej mówiąc wywołujemy tą funkcję i wszystko co zostanie z niej zwrócone, zostanie przypisane do zmiennej 'increase'. A to co zwracamy z tej funkcji to właśnie inna funkcja, czyli counter(). Brzmi to trochę skomplikowanie, ale jeszcze raz:
//  - wywołujemy createCounter()
//  - która zwraca counter()
//  - i dzięki temu zapisujemy ją w zmiennej 'increase'
// Więc w tej sytuacji skoro pod zmienną 'increase' znajduje się funkcja (counter() ) to mogę ją wywołać.

console.log(increase());
// Otrzymujemy tutaj wynik działania tej wewnętrznej funkcji oraz jednocześnie odczytujemy wartość zmiennej zapisanej w linii 43: let count = 0;
// No ale to trochę kłóci się z tym, co było powiedziane wcześniej - jeżeli jakaś funkcja zostaje zakończona, czyli np. w momencie gdy zwracamy z niej jakąś wartość - to wszystkie informacje z jej bieżącego zakresu zostają usnunięte w celu optymalizacji pamięci. W tej konkretnej sytuacji tak się nie stało, ponieważ został zastosowany mechanizm domknięcia, czyli funkcja zapamiętuje swój leksykalny zakres.

// W naszym przykładzie jest funkcja counter(). Teraz nawet gdybym wykonał tę funkcję jeszcze kilka razy - otrzymuję nadal prawidłowy wynik, ponieważ informacja o zmiennej 'count' przechowywana jest właśnie w domknięciu.

console.log(increase());
console.log(increase());
console.log(increase());

// Z tego przykładu jasno wynika, że aby utworzyć domknięcie musimy zdefiniować funkcję oraz inną funkcję wewnątrz niej, a następnie zwrócić ją z wykorzystaniem słowa kluczowego RETURN lub alternatywnie przekazać jako parametr innej funkcji. Dzięki temu przekazana zostanie nie tylko ta funkcja, ale również informacje z jej otaczającego zakresu, które są niezbędne do tego, aby ta funkcja mogła zostać wykonana.
// W tym przypadku ta funkcja nie wykonała by się bez zmiennej 'count', więc informacja o tej zmiennej również trafia do domknięcia.

// W narzędziu "debugger" możesz podglądnąć, że tak faktycznie jest. Umieść breakpoint w celu zatrzymania skryptu - w linii 60: console.log(increase());
// Dzięki temu mamy dostęp do pewnych interesujących informacji. Mamy tutaj wartość zmiennej 'increase' pod którą znajduje się obecnie funkcja. Funkcja ta posiada w tej chwili informacje o swoim zakresie, a konkretnie zakresach. W tym konkretnym momencie ma ona dostęp do globalnego zakresu oraz do closure, czyli domknięcia - wewnątrz tego domknięcia przechowywana jest informacja o zmiennej 'count', która jest niezbędna do tego, aby funkcja mogła zostać wykonana.