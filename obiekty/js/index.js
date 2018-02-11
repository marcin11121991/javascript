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

console.log(osoba.wyswietlSzczegoly);