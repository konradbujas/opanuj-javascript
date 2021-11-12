// Operatory arytmetyczne
console.log(6 + 3);
console.log(6 - 3);
console.log(6 * 3);
console.log(6 / 3);
console.log(6 % 3); // modulo

// operatory przypisania
let x = 1;
x;
x += 10; // to jest skrót od x = x + 10;
x;

x= x + 1 ; // to długa, mniej czytelna, forma zapisu
x;

x += 10;
x;

x -= 10;
x;

x *= 2;
x;

x /= 3;
x;

x %= 3; // modulo
x;

// inkrementacja - zwiększenie wartości

let num = 5;
num;
console.log(num++); // postinkrementacja
console.log(num++); // zwiększona wartość
console.log(num);   // jest dostępna od nast. wiersza
console.log(num);
num; 
console.log(num + 1); // tu od razu mamy większą wartość
num;

console.log(++num); // preinkrementacja
console.log(++num); // od razu zwiększona wartość
console.log(num);   // 


// dekrementacja - zmniejszenie wartości

num;
console.log(num--); // postdekrementacja
num;    // wartość jest dostępna od nowej linii


num;
console.log(--num); // predekrementacja
num; // wartość jest dostępna natychmiast



// operatory porównania
let a = 1;
let b = 2;

console.log(a == b);
console.log(a != b);
console.log(a < b);
console.log(a > b);
console.log(a >= b);
console.log(a <= b);
let c = "1";
console.log(a == c);
// tutaj bardzo łatwo o błąd, ponieważ ciąg znaków zawierający
// liczbę "1" nie jest liczbą 1 - możemy się przed tym uchronić
// dodatkowo sprawdzając typ danych (porównanie ścisłe):
console.log(a !== c); // prawda, że nie są ściśle równe
console.log(a === c); // nie są ściśle równe, fałsz


// operatory logiczne
let firstCondition = true;
let secondCondition = false;

    // operator AND - ten oraz ten (oba warunki muszą być true
    // - inaczej false)

        console.log(firstCondition && secondCondition);


    // operator OR - ten lub ten (jeden lub drugi warunek musi
    // być true) jak oba nie to false

        console.log(firstCondition || secondCondition);

    // operator NOT - odwrotność wartości warunku

        console.log(firstCondition && !secondCondition);


// ternary operator
let condition = true;
let valueTrue = true;
let valueFalse = false;
let ternary = condition ? valueTrue : valueFalse;
console.log(ternary);
// if (condition) {valueTrue} else {valueFalse};

    // to skrócona forma instrukcji warunkowej, mówi nam
    // jeżeli warunek jest true to przyjmij pierwszą wartość
    // (valueTrue), w przeciwnym wypadku drugą (valueFalse)


// operatory jednowartościowe - przyjmują jedną wartość
// i wykonujące na nich jakąś akcję

    // delete - gdy chcemy usunąć jakąś wartość
    const obj = {
        property: 'value'
    };
    console.log(obj.property);
    delete obj.property;
    console.log(obj.property);

    // typeof - gdy sprawdzamy typ zmiennej:
    console.log(typeof obj);

    // void - gdy chcemy wykonać jakeś wyrażenie, ale nie chemy
    // zwracać wartości
    console.log(void obj);


// Operatory relacyjne: in, instanceof
    
    // in - zwraca wartość true jeśli jakaś właściwość
    // znajduje się w obiekcie
    console.log('property' in obj);
        // false bo usunęliśmy wyżej tą wartość

    // instanceof - sprawdza czy dany obiekt jest instancją 
    // danej klasy
    console.log(obj instanceof Object);
    
    //