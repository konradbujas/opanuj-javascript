// Czym jest hoisting?? 

// Hoisting (podnoszenie) to mechanizm polegający na tym, że deklarowana zmienna jest "wynoszona" na górę zakresu do którego została przypisana.

// Deklaracja, inicjalizacja i przypisanie

// Tworzenie zmiennej w JavaScripcie polega na:

//  - deklaracji, czyli zarejestrowaniu zmienniej w jej zakresie (scope)
//  - inicjalizacji, czyli zarezerwowaniu miejsca w pamięci
        // nie za każdym razem od razu dochodzi do inicjalizacji
//  - przypisaniu wartości do zmiennej (ostatecznie nieco później)

let newVar;
// w momencie, gdy tworzymy zmienną dochodzi do jej deklaracji i inicjalizacji. Ze względu na to, że w tym momencie nie przypisujemy do niej żadnej wartości - zostanie automatycznie przypisana do niej wartość 'undefined' 
console.log(newVar);
// taka zmienna posiada również typ 'undefined'
console.log(typeof newVar);

// ale w sytuacji, gdybyśmy próbowali odczytać jakąś zmienną, która nie została zadeklarowana otrzymujemy błąd, który zatrzymuje działanie skryptu - informuje nas on, że próbujemy odczytać zmienną, która nie istnieje
// console.log(latest); //latest is not deined

// natomiast spróbujemy odczytać zmienną, która w tej chwili nie istnieje, ale już za chwilę ją utworzymy słowem kluczowym 'var'.
console.log(hoisted);
// przykład z lini 21 sugeruje nam, że w tej chwili otrzymamy błąd informujący nas o tym, że zmienna nie istnieje. No bo najpierw próbujemy ją odczytać, a dopiero potem ją utworzyć. Natomaist faktycznie otrzymamy wartość 'undefined'
var hoisted = 'go up!';
// także skoro zmienna już istnieje to dlaczego ma wartość 'undefined' a nie taką jak zdefiniowaliśmy: 'go up!'
console.log(hoisted);
// po ponownym odczytaniu zmiennej uzyskujemy właściwą wartość - mechanizm, który tu występuje to tzw. HOISTING, czyli podnoszenie lub wynoszenie zmiennych lub funkcji. To wszystko ma związek z tym, że podczas tworzenia zmiennych na początku dochodzi do deklaracji i inicjalizacji, a dopiero potem dochodzi do przypisania wartości.

// czyli ten kod dla JS wygląda w następujący sposób:
var hoisting;
console.log(hoisting);
hoisting = 'hello !';
console.log(hoisting);
// pomimo tego, że zmienną tworzymy w linii 34 to zostaje ona podnoszona na górę bieżącego zakresu i inicjalizowana wartością 'undefined' - linia 32. I teraz w momencie, gdy ją odczytujemy po raz 1 to mamy 'undefined' natomiast po raz drugi w linii 35 odczytujemy odpowiednią wartość


// w przypadku wykorzystania słowa kluczowego 'let' zamiast 'var' efekt końcowy jest zasadniczo różny:
{
    // let hoisting;
    // console.log(hoisting); // Cannot access 'hoisting' before initialization
    let hoisting = 'hello !';
    console.log(hoisting);
}
// jak widać skrypt się nie wykonał i otrzymaliśmy błąd "Cannot access 'hoisting' before initialization" - próbujemy odczytać zmienną przed inicjalizacją. Zmienne 'let' oraz 'const' co prawda ulegają podnoszeniu, ale ich inicjalizacja zachodzi trochę później. Jest to wyjątek z początku - opóźniona inicjalizacja - przez to nie jesteśmy w stanie ich odczytać zanim te zmienne faktycznie zostaną utworzone. Potocznie mówi się, że w takiej sytuacji zmienne trafiają do tzw. Temporar Dead Zone, chociaż nie jest to oficjalnie powiedziane i niektórzy się sprzeczają, że zmienne deklarowane let i const wcale nie ulegają podnoszeniu - nie mnie to oceniać. Jedyne co musisz wiedzieć to fakt, że nie możesz odczytywać wartości zmiennych deklarowanych przy pomocy let i const zanim te zmienne faktycznie zostaną utworzone.

hoist(); // możemy też wywołać funkcję wcześniej i wszystko działa ok, bo deklaracje funkcji ulegają podnoszeniu (function declaration)

