// [1x3] zmienne

// Zmienna to sposób w jaki program zapamiętuje informacje.
// Zmienna służy do przechowywania informacji pod wskazaną nazwą - tzw.identyfikatorem, a samą informację nazywamy wartością.

// Aby móc korzystać ze zmiennej musimy ją najpierw utworzyć, inaczej mówiąc zadeklarować i w JavaScripcie robimy to za pomocą var / let / const.

// VAR - charakterystyczna dla starego JS, ale już jej nie używamy, choć nadal można się z nią spotkać. Deklaruje zmienną i opcjonalnie ustawia jej wartość - domyślnie 'undfefined'

// LET - deklaruje zmienną i opcjonalnie ustawia jej wartość, jednak tak utworzona zmienna posiada zakres blokowy. (różnica pomiędzy let oraz var).

// CONST - deklaruje zmienną, posiadającą zakres blokowy. Jej wartość NIE MOŻE zostać nadpisana. Jest tak na prawdę stałą. Inaczej mówiąc, gdy tworzymy zmienną musimy od razu przypisać do niej wartość, która w przyszłości nie będzie mogła być zmieniona.
// W praktyce wygląda to tak, że słowo kluczowe 'const' wykorzystujemy praktycznie za każdym razem, gdy deklarujemy jakąś zmienną i tylko w sytuacji, kiedy wartość tej zmiennej może się zmienić - wtedy używamy słowa kluczowego 'let'.

// Słowa kluczowego 'var' raczej nie używamy. Są tylko pojedyńcze przypadki, kiedy można go wykorzystać, natomiast dalej jest to bardzo kontrowersyjne i większość programistów tego nie poleca.

// const home;
// console.log(home); // SyntaxError: Unexpected token (przy const musimy przypisać wartość)

// Zmienne zadeklarowane z wykorzystaniem słowa kluczowego 'const' są tak na prawdę stałymi, czyli takimi specjalnymi zmiennymi, których wartość nie może zostać zmieniona.

var name = "Adam";
console.log(name);

name = "Marcin";
console.log(name);
var name = "Przemek";
console.log(name);

// przy deklarowaniu zmiennej słowem kluczowym var istneje ryzyko jej nadpisania, bądź zadeklarowania ponownie jak na powyższym przykładzie przy rozbudowanym kodzie istnieje ryzyko, że nie będziemy wiedzieć, że taka zmienna już istnieje

var name2;
name2;
console.log(name2)
// zadeklarowana zmienna bez ustawionej wartości domyślnie ma wartość 'undefined'


// let
let user = 'przeprogramowani';
// wartość takiej zmiennej możemy również nadpisać j.w.

user = 'overment';
// ale przy ponownej deklaracji zmiennej z tym samym identyfikatorem i słowem kluczowym 'let' otrzymamy błąd SyntaxError

// let user = 'nice try.';

// SyntaxError = "identyfikator user jest już obecnie wykorzystywany"


// const
const email = 'przeprogramowani@gmail.com';
// deklarowanie zmiennej wygląda dokładnie tak samo, z tą różnicą, że nie możemy nadpisywać wartości zmiennej

// email = 'kontakt@przeprogramowani.pl';

// błąd informuje nas, że "nie możemy tak robić"


// BLOCK SCOPE

for (var i=0; i < 10; i++) {
    console.log(i);
}
console.log(`Outside loop i = ${i}`);

// użyliśmy tu słowa kluczowego 'var' i zmienna po wykonaniu pętli ma teraz wartość 10, bo pętla wykonała się 9 razy i za każdym razem zwiększaliśmy wartość o 1 możemy nie być świadomi, że zmienna była używana w pętli i poza nią ma inną wartość i może to doprowadzić do cichego błędu, o którym nie będziemy mieli pojęcia

// dlatego lepiej zadeklarować zmienną (j) za pomocą let:

for (let j=0; j < 10; j++) {
    console.log(j);
}
console.log(`Outside loop j = ${j}`)

// zmienna zadeklarowana let ma zakres blokowy, czyli nie jest dostępna poza blokiem funkcji ( poza nawiasami {} ) nie możemy też użyć const, bo zmienna się zmienia za każdym obrotem pętli