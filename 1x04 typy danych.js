// Typy danych

// Typ to rodzaj lub inaczej grupa podobnych danych, na których możemy wykonywać różne operacje.

// w JS wyróżniamy 6 typów prostych oraz obiekty (SNOBUN):
// - String
// - Number
// - Object
// - Boolean
// - undefined
// - null

// Typowanie statyczne i dynamiczne:

// Istnieją dwa rodzaje typowania. Statyczne wymaga od nas określenia typu zmiennej a dynamiczne nie.

// Typowanie statyczne: int x = 1; (typ zmiennej określany na poziomie deklaracji zmiennej - int, czyli integer, czyli liczba całkowita) - określona zmienna może przechowywać informacje tylko tego typu. Jeżeli chcielibyśmy przypisać do zmiennej ciąg znaków to program nie uruchomił by się, ponieważ kompilator zwróciłby błąd.

// Typowanie dynamiczne: const x = 1 (typ zmiennej określany na podstawie wartości tej zmiennej, tutaj zmienna jest typu number, ponieważ przypisaliśmy do niej wartość 1)

// JavaScript jest dynamicznie typowany - typ zmiennej określa na podstawie wartości tej zmiennej.

// JavaScript charakteryzuje też słabe typowanie - oznacza to, że zmienna może zmienić swój typ w trakcie wykonywania programu. Wystarczy, że przypiszemy do niej wartość innego typu. Czyli jeżeli w przypadku tej zmiennej const x = 1 zmienimy jej wartość na ciąg znaków, jej typ zmieni się z 'number' na 'string'.


// string

    const text = 'Przeprogramowani';
    typeof text;
    console.log(typeof text);

// Numbers

    const number = 1;
    typeof number;
    console.log(typeof number);
    typeof 0 / 0 ;
    console.log(typeof 0 / 0);
        // wartość nie jest liczbą 'Not a Number' 
    // nie możemy powiedzieć, że mamy do czynienia z liczbą ponieważ nie jest to liczba (dzielenie przez 0)

    console.log(typeof Infinity);
    // w JS nieskończoność jest liczbą

        
// Boolean - wartości logiczne true/false

    const checked = true;
    typeof checked;
    console.log(typeof checked);
    
// Undefined - zmienne, które nie posiadają wartości, inaczej mówiąc zmienne bezwartościowe. Najczęściej tego typu wartość przyjmują zmienne, które deklarujemy i do których nie przypisujemy początkowej wartości. Zwróć uwagę, że nie można użyć tutaj słowa kluczowego 'const', bo wtedy wartość tej zmiennej nie mogła by zostać zmieniona, ale wcale nie oznacza to, że zmienne zadeklarowane za pomocą 'const' nie mogą posiadać wartości 'undefined'. Jest to możliwe np. przypisując do takiej zmiennej właściwość nieistniejącego obiektu i otrzymamy 'undefined':

    const objEmpty ={};
    const variable = objEmpty.a;
    console.log(objEmpty.a)


    let notDefined;
    typeof notDefined;
    console.log(typeof notDefined);
     // domyślna wartośc zmiennej jeśli nie zadeklarujemy wartości

// Null - wartość, która oznacza 'nic'. Czyli inaczej mówiąc 'nullValue' posiada wartość, która mówi, że nie posiada wartości. Jeśli chcemy jakiejś zmiennej przypisać brak wartości to możemy przypisać do niej 'null', ale co ciekawe typem takiej zmiennej jest 'object'. Jest to totalnie nieintuicyjne, ale wynika z konieczności zachowania wstecznej kompatybilności ze starszymi wersjami JavaScriptu i po prostu tak jest - trzeba być ostrożnym, bo przy sprawdzaniu 'null' dostaniemy, że jest typem 'object'

     const nullValue = null;
     typeof nullValue;
     console.log(nullValue);
     console.log(typeof nullValue);
        // jeśli zmienna ma wartość 'null' to przy sprawdzaniu
        // typu dostaniemy 'object' - trzeba być ostrożnym
        // przy korzystaniu z 'typeof' ;)


// Symbols
// Symbole to unikatowe wartości i jednocześnie ostatni prosty typ w JavaScripcie
    const symbol = Symbol('sym');
    typeof symbol;
    console.log(typeof symbol);


// Objects

    const obj = {
        foo: 1,
        bar: 'baz'
    };
    console.log(typeof obj);

    // obiektami nazywamy zestaw właściwości składających się z klucza oraz wartości. Poszczególne właściwości obiektu zamknięte są w klamrach '{}' natomiast klucz oddzielamy od wartości dwukropkiem ':' . Z kolei poszczególne właściwości, poza ostatnią, oddzielone są od siebie przecinkiem ',' (za wyjątkiem ostatniej - tam nie ma przecinka) i zamykamy klamrą ;)

// Konswersja typów / Data type conversion

// Konwersja - czyli kiedy mamy zmienną typu 'number' i przypiszemy do niej nową wartość, np "text", to jej typ zmieni się na 'string'. I to jest właśnie dynamiczne i słabe typowanie, które charakteryzuje JavaScript.

let numberOrString = 10;
console.log(typeof numberOrString);
numberOrString = 'Text';
console.log(typeof numberOrString);

    // po dodaniu stringa do liczby typ wartości zmienia się
    // w string - to jest właśnie dynamiczne i słabe typowanie,
    // które charakteryzuje JavaScript

// Tekst jako liczba / Converting string to numbers
// Sama kowersja typów może zostać przeprowadzona również z pomocą dodatkowych metod. Np. liczba 10 zapisana w cudzysłowie "10", czyli jest to 'string'.
let counter = '10';
console.log(typeof counter);
// natomiast jeśli chcemy upewnić się, że będzie to liczba, korzystamy z metody 'parseInt' do tego, aby upewnić się, że otrzymamy typ 'number'.
counter = parseInt(counter);
console.log(typeof counter);
console.log(counter);

    
    // tym sposobem mamy pewność, że otrzymana wartość będzie liczbą

