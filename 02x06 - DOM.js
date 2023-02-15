
// DOM - czyli Document Object Model, to obiektowy model strony internetowej, udostępniający dodatkowo interfejs do modyfikacji i dostępu do poszczególnych elementów strony.

// Warto wiedzieć:

// Budowanie DOM to jeden z elementów wcześniej omawianego Critical Rendering Path

// DOM to struktura drzewiasta - posiada jeden element nadrzędny (tzw. root)

// elementy DOM to tzw. węzły (node'y), które również mogą (ale nie muszą) być strukturami drzewiastymi

// z perspektywy izolacji poszczególnych fragmentów, możemy wyróżnić Light i Shadow DOM


// DOM to struktura drzewiasta, która może przypominać np. drzewo katalogów w systemie operacyjnym.
// Każdy jej element zawiera informacje o elementach z najbliższego otoczenia - rodzicu, elementach potomnych oraz elementach na tym samym poziomie


// Składowe DOM:
// DOM zawiera kilka ściśle określonych typów elementów, z którymi warto się zapoznać mając na uwadze udostępniane przez nie metody oraz właściwości.

// Wyróżniamy następujące typy węzłów:

// # Document - reprezentuje całą stronę internetową, dostępną pod zmienną globalną o nazwie 'document'

// # DocumentType - który reprezentuje deklarację 'doctype', która wskazuje w jaki sposób przeglądarka ma wczytać daną stronę internetową

// # DocumentFragment - węzeł, dzięki któremu możemy tworzyć lżejsze wersje dokumentu, pracować na tej strukturze w pamięci, dodawać do niej poszczególne elementy i dopiero, kiedy stwierdzimy, że dana praca została zakończona, dołączyć ją do właściwego Documentu, tak aby przeglądarka wyrenderowała nową zawartość strony

// # Element - najbardziej popularne elementy, takie jak paragrafy, hiding, divy oraz spany

// # Text - elementy zawierające tylko zestaw znaków

// # ProcessingInstuction - węzły, które są szczególnie popularne w dokumentach typu XML

// # Comment - komentarze


// Element
const paragraph = document.createElement('p');
paragraph.innerText = 'Cześć!';
document.body.appendChild(paragraph);

// Komentarz
const comment = document.createComment('Nie widzisz mnie - komentarz');
document.body.appendChild(comment);

// Tekst 
const txt = document.createTextNode("Po prostu tekst")
document.body.appendChild(txt);

// Atrybut

const attr = document.createAttribute('class');
attr.value = 'red';
paragraph.setAttributeNode(attr);


// Live DOM Viewer dostępny na stronie: http://bit-ly/dom-viewer - to narzędzie pozwalające zobaczyć jak wybrany fragment kodu HTML przekłada się na strukturę DOM

// Shadow DOM
// Shadow DOM - to jedna z trzech składowych tzw. Web Components. Dzięki Shadow DOM poszczególne elementy naszego drzewa mogą być izolowane, a ich właściwości ukryte przed światem zewnętrznym.

// dzięki Shadow DOM możemy tworzyć tzw. 'shadow trees' - drzewa, w których przestaje obowiązywać globalna charakterystyka DOM

// każde 'shadow tree' posiada tzw. 'shadow root' - węzeł określający granicę izolacji

// Shadow DOM pozwala tworzyć elementy, które nie będą afektowane przez globalne style umieszczone na danej stronie internetowej i których widoczość możemy ograniczyć

// Light DOM to określenie mające odróżnić standardowy DOM od Shadow DOM - jednak jest to bardziej określenie potoczne


// Gdzie Shadow DOM wykorzystywany jest w praktyce