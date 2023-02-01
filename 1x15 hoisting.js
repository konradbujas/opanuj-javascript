// Czym jest hoisting?? 

// Hoisting (podnoszenie) to mechanizm polegający na tym, że deklarowana zmienna jest "wynoszona" na górę zakresu do którego została przypisana.

// Deklaracja, inicjalizacja i przypisanie

// Tworzenie zmiennej w JavaScripcie polega na:

//  - deklaracji, czyli zarejestrowaniu zmienniej w jej zakresie (scope)
//  - inicjalizacji, czyli zarezerwowaniu miejsca w pamięci
        // nie za każdym razem od razu dochodzi do inicjalizacji
//  - przypisaniu wartości do zmiennej (ostatecznie nieco później)

let newVar;
// w momencie, gdy tworzymy zmienną dochodzi do jej deklaracji i inicjalizacji. Ze względu na to, że w tym momencie nie przypisujemy do niej żadnej wartości - zostanie automatycznie przypisana do niej wartość 'undefined' 
console.log(newVar);
// taka zmienna posiada również typ 'undefined'
console.log(typeof newVar);

// ale w sytuacji, gdybyśmy próbowali odczytać jakąś zmienną, która nie została zadeklarowana otrzymujemy błąd, który zatrzymuje działanie skryptu - informuje nas on, że próbujemy odczytać zmienną, która nie istnieje
// console.log(latest); //latest is not deined

// natomiast spróbujemy odczytać zmienną, która w tej chwili nie istnieje, ale już za chwilę ją utworzymy słowem kluczowym 'var'.
console.log(hoisted);
// przykład z lini 21 sugeruje nam, że w tej chwili otrzymamy błąd informujący nas o tym, że zmienna nie istnieje. No bo najpierw próbujemy ją odczytać, a dopiero potem ją utworzyć. Natomaist faktycznie otrzymamy wartość 'undefined'
var hoisted = 'go up!';
// także skoro zmienna już istnieje to dlaczego ma wartość 'undefined' a nie taką jak zdefiniowaliśmy: 'go up!'
console.log(hoisted);
// po ponownym odczytaniu zmiennej uzyskujemy właściwą wartość - mechanizm, który tu występuje to tzw. HOISTING, czyli podnoszenie lub wynoszenie zmiennych lub funkcji. To wszystko ma związek z tym, że podczas tworzenia zmiennych na początku dochodzi do deklaracji i inicjalizacji, a dopiero potem dochodzi do przypisania wartości.

// czyli ten kod dla JS wygląda w następujący sposób:
var hoisting;
console.log(hoisting);
hoisting = 'hello !';
console.log(hoisting);
// pomimo tego, że zmienną tworzymy w linii 34 to zostaje ona podnoszona na górę bieżącego zakresu i inicjalizowana wartością 'undefined' - linia 32. I teraz w momencie, gdy ją odczytujemy po raz 1 to mamy 'undefined' natomiast po raz drugi w linii 35 odczytujemy odpowiednią wartość


// w przypadku wykorzystania słowa kluczowego 'let' zamiast 'var' efekt końcowy jest zasadniczo różny:
{
    // let hoisting;
    console.log(hoisting);
    let hoisting = 'hello !';
    console.log(hoisting);
}
// jak widać skrypt się nie wykonał i otrzymaliśmy błąd "Cannot access 'hoisting' before initialization"
