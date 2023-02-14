
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