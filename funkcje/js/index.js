// funkcja bez parametrów

var imie = "Marcin"; //zmienna globalna

function wyswietl () {
    var nazwisko ="Dębski"; // zmienna lokalna, wewnątrz funkcji
    var wiek ="26"; // druga zmienna
    console.log(wiek);
}
wyswietl(); // wyświetla funkcje pokaże wiek


function obliczWynik(parametr1, parametr2, parametr3) {
    var wynik = parametr1 * parametr2 * parametr3;
    return(wynik);
    console.log(wynik);
}

var wynikObliczen = obliczWynik(20, 20, 3);
console.log(wynikObliczen);

var wynikObliczen2 = obliczWynik(200, 200, 365);
console.log(wynikObliczen2);

var wynikObliczen3 = obliczWynik(15, 16, 17);
console.log(wynikObliczen3);