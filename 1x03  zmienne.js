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

// Jak widać wszystko jest tutaj w porządku i program działa, natomiast przy deklarowaniu zmiennej słowem kluczowym var istneje ryzyko jej nadpisania, bądź zadeklarowania ponownie jak na powyższym przykładzie przy rozbudowanym kodzie istnieje ryzyko, że nie będziemy wiedzieć, że taka zmienna już istnieje

// m.in z tego powodu wykorzystywanie słowa kluczowego 'var' jest nierekomendowane. Takie zagranie w przypadku słów kluczowych 'let' oraz 'const' zakończy się błędem. Ale dzięki temu mamy pewność, że nie nadpiszemy istniejących już zmiennych, a przynajmniej nie stanie się to nieświadomie - w linii 27 użycie słowa kluczowego 'var' sugeruje, jakbyśmy deklarowali nową zmienną, bo być może nie wiemy, że taka istnieje. W przypadku bardziej rozbudowanego kodu jest to jak najbardziej możliwe. No użycie 'let' lub 'const' pozwoli na uniknięcie takiego błędu.

var name2;
name2;
console.log(name2)
// zadeklarowana zmienna bez ustawionej wartości domyślnie ma wartość 'undefined'


// let
let user = 'przeprogramowani';
// wartość takiej zmiennej możemy również nadpisać j.w. w przypadku 'var'

user = 'overment';
// ale przy ponownej deklaracji zmiennej z tym samym identyfikatorem i słowem kluczowym 'let' otrzymamy błąd SyntaxError

// let user = 'nice try.';

// SyntaxError = "identyfikator 'user' jest już obecnie wykorzystywany"


// const
const email = 'przeprogramowani@gmail.com';
// deklarowanie zmiennej wygląda dokładnie tak samo, z tą różnicą, że nie możemy nadpisywać wartości zmiennej

// email = 'kontakt@przeprogramowani.pl'; // Assignment to constant variable
// błąd informuje nas, że "nie możemy tak robić"

// aby wykorzystać wartość zmiennej należy się odwołać do jej identyfikatora: np. dla "name" to: console.log(name);

// VAR / LET / CONST

// najlepiej zapamiętać to tak: ze słowa kluczowego 'const' korzystamy za każdym razem kiedy deklarujemy zmienną, chyba że mamy do czynienia z sytuacją, gdy wiemy,że wartość tej zmiennej musi się zaraz zmienić to wtedy korzystamy z 'let'. Natomiast o słowie kluczowym 'var' wiedzmy, że istnieje i że nie warto go obecnie używać. M.in. dlatego, że możemy deklarować zmienne o tym samym identyfikatorze.


// BLOCK SCOPE

for (var i=0; i < 10; i++) {
    console.log(i);
}
console.log(`Outside loop i = ${i}`);

// Tutaj mamy do czynienia z tzw. pętlą. Linia 69 wykona się 10 razy i zależy to od wartości zmiennej i, która jest zadeklarowana w linii 68 (i=0; i<10; i++). Za każdym razem, gdy pętla będzie się wykonywać wartość zmiennej i zostanie zwiększona o 1. Z pomocą console.log wyświetlamy tą wartość i spodziewamy się tutaj liczenia od 0 do 9. I faktycznie tak jest. 
// Natomiast zwróć uwagę, że poza pętlą zmienna i ma wartość ustawioną na 10 (linia 71). Wynika to z tego, że pętla została wykonana 10 razy i za każdym razem zwiększaliśmy wartość zmiennej i o 1. Tak na prawdę może to stanowić problem, no bo skoro poza pętlą zmienna i posiada już jakąś wartość, a my niekoniecznie musimy wiedzieć, że gdzieś już ktoś wykorzystywał tą zmienną w pętli - możemy być tym faktem zaskoczeni i może doprowadzić do jakiegoś cichego błędu, którego nawet nie będziemy świadomi.

// Pytanie: Co możemy z tym zrobić?

// previous comment: // użyliśmy tu słowa kluczowego 'var' i zmienna po wykonaniu pętli ma teraz wartość 10, bo pętla wykonała się 9 razy i za każdym razem zwiększaliśmy wartość o 1 możemy nie być świadomi, że zmienna była używana w pętli i poza nią ma inną wartość i może to doprowadzić do cichego błędu, o którym nie będziemy mieli pojęcia //

// Odpowiedź: Zauważ, że mamy tutaj nawiasy klamrowe {} - fragment kodu pomiędzy nimi nazywamy blokiem. No i skoro zmienne zadeklarowane słowami kluczowymi 'let' oraz 'const' posiadają zakres blokowy, możemy zamienić słowo kluczowe 'var' na 'let' i wszystko będzie w porządku. Pętla zadziała tak jak tego oczekiwaliśmy, natomiast sama zmienna poza tą pętlą nie będzie dostępna. Oczywiście jak się domyślasz nie możemy użyć słowa kluczowego 'const' bo zmienna 'j' zmienia się w czasie, za każdym obrotem pętli wzrasta o 1.

// // lepiej zadeklarować zmienną 'j' ('j' - wcześniejsze 'i') za pomocą let zamiast var i wszystko będzie w porządku:

for (let j=0; j < 10; j++) {
    console.log(j);
}
console.log(`Outside loop j = ${j}`);


// // zmienna zadeklarowana let ma zakres blokowy, czyli nie jest dostępna poza blokiem funkcji ( poza nawiasami {} ) nie możemy też użyć const, bo zmienna się zmienia za każdym obrotem pętli