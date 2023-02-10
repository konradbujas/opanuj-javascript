/* DOCUMENT */

// Pobieranie referencji do elementów - 1

const form = document.querySelector('form');

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
option.textContent = '1';
option.value = 1;
select.append(option);
form.appendChild(select);

// Element nadrzędny

const grandParent = document.parentNode;
console.log(grandParent);
// pokazuje null, bo nie istnieje document nadrzędny od document ;) document to element, od którego wszystko się zaczyna - nie ma nic "wyżej"


// Interfejs location

console.log(document.location);
// mamy tutaj m.in property search, dzięki którym możemy zczytywać tzw. query params

// Typ obiektu document

const typeName = document.constructor.name
console.log(typeName);
// zwraca nam HTMLDocument - po wpisaniu w wyszukiwarkę otrzymamy wszystkie możliwe funkcje do wykonania na tym obiekcie oraz właściowości


/* WINDOW */

// Window to interfejs, który reprezentuje okno, w którym otwarta jest dana strona internetowa.
// Zawiera opisywany wcześniej obiekt document
// Udostępnia on m.in. informacje związane z rozmiarem okna, metody umożliwiające otwieranie okien potomnych, API takie jak localStorage oraz sessionStorage czy dostęp do tzw. custom elementów zarejstrowanych w kontekście danego okna