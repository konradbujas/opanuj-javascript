const condition1 = true;
const condition2 = false;

if (condition1) {
    console.log('Wykonaj!');
}
console.log('Koniec!'); // wykona się zawsze

// wykonuje się 7 linijka, bo condition2 jest false, czyli
// linia 4 czyli blok funkcji jest pominięta i wykonuje się
// jeśli nie, to wykonaj to co za blokiem funkcji - coś jak 
// if i else chyba ?? ;)
const name = '';
if (name) {
    console.log('first condition is true ;)');
} else if (condition2) {
    console.log('second conditon is false ;(');
} else {
console.log('third conditon ;D');
}

// trzecia instrukcja wykona się jeśli wszystkie wcześniejsze
// będą fałszywe,
// druga wykona się, jeśli pierwsza będzie fałszywa;
// pierwsza wykona się jeżeli warunek będzie prawdziwy


// możemy takie warunki zapisać za pomocą met. SWITCH
const condition3 = "jakiś tekst";

switch (condition3) {
    case true:
        console.log('to prawda!');
    break;
    case false:
        console.log('Kłamiesz');
    break;
    default:
        console.log('Wszyscy mówią prawdę ;)');
    break;
}

// jeżeli w case pojawi się słowo/wartość którą wpiszemy to
// wykona się ten fragment (jeżeli wartość funkcji jest równa
// wartości z tego przypadku - case`u)
// Możemy ustawić wykonanie fragmentu dla pozostałych,
// niewydzielonych fragmentów - u nas conditon3

// zwróć uwagę na konstrukcję - kiedy jest :, kiedy case,
// break, default
// sprawdzamy warunek w pierwszym nawiasie (u nas condition3)
// i jeśli wartość jest równa któremuś z przypadków to wtedy
// wykonuje się ten fragment