console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// nie ma sensu wpisywać ręcznie, bo co jeśli byśmy musieli
// policzyć do tysiąca??
// w tym celu wymyślono pętle, które powtarzają określony kod
// dowolną ilość razy

// pętla for
for (let i = 1; i <= 15; i++) {
    console.log(i);
}
    // gdy chcemy policzyć do 500 to wystarczy zmienić wartoś
    // z 10 na 500. W sposób i <= 500


// pętle zagnieżdżone
for (let l = 0; l < 5; l++) {
    console.log(l);
    for (let m = 0; m < 5; m++) {
        console.log(m);
    }
}
    // pętla zagnieżdżona wykonuje się 5 razy podczas każdego
    // obrotu pętli zewnętrznej, czyli łącznie pętla wewnętrzna
    // wykona się 25 razy ;) wykonuje się w całości za każdym
    // obrotem pętli, w której się znajduje


// Break / Continue
for (let i = 1; i <= 5; i++) {
    if (i == 3) break;
    console.log(i);
}
    // pętla zatrzyma się kiedy i = 3, czyli policzy do 2,
    // zrobi tylko 2 obroty


for (let i = 1; i <= 5; i++) {
    if (i == 3) continue;
    console.log(i);
}
    // pętla zostaje zatrzymana w trzecim obrocie i wznowiona
    // na kolejny obrót, zanim 3 się zakończył - dlatego nie
    // widzimy 3 w wyniku


    
// Pętla while (może nie wykonać się ani razu)
// np. pętla odliczająca od 10 do 0:
let j = 10;
while (j >= 0) {
    console.log(j);
    j--;
}
    // mamy tylko jeden warunek, który jest sprawdzany za
    // każdym obrotem pętli i będzie wykonywać się tak długo
    // jak długo warunek będzie spełniony
    // + musimy zadbać, by j zmieniało się za każdym obrotem
    // pętli (j--;) - w tym przypadku postdekrementacja ;)





// Pętla do while (zawsze wykona się przynajmniej raz)
let t = 0;
do {
    console.log(t);
    t--;
} while (t > 0);
    // podobnie do pętli while, z tą różnicą, że warunek
    // znajduje się na końcu - a to oznacza, że nawet gdy
    // warunek będzie nieprawdziwy - pętla wykona się 
    // przynajmniej raz