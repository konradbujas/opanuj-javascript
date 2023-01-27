const car = {};
car.name = 'Mustang';
car.color = 'red';
car.engineStatus = 'off';
car.startEngine = function() {
    this.engineStatus = 'on';
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
}
console.log(car.engineStatus);

car.stopEngine = function() {
    this.engineStatus = 'off';
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
}

console.log(car.engineStatus);
// domyślnie silnik jest wyłączony, dlatego musimy wywołać metodę uruchamiającą silnik - startEngine()
car.startEngine();
console.log(car.engineStatus);

// teraz możemy ponownie wyłączyć silnik i wracamy do ustawienia domyślnego:
car.stopEngine();
console.log(car.engineStatus);


// jednak co w sytuacji, gdybym chciał utworzyć drugi samochód? Czy muszę to wszystko pisać ponownie? 
// rozwiązaniem jest zamknięcie kodu w funkcji: (bo funkcje umożliwają wywołanie określonego kodu wiele razy, czyli to o co nam chodzi)

function Vehicle(name, color) {
    const car = {};
    // musimy się upewnić, że będziemy w stanie zmienić nazwę oraz kolor samochodu - te zmienne trafiają do argumentów funkcji: Vehicle(name, color) {}
    // wartość tych parametrów odpowiednio przypisujemy do właściwości obiektu:
    car.name = name;
    car.color = color;
    car.engineStatus = 'off';

    car.startEngine = function() {
    this.engineStatus = 'on';
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    }
    console.log(car.engineStatus);

    car.stopEngine = function() {
        this.engineStatus = 'off';
        console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    }
    return car; // żeby dostać ten obiekt, musimy dołączyć return car - w innym przypadku przy tworzeniu pojazdów poniżej dostalibyśmy 'undefined'
}

const car1 = Vehicle('Mustang', 'red');
console.log(car1);
// teraz mamy samochód i możemy uruchomić jego silnik:
car1.startEngine();
console.log(car1.engineStatus);
car1.stopEngine();
console.log(car1.engineStatus);



// wszystko wydaje się działać tak samo, ale z tą różnicą, że teraz możemy utworzyć drugi obiekt po prostu podając inną nazwę i tutaj oczywiście również mamy dostęp do właściwości tego obiektu:

const car2 = Vehicle('Camaro', 'yellow');
console.log(car2);
console.log(car2.name);
car2.startEngine();
console.log(car2.engineStatus);
car2.stopEngine();
console.log(car2.engineStatus);

// natomiast tak tworzone obiekty mają jedną zasadniczą wadę - mianowicie metody startEngine i stopEngine są tworzone za każdym razem kiedy tworzymy nową instancję tego obiektu. A skoro te funkcje nie zmieniają się w obrębie tych dwóch obiektów to jest to zwykłe marnowanie pamięci operacyjnej - pytanie co możemy z tym zrobić?

// 1. pierwszą rzeczą, która przychodzi na myśl jest zamknięcie tych metod w oddzielnym obiekcie: i właśnie to teraz zrobimy:

const vehicleActions = {
    // lekko musimy dostosować zapis, żeby wszystko było ok:
    startEngine() {
    this.engineStatus = 'on';
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    },
    stopEngine() {
        this.engineStatus = 'off';
        console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    }
}
// w przypadku takich kilku-linijkowych podobnych zmian warto skorzystać z opcji multikursora i zmiany przebiegają szybciej, a praca jest bardziej komfortowa

// mamy już oddzielny obiekt zawierający właściwości, a konkretnie metody, które chemy wykorzystać w naszym obiekcie i teraz musimy te metody odpowiednio przypisać: car.startEngine = vehicleActions.startEngine

// function Vehicle(name, color) {
//     const car = {};
//     // musimy się upewnić, że będziemy w stanie zmienić nazwę oraz kolor samochodu - te zmienne trafiają do argumentów funkcji: Vehicle(name, color) {}
//     // wartość tych parametrów odpowiednio przypisujemy do właściwości obiektu:
//     car.name = name;
//     car.color = color;
//     car.startEngine = vehicleActions.startEngine;
//     car.stopEngine = vehicleActions.stopEngine;
//     return car; // żeby dostać ten obiekt, musimy dołączyć return car - w innym przypadku przy tworzeniu pojazdów poniżej dostalibyśmy 'undefined'
// }

// rozwiązanie w pliku C:\dev\opanuj-javascript\1x12aa - prototypy.js

// powyższe rozwiązanie - działa na problem tworzenia tych samych metod przy tworzeniu kolejnego obiektu, ale rodzi następny: mianowicie za każdym razem, gdy dodajemy nową metodę musimy dodać ją w obu miejscach: vehicleActions oraz Vehicle...
