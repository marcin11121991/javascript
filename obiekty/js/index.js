var osoba = {
    imie: "Adam",
    nazwisko: "Dębski",
    wzrost: 182,
    
    wyswietlSzczegoly: function (parametrImie) {
        this.imie = parametrImie;
        console.log("Osoba to: " + this.imie + " " + this.nazwisko + " " + this.wzrost);
    }
    
}

//console.log(osoba.imie);
//console.log(osoba["nazwisko"]);
osoba.wyswietlSzczegoly();
osoba.wyswietlSzczegoly("igoreczek");

//console.log(osoba.wyswietlSzczegoly);


// metoda dla jednego obiektu wyżej 

// dodawwanie wlasnosci do obiektu

osoba.wiek = 36;
osoba.wyswietlWiek = function() {
    console.log(this.wiek);
    
}

osoba.wyswietlWiek();
/// matryca klasa


class Ogloszenie{
    constructor(tytul, opis, kontakt, cena){
        this.tytul = tytul;
        this.opis = opis;
        this.kontakt = kontakt;
        this.cena = cena;
    }
    wyswietlOgloszenie() {
        document.write("Tytuł: " + this.tytul + " " + "opis: " + this.opis + " " + "kontakt" + this.kontakt + " " + "cena: " + this.cena );
    }
} 

var ogloszenie1 = new Ogloszenie("Sprzedam Opla", "Niemiec płakał jak sprzedawał", "666-656-656", 1600);
ogloszenie1.wyswietlOgloszenie();

var ogloszenie2 = new Ogloszenie("Sprzedam passerat", "Niemiec gonił do granicy", "0770-700-700", 6666);
ogloszenie2.wyswietlOgloszenie();
