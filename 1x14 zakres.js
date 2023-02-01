// Czym jest zakres?

// Dostęp do zmiennych, obiektów i funkcji

// Najprościej mówiąc, zakresem nazywamy sposób w jaki JavaScript odnajduje informacje. Zapisywanie i odczytywanie zmiennych, obiektów i funkcji odbywa się w oparciu o zestaw zasad, czyli zakres.


// Dlaczego te informacje nie są dostępne wszędzie?

// Z wielu istotnych powodów: bezpieczeństwa, wydajności, konfliktów nazewnictwa czy rozwiązywania problemów.


//Rodzaje zakresów w JavaScript

// Istnieją trzy rodzaje zakresów w JS: 
//    - globalny (jest tylko jeden), 
//    - funkcyjny (tworzony przez funkcję)
//    - blokowy (tworzony przez bloki, np pętla IF)


// global scope - już w momencie pisania kodu w JS jesteśmy w globalnym zakresie. Do informacji zapisanych w tym zakresie mamy dostęp z dowolnego miejsca w kodzie. Dlatego też powinniśmy dbać o to, aby znalazły się tam tylko te informacje, które naprawdę muszą tam być.

const condition = true;


// functional scope 

function some() {
    // functional scope / local scope -- tworzony w momencie, gdy tworzymy jakąś funkcję i do tego zakresu należą informacje, które zapiszemy pomiędzy klamrami {} oraz parametry przekazane od funkcji (params)
    console.log(condition);
    // zmienna condition jest dostępna i będzie widoczna, jeśli tylko wywołamy tą funkcję : some(); -- wartość zmiennej została odczytana
    // JS nie znalazł zmiennej w zakresie funkcji, więc przechodzi do wyższego zakresu - w tym przypadku globalny, znajduje tam zmienną i ją wyświetla ;)
    const functional = `In functional scope`;
    // jeśli umieścimy zmienną w zakresie funkcyjnym to będzie ona dostępna wyłącznie w zakresie funkcji i możemy ją teraz odczytać:
    console.log(functional);
}
some(); // -- wartość zmiennej została odczytana

// zmienna z zakresu funkcyjnego nie będzie dostępna poza nim - np w globalnym zakresie:

// console.log(functional); // functional is not defined

// zmienna nie jest dostępna bo JS szuka w obecnym zakresie i jeśli nie znajdzie to przechodzi do wyższego poziomu, aż znajdzie zmienną lub nie będzie zdefiniowana

{// block scope - powstaje między klamrami {} bądź instrukcję warunkową:

if(condition) {
    // block scope / local scope
    console.log(condition);
}

// czy też pętle FOR:

for (let i = 0; i < 10; i++ ) {
    // block scope / local scope
}


}


// 

