// Obiekty to kolekcje nieupożądkowanych danych. Obiekt posiada właściwości w postaci par: klucza oraz wartości.

// Obiekt : Samochód
// Typ: Pojazd
// Właściwości: Kolor - Czerwony

// Cały JavaScript zbudowany jest w oparciu o obiekty. Mamy możliwość dostępu do domyślnych obiektów jak i tworzenia własnych. Każdy obiekt podlega dziedziczeniu (np. Pojazd to obiekt i Samochód to obiekt dziedziczący z niego).

// tworzenie obiekty
// z wykorzystaniem nawiasów klamrowych:
const myObj = {};
// z wykorzystaniem tzw konstruktora obiektów
const myObj2 = new Object();
// pomiędzy dwoma zapisami nie ma większych różnic, pierwsza wersja jest zdecydowanie prostsza w zapisie

// przykładowy obiekt:
const team = {
    name: 'Przeprogramowani',// właściwość (klucz: wartość)
    members_count: 3,
    count() {     // metoda (funkcja)
        return this.members_count;
    }    
}

// Dodawanie właściwości
// 1. z wykorzystaniem kropki - odwoływanie się do właściwości obiektu:
team.website = 'www.przeprogramowani.pl';
console.log(team);

// 2. z wykorzystaniem nawiasów kwadratowych
team['contact_email'] = 'przeprogramowani@gmail.com';
console.log(team);


// Odczytywanie właściwości
// - odwołujemy się do niej za pomocą kropki oraz nazwy tej właściwośći
console.log(team.name);
// lub korzystając z nawiasów kwadratowych
console.log(team['name']);
const property = 'name';
console.log(team[property]);
    // odwołując się za pomocą nawiasów kwadratowych możemy uzyskać dostęp do właściwości zapisanej liczbą (w innym przypadku - odwołanie za pomocą kropki - dostalibyśmy błąd składni)
team[30] = 'liczba_trzydzieści';
console.log(team['30']);
console.log(team);

// metoda - funkcja przypisana do jakiegoś obiektu

// Wywoływanie metod
team.count();
console.log(team.count());
    // korzystam z kropki i nazwy właściwości, a następnie zapisuję nawiasy, aby wywołać metodę
team['count']();
console.log(team['count']());


// Usuwanie właściwości
// za pomocą słowa kluczowego 'delete'
delete team.website;
console.log(team.website);
    // z usuwaniem właściwości należy uważać ze względu na zagnieżdżanie właściowści, bo obiekty mogą posiadać właściwości, a te właściwości mogą być również obiektami - np. w poniższym przykładzie jak usuniemy właściwość 'adress' usuniemy również zagnieżdżony obiekt 'city'

// Zagnieżdżanie właściwości
const user = {
    name: 'Przeprogramowani',
    adress: {
        city: 'Kraków'
    }
};

console.log(user.adress.city);
delete user.adress;
console.log(user.adress);
console.log(user);