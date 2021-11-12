
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
    // argument zostaje przekazany do funkcji (do zmiennej 'user')
    // i wyświetlony w lini 21: return `Cześć ${user}!`; ale
    // dalej nic nie widzimy teraz trzeba wywołać funkcję
    // ale ta wartość zostaje zwrócona w wierszu powyżej - 27

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



