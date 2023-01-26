
    // deklaracja funkcji:
function sayHello() {
    console.log('Cześć! Jesteś spoko.');
}
    // nic nie widać w funkcji, bo musimy ją jeszcze wywołać
    // (odwołując się do jej nazwy zakończonej nawiasami):
sayHello();
    // teraz widzimy, że funkcja została wykonana, a poza tym
    // możemy to zrobić kilka razy ;)
    sayHello();
    sayHello();
    sayHello();
    sayHello();
    


// function declaration

    // słowo kluczowe 'function' nazwę funkcji i nawias zawierający
    // parametry oraz ciało funkcji zapisane w nawiasie klamrowym {}
function sayHelloTo(user) {
    // parametry to informacje, które przekazujemy do funkcji
    // w postaci zmiennych - tutaj 'user' podane wewnątrz nawiasu
    // a następnie można go wykorzystać w ciele funkcji
    return `Cześć ${user}!`; // -> funkcja przywita się ze mną
    // słowo kluczowe RETURN mówi nam co dana funkcja ma zwra
    // -cać, czyli jaki jest wynik danej funkcji
}
    // w momencie wywoływania funkcji możemy przekazać argumenty
    // sayHelloTo('Adam');
sayHelloTo('Adam');
console.log(sayHelloTo('Adam'));
    // argument zostaje przekazany do funkcji (do zmiennej 'user')
    // i wyświetlony w lini 26: return `Cześć ${user}!`; ale
    // dalej nic nie widzimy teraz trzeba wywołać funkcję
    // ale ta wartość zostaje zwrócona w wierszu powyżej - 32
    // i odczytujemy ją w console.log w wierszu - 33

// aby odczytać wartość funkcji możemy utworzyć zmienną result
const result = sayHelloTo('Krzyś');
// i console.log z result:
console.log(result);

// lub ?? od razu console log z funkcji z podanym parametrem ??


console.log(sayHelloTo('Adam'));


let firstName = 'khjhj?!';

let nameUser = firstName;
let resultUser = sayHelloTo(nameUser);
console.log(resultUser);


nameUser = "adi";
resultUser = sayHelloTo(nameUser);
console.log(resultUser);


// function expression
    // tworzymy zmienną i do jej wartości przypisujemy deklarację
    // funkcji

const add2 = function(arg1, arg2) {
    return arg1 + arg2;
}

    // nie podajemy tu nazwy funkcji, więc mamy tu do czynienia z tzw
    // funkcją anonimową - do takich funkcji przeważnie nie mamy dostępu
    // po momencie deklaracji, ale tutaj jest inaczej, bo przypisaliśmy
    // ją do zmiennej 'add2'. Jeśli chemy wywołać tą funkcję to odwołujemy
    // się do zmiennej 'add2' a następnie przekazuję argumenty. Wynik
    // możemy zapisać w console.logu i dostajemy tutaj sumę tych liczb:

add2(3,4);
console.log(add2(3,4));

// w function expression kolejność ma znaczenie - nie możemy wywołać funkcji zanim ją zadeklarujemy - nie występuje tutaj HOISTING - musimy zadbać o kolejność, bo jeśli nie to dostaniemy bład "Cannot access 'add2' before initialization"

console.log(addExample(3,4));
const addExample = function(arg1, arg2) {
    return arg1 + arg2;
}
// w function expression funkcja nie ma nadanej nazwy i często nie możemy się do niej odwołać, jednak w naszym przypadku przypisaliśmy ją do zmiennej 'add2' i dlatego była dalej dostępna ;)

// w function declaration kolejność nie ma znaczenia i możemy wywoływać funkcję zanim ją zadeklarujemy, bo występuje tutaj HOISTING

// oba sposoby są potrzebne do róznych zastosowań, a które bardziej w jakich okolicznościach dowiemy się z następnych lekcji ;)

