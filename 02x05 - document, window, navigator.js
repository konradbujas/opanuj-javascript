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

