// Klasy w JS to nie jest nowa struktura, lecz po prostu usprawnienie istniejącej składni:

const x = function() {};
const y = class {};
console.log(typeof x);
console.log(typeof y);
// funkcja jest funkcją, klasa jest funkcją ;)

// klasy definiujemy podobnie jak funkcje. Natomiast w tej sytuacji praca z konstruktorem, prototypem i tworzeniem obiektów w oparciu o taką klasę jest prostsza

// konstruktor zapisujemy jako oddzielną metodę (i to jest charakterystyczne również dla innych języków, np.   PHP). Wewnątrz takiego konstruktora przypisujemy poszczególne właściwości:

class Vehicle {
    constructor(name, color) {
        // właściwości:
        this.name = name;
        // właściwości dodatkowe:
        this.color = color;
        this.engineStatus = 'off';
    }
    // jeśli chcemy dodać metodę do prototypu to nie musimy odwoływać się bezpośrednio do niego. Natomiast zapisujemy ją po prostu poniżej:
    startEngine() {
        // analogicznie jak w poprzedniej lekcji uruchamiamy silnik;
        this.engineStatus = 'on';
        console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    }
}

// Teraz jeżeli będziemy chcieli stworzyć obiekt na podstawie tej klasy, to wszystko wygląda dokładnie tak samo
const car = new Vehicle('Mustang', 'red');
// możemy sprawdzić właściwości tego obiektu
console.log(car.name);
// oraz uruchomić metody dostępne w konstruktorze
car.startEngine();
console.log(car.engineStatus);
// jak wyżej - silnik został uruchomiony
// a jeśli dodatkowo to sprawdzimy
console.log(car);
// to tej metody również nie ma w tym obiekcie, ponieważ znajduje się w prototypie

// tych zmian jest właściwie niewiele, ale taki zapis jak tutaj jest zdecydowanie bardziej czytelny dla każdej osoby, która zna składnie klas

// to co jest tutaj bardziej intuicyjne to tzw. DZIEDZICZENIE - 

// załóżmy, że chcemy stworzyć podklasę samochód. Czyli samochód jest pojazdem i posiada dodatkowe określone przez nas właściwości. Oczywiście taka klasa zawiera konstruktor, który jako parametry przyjmuje nazwę, kolor oraz rok

class Car extends Vehicle {
    constructor(name, color, year) {
        super(name, color);
        // wszystko zostaje ustawione tak jak należy, ale mamy jeszcze jeden parametr - year:
        this.year = year;
    }
}
// ten konstruktor różni się od tego wyżej tym, że mamy jeden dodatkowy parametr (year). I teraz musimy te dwa pierwsze parametry przekazać do konstruktora, który mamy wyżej - metodą super - w ten sposób odwołujemy się do konstruktora klasy nadrzędnej

// wszystko zostaje ustawione tak jak należy, ale mamy jeszcze jeden parametr - year - możemy przypisać go do istniejącej klasy
// teraz, gdy w oparciu o tą klasę stworzymy nowy obiekt - samochód - to będziemy w stanie odczytać właściwości należące do klasy nadrzędnej:
const eleanor = new Car('Shelby Mustang GT500', 'grey', 1967);
console.log(eleanor.name);
// mamy dostęp do jej metod:
eleanor.startEngine();
console.log(eleanor.engineStatus);
// oraz jesteśmy w stanie odczytać również rok:
console.log(eleanor.year);

// no i wszystko się zgadza. Stworzyliśmy tutaj klasę samochód (Car), któa dziedziczy z pojazdu.

// DZIEDZICZENIE polega właśnie na dziedziczeniu pewnych właściwości lub metod w klasach podrzędnych - taki mechanizm jest podstawą projektowania obiektowego
// składnia:
    // class Vehicle {
    //     constructor(name, color) {
    //         // właściwości:
    //         this.name = name;
    //         // właściwości dodatkowe:
    //         this.color = color;
    //         this.engineStatus = 'off';
    //     }
    //     // jeśli chcemy dodać metodę do prototypu to nie musimy odwoływać się bezpośrednio do niego. Natomiast zapisujemy ją po prostu poniżej:
    //     startEngine() {
    //         // analogicznie jak w poprzedniej lekcji uruchamiamy silnik;
    //         this.engineStatus = 'on';
    //         console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    //     }
    // }

    //oraz

    // class Car extends Vehicle {
    //     constructor(name, color, year) {
    //         super(name, color);
    //         // wszystko zostaje ustawione tak jak należy, ale mamy jeszcze jeden parametr - year:
    //         this.year = year;
    //     }
    // }

    // to tak naprawdę wszystko to czego uczyliśmy się w lekcjach o prototypach, natomiast zapisane nieco inaczej