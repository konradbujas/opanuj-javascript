Vehicle.prototype.startEngine = function() {
    this.engineStatus = 'on';
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    };

Vehicle.prototype.stopEngine = function() {
    this.engineStatus = 'off';
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
    };



// linijka 100 komentarz - już nie potrzebujemy zewnętrznego obiektu:
// const vehicleActions = {
//     // startEngine() {
//     // this.engineStatus = 'on';
//     // console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
//     // },
//     // stopEngine() {
//     //     this.engineStatus = 'off';
//     //     console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
//     // }
// }

function Vehicle(name, color) {
    // zmiana obiektu rodzica na prototyp - komentarz linijka 113)
    const car = Object.create(Vehicle.prototype);
    //const car = {};
    car.name = name;
    car.color = color;
    car.engineStatus = 'off';
    // car.startEngine = vehicleActions.startEngine;
    // car.stopEngine = vehicleActions.stopEngine;
    // linia 84 - komentarz
    
    return car; 
}

const car1 = Vehicle('Mustang', 'red');
console.log(car1);

car1.startEngine();
console.log(car1.engineStatus);
car1.stopEngine();
console.log(car1.engineStatus);




const car2 = Vehicle('Camaro', 'yellow');
console.log(car2);
console.log(car2.name);
car2.startEngine();
console.log(car2.engineStatus);
car2.stopEngine();
console.log(car2.engineStatus);




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


// powyższe rozwiązanie - działa na problem tworzenia tych samych metod przy tworzeniu kolejnego obiektu, ale rodzi następny: mianowicie za każdym razem, gdy dodajemy nową metodę musimy dodać ją w obu miejscach: vehicleActions oraz Vehicle...



// object create
const parentObj = {
    team: 'Przeprogramowani'            
};
//mamy obiekt z jedną właściwością team. Następnie stworzę drugi obiekt - wykorzystując metodę Object.create, do której przekażę ten stworzony obiekt.

const child = Object.create(parentObj);

// otrzymaliśmy nowy obiekt, który jest w pewien sposób połączony z obiektem parentObj. A zadada tego połączenia wygląda następująco: - w momencie jak dodam właściwość do obiektu child - np. name:
child.name = 'Adam';

console.log(child.name); 
// to mogę ją teraz odczytać

// natomiast w sytuacji, gdy będę próbował odczytać właściwość team w tym obiekcie, w którym teoretycznie ta właściwość nie istnieje to JavaScript przeszuka również ten obiekt powyżej
console.log(child.team);


// zeby użyć tego w naszej sytuacji robimy: 
// const car = Object.create(vehicleActions);
// a linijki: 
// car.startEngine = vehicleActions.startEngine;
// car.stopEngine = vehicleActions.stopEngine; 
// usuwamy, ponieważ i tak, gdy będziemy się do nich odwoływać np w miejscu const car1 = Vehicle('Mustang', 'red'); car1.startEngine();
// i tak JavaScript będzie wiedział, gdzie szukać ponieważ wskazaliśmy mu to w tej linijce: 
// const car = Object.create(vehicleActions);

// i wszystko działa tak jak należy. Jednak jeszcze możemy zmienić to, że mamy tutaj konstruktor, który jest zależny od jakiegoś zewnętrznego obiektu. Dobra wiadomość jest taka, że jest specjalne miejce gdzie możemy przechować takie metody. Mianowicie jest to główny bohater tej lekcji, czyli PROTOTYP


console.log(Vehicle.prototype);

// i faktycznie mamy obiekt, czyli nic nie stoi na przeszkodzie, aby zabrać te metody z vehicleActions = {}, które nie będzie nam już potrzebne i przenieść je do prototypu tej funkcji:

// prototyp to nowy obiekt, więc dodaję do niego właściwości, które są funkcjami

// na początek kopiuję:
// Vehicle.prototype.startEngine = function() {
//     this.engineStatus = 'on';
//     console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
//     };

// Vehicle.prototype.stopEngine = function() {
//     this.engineStatus = 'off';
//     console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
//     };

// i żeby to miało sens to musimy jeszcze zmienić odwołanie do tego obiektu. W tym momencie nie będziemy korzystać z zewnętrznego obiektu, tylko z prototypu tej funkcji - linijka

// No i teraz wszystko działa jak należy, ale zwróc uwagę, że w tym momencie, w tworzonych przez nas instancjach obiektu nie ma nawet śladu o metodach, jakie pojawiają się prototypie startEngine(); i stopEngine(); pomimo tego mamy nadal do nich dostęp ponieważ zadbaliśmy o połączenie w miejscu:
// const car = Object.create(Vehicle.prototype);

// i właśnie po to są prototypy ;)

// PROTOTYPEM - nazywamy obiekt, który posiada każda funkcja w JavaScripcie i ten obiekt wykorzystywany jest po to, aby dodawać właściwości, które będą dostępne w każdej instancji tej funkcji. Inaczej mówiąc każdy obiekt stworzony na podstawie tej funkcji będzie miał dostęp do tego samego prototypu i to sprawia, że nie powtarzamy sie i oszczędzamy pamięć operacyjną.