function hoist() {
    console.log(hoisted);
    var hoisted = 'go a head !';
    console.log(hoisted);
}
hoist(); // możemy też wywołać funkcję wcześniej

// podnoszeniu ulegają nie tylko zmienne, ale też funkcje i klasy.
// funkcje możemy deklarować za pomocą function expression - czyli funkcja jest przypisana do zmiennej:

//foo(); // Cannot access 'foo' before initialization
const foo =  function() {
    const hoisted = 'function expression value';
    console.log(hoisted);
}
foo();
// i wtedy gdy spróbujemy ją wywołać wcześniej - u góry - to nie będzie to możliwe - błąd :"Cannot access 'foo' before initialization"

// podstawową różnicą pomiędzy tymi dwoma sposobami tworzenia funkcji jest to, że pierwszy z nich ulega podnoszeniu (function declaration - tak), a drugi nie (function expression - nie)

// mamy funkcję przypisaną do zmiennej i wtedy podnoszeniu ulega zmienna, a nie cała funkcja

// Zainteresować może jeszcze fakt, że : przypisanie zmiennej ma pierwszeństwo przed deklaracją funkcji. Czyli jeżeli zrobimy tak:

var baq = 10;

function baq() {
    const hoisted = 'baq baq';
    console.log(hoisted);
}
// baq(); // baq is not a function
console.log(typeof baq);
// mamy tutaj przypisanie zmiennej 'baq' oraz deklaracje funkcji o tej samej nazwie. W tej sytuacji przypisanie zmiennej ma pierwszeństwo i w typeof 'baq' mamy liczbę i rzeczywiście tak jest.
// Inaczej było by w sytuacji, gdybyśmy zadeklarowali tylko zmienną np 'kon' (var 'kon');

var kon;

function kon() {
    const hoisted = 'kon kon';
    console.log(hoisted);
}
kon();
console.log(typeof kon);
// mamy tutaj tylko deklarację zmiennej 'kon' oraz deklarację funkcji o tej samej nazwie - w tym przypadku deklaracja funkcji ma pierwszeństwo przed deklaracją zmiennej (a nie przypisaniem - dla jasności ;)) )

// Ten problem z góry - która deklaracja/przypisanie ma pierwszeństwo można całkowicie wyeliminować używając słów kluczowych LET oraz CONST - od razu wysypie nam się błąd (pluginu quokka.js), że identyfikator 'foo' został już użyty przy deklarowaniu zmiennej. Czyli tego całego zamieszania można całkowicie uniknąć przy stosowaniu let oraz const i jest to kolejny przykład dlaczego należy tak robić


// klasy hoisting
// klasy podlegają podnoszeniu, natomiast działa to dokładnie tak, jak  w przypadku zmiennych deklarowanych z pomocą const oraz let. Czyli jeżeli najpierw mamy deklarację klasy, a dopiero potem jej używamy to wszystko jest w porządku. Natomiast w momencie użycia klasy przed deklaracją - otrzymamy błąd (Person is not defined):


// const member = new Person('Adam'); // Person is not defined
class Person {
    constructor(name) {
        this.name = name;
    }
}
const member = new Person('Adam');
console.log(member);

// tak samo sytuacja wyglądała by, gdybyśmy użyli składni class expression:
// const Person = class {
//     constructor(name) {
//         this.name = name;
//     }
// }
// błąd taki sam pojawił by się ponieważ klasa nie jest jeszcze dostępna 

// oczywiście gdyby zamiast const użyć var to oczywiście mieli byśmy błąd, ale zmienna Person miała by wartość 'undefined' (zakomentować Person wyżej ;p )

// const memberVar = new Person('Adam');

console.log(Person);

var Person = class {
        constructor(name) {
            this.name = name;
        }
    }

// Hoisting polega na wynoszeniu zmiennych na górę ich zakresu. W przypadku zmiennych deklarowanych let i const lub klasami dostęp do nich mamy dopiero wtedy, gdy faktycznie dochodzi do ich utworzenia.
// Wniosek: Zanim będziesz korzystał z jakiejś zmiennej lub klasy - najpierw upewnij się, że ona istnieje. Lepiej korzystać ze słów const lub let zamiast korzystać z var. Dzięki temu już po raz kolejny będziemy unikać niepotrzebnego komplikowania naszego kodu oraz sytuacji które nie są oczywiste
