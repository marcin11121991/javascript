"use strict";

var secondLink = document.getElementsByTagName('a')[1]; // tworzy zmienna z drugim linkiem

function alarm(e) {
    e.preventDefault(); //zapobiegamy domyslej akcji
    console.log('kliknieto kolejny link');
    
    console.log(e.type);
}

secondLink.onclick= alarm; // wywolujemy funkcje alarm na drugim linku po kliknieciu