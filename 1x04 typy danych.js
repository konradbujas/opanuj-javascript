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
// Typowanie statyczne: int x = 1; (typ zmiennej określany na poziomie deklaracji zmiennej)
// Typowanie dynamiczne: const x = 1 (typ zmiennej określany na podstawie wartości)

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
    console.log(typeof Infinity);
        
// Boolean - wartości logiczne true/false

    const checked = true;
    typeof checked;
    console.log(typeof checked);
    
// Undefined - zmienne, które nie posiadają wartości,
// zmienne bezwartościowe

    let notDefined;
    typeof notDefined;
    console.log(typeof notDefined);
     // domyślna wartośc zmiennej jeśli nie zadeklarujemy wartości

// Null - wartość, która oznacza 'nic'

     const nullValue = null;
     typeof nullValue;
     console.log(nullValue);
     console.log(typeof nullValue);
        // jeśli zmienna ma wartość 'null' to przy sprawdzaniu
        // typu dostaniemy 'object' - trzeba być ostrożnym
        // przy korzystaniu z 'typeof' ;)

// Objects

    const obj = {
        foo: 1,
        bar: 'baz'
    };
    console.log(typeof obj);

    // obiekty to zestaw właściwości składających się z 
    // klucza oraz wartości. Poszczególne właściwości obiektu
    // zamknięte są w klamrach '{}' natomiast klucz oddzielamy
    // od wartości dwukropkiem ':' a same właściwości oddzielone
    // są od siebie przecinkiem ',' za wyjątkiem ostatniej -
    // tam nie ma przecinka, zamykamy klamrą ;)

// Konswersja typów / Data type conversion
let numberOrString = 10;
console.log(typeof numberOrString);
numberOrString = 'Text';
console.log(typeof numberOrString);

    // po dodaniu stringa do liczby typ wartości zmienia się
    // w string - to jest właśnie dynamiczne i słabe typowanie,
    // które charakteryzuje JavaScript

// Tekst jako liczba / Converting string to numbers

let counter = '10';
console.log(typeof counter);
counter = parseInt(counter);
console.log(typeof counter);

    // tym sposobem mamy pewność, że otrzymana wartość będzie
    // liczbą