function second() {
    // functional scope / local scope
    const secondValue = `In functional scope`;
    console.log(secondValue);
    // W momencie gdy próbujemy odczytać wartość secondValue w zakresie funkcji to JS przeszukuje ten zakres (funkcyjny) i ją faktycznie znajduje. Skoro ją znajduje to zwraca nam jej wartość.
    console.log(condition);
    // w sytuacji, w której odczytujemy zmienną 'condition' która znajduje się w globalnym zakresie - dalej odczytaliśmy jej wartość, ponieważ JavaScript szukał ją w następujący sposób: (1) najpierw odwołał się do funkcyjnego zakresu i tam nie znalazł tej zmiennej, więc poszedł krok dalej (2) w tym przypadku do zakresu globalnego i tam ta zmienna została znaleziona. Skoro została znaleziona to mogła zostać odczytana jej wartość

    function other() {
        // functional inner scope / local scope #2
        const inner = `In inner functional scope`;
        console.log(inner);
        // w tym przypadku zmienna 'inner' została odczytana, bo znajduje się w zakresie funkcyjnym other (zakres lokalny #2), podobnie możemy odczytać zmienną 'secondValue' oraz zmienną 'conditon'
        console.log(condition);
        console.log(secondValue);
        // w przypadku zmiennej 'secondValue' nie znajdujemy jej w tym zakresie, natomiast JS wychodzi wyżej do zakresu funkcji 'second()' i wtedy dopiero znajduje tą zmienną i też może ją odczytać.

        // w przypadku zmiennej 'condition' nie znajdujemy tutaj i wyżej też nie, ale w końcu znajduje się w zakresie globalnym

        // W poszukiwaniu zmiennych przechodzimy od wewnętrznych do zewnętrznych zakresów. Czyli zakres funkcji other() znajduje się wewnątrz funkcji second(), a zakres funkcji second() znajduje się w zakresie globalnym. 

        // Raz jeszcze: W poszukiwaniu zmiennych przechodzimy od bieżącego zakresu w górę do zakresów zewnętrznych, aż dojedziemy do global scope. W sytuacji, gdy w tym ostatnim zakresie zmienna nie zostanie znaleziona - mamy dopiero informację, że ta zmienna nie istnieje
    }
    other();

    function sibling() {
        const next = `In inner functional scope`;
        console.log(next);
        console.log(secondValue);
        //console.log(inner); // inner is not defined
        // zmienna 'inner' nie została znaleziona w lokalnym zakresie i JS przechodzi wyżej (do zewnętrznego zakresu), ale tam też jej nie ma. Zmienna znajduje się w zewnętrzym zakresie innej funkcji. Natomiast JS nie przeszukuje wszystkich zakresów, lecz przechodzi wyżej, czyli do global scope i faktycznie tej zmiennej tam nie ma. Więc ostatecznie mamy informację, że zminna nie została zdefiniowana.
    }
    sibling();
}
second();
// console.log(secondValue); // secondValve is not defined
// W momencie gdy próbujemy odczytać wartość secondValue w zakresie funkcji to JS przeszukuje ten zakres i ją faktycznie znajduje. Skoro ją znajduje to zwraca nam jej wartość


// Różnica przy deklarowaniu zmiennych za pomocą let, var i const

// zmienne zadeklarowane słowami kluczowymi let oraz const posiadają zakres blokowy. Oznacza to, że jeśli zadeklaruje zmienną z pomocą var to ta zmienna nie posiada zakresu blokowego, więc będę w stanie odczytać jej wartość również poza blokiem. Inaczej sytuacja wygląda jeśli deklarujemy z pomocą let lub const. Jak widać zmienna other nie jest już dostępna poza blokiem, a ona sama posiada zakres blokowy.

{
    var foo = 'sth';
    // let bar = 'other';
    {
        let bar = 'other';
        console.log(bar);
        console.log(foo);
    }
    {
        let baz = 'baz';
        console.log(baz);
        // console.log(bar); // bar is not defined

    }

}
console.log(foo);
// console.log(bar); // bar is not defined

// i właśnie sama kwestia zakresu blokowego jest jednym z głównych powodów dlaczego nie warto korzystać w tej chwili ze zmiennych deklarowanych z pomocą var. Po prostu uzyskujemy tutaj większą kontrolę nad tym, gdzie i jakie informacje są dostępne a gdzie nie.
// Jeśli chodzi o odnajdywanie zmiennych to zakresy blokowe działają dokładnie tak samo jak funkcyjne. Jeżeli zmienną 'bar' umieścimy w zakresie wewnętrznym to będziemy mogli ją odczytać w tym zakresie oraz odczytać zmienną 'foo' z zakresu wyższego. Natomiast w sytuacji, gdy będziemy mieć drugi zakres, w którym będzie znajdować się inna zmienna 'baz' - będziemy w stanie odczytać zmienną 'foo' ponieważ wychodzimy wyżej i odczytujemy ją w zewnętrznym zakresie, natomiast zmienna 'bar' nie będzie dla nas dostępna. Ponieważ przeszukujemy lokalny zakres (linia 116-118), wychodzimy do zewnętrznego, a potem do globalnego i zakres wewnętrzny zmiennej 'bar' zostaje pominięty.

// JS przeszukuje bieżący zakres, wychodzi do zewnętrznego i przechodzi do zewnętrznych tak długo, aż dojdzie do zakresu globalnego i wtedy gdy nie znajdzie zmiennej - to uznaje, że jej nie ma.