/* DOCUMENT */

// Document - to interfejs, dzięki któremu uzyskujemy dostęp do obiektowej reprezentacji naszej strony internetowej tzw. DOM (Document Object Model)
// Jest to nadrzędny elemenent całego drzewa elementów na stronie (document.parentNode === null)
// Udostępnia on m.in metody związane z wyszukiwaniem elementów, możliwość pobierania referencji do formularzy oraz wszystkich linków na stronie, stan ładowania dokumentu czy dostęp do ciasteczek


// Pobieranie referencji do elementów - 1

const form = document.querySelector('form');
console.log(form);

// Pobieranie referencji do elementów - 2

const forms = document.forms
const links = document.links
const body = document.body
console.log(forms)
console.log(links)
console.log(body)

// Reagowanie na zdarzenia

document.addEventListener('DOMContentLoaded', () => {
    console.log('Załadowano');
})


// Tworzenie nowych elementów w sposób dynamiczny

const select = document.createElement('select');
const option = document.createElement('option');
// argumentem createElement jest nazwa elementu, jaki mamy zamiar utworzyć.
option.textContent = '1';
option.value = 1;
// ustawiamy właściwości takie jak textContent oraz value i możemy połączyć te elementy ze sobą przekazując do selecta element option
select.append(option);
// a następnie nasz formularz wzbogacamy o nowo utworzony select dzięki funkcji appendChild
form.appendChild(select);


// Element nadrzędny

const grandParent = document.parentNode;
console.log(grandParent);
// pokazuje null, bo nie istnieje document nadrzędny od document ;) document to element, od którego wszystko się zaczyna - nie ma nic "wyżej"


// Interfejs location

console.log(document.location);
// mamy tutaj m.in host (adres pod którym znajduje się nasza strona internetowa, nazwa hosta, origin, port) oraz property search, dzięki którym możemy zczytywać tzw. query params


// Typ obiektu document

const typeName = document.constructor.name
console.log(typeName);
// zwraca nam HTMLDocument - po wpisaniu w wyszukiwarkę otrzymamy wszystkie możliwe funkcje do wykonania na tym obiekcie oraz właściowości. HTMLDocument - to nazwa konstruktora obiektu Document


/* WINDOW */

// Window to interfejs, który reprezentuje okno, w którym otwarta jest dana strona internetowa. (czyli element, który zawiera Document)
// Zawiera opisywany wcześniej obiekt Document
// Udostępnia on m.in. informacje związane z rozmiarem okna, metody umożliwiające otwieranie okien potomnych, API takie jak localStorage oraz sessionStorage czy dostęp do tzw. custom elementów zarejstrowanych w kontekście danego okna (Custom Elements Registry)


// Rozmiar okna
const height = window.outerHeight // innerHeight
console.log(height);
const width = window.outerWidth // innerWidth
console.log(width);
// uzyskiwanie informacji na temat rozmiarów okna.
// Outer - czyli informacje związane z interfejsem przeglądarki
// Inner - czyli informacje związane z wymiarami jedynie tej wewnętrznej części okna, bez elementów interfejsu przeglądarki

// Referencje do okna-rodzica
const opener = window.opener;
console.log(opener); // null, bo nasze okno nie jest otwarte jako modal czy pop-up, ale jeśli by tak było (w przypadku wykonania funkcji window.open) to otrzymalibyśmy referencje do okna rodzica. Okna, które otworzyło taki modal lub pop-up.
// window.open - funkcja dostępna na obiekcie window w celu otwarcia modala lub pop-upu


// Scroll
// funkcja związana z tym, że możemy dynamicznie z poziomu kodu scrollować stronę. Dodatkowo możemy ją wzbogacić o setTimeout - że po jakimś czasie to zadziała:
setTimeout(() => {
    window.scrollTo(100, 1500);
    // alert('End Time ;)');
}, 5000);