var liczba1 = 22;
var liczba2 = 15;
var pietro = 10;

if (liczba1 > liczba2 && pietro == 10) {
    console.log("SPełnione zostały dwa warunki, także TRUE");
}

var liczba3 = 12;
var liczba4 = 15;
var pietro1 = 10;

if (liczba3 > liczba4 || pietro1 == 10) {
    console.log("SPełnione zostały dwa warunki, także TRUE");
}


var liczba5 = 22;
var liczba6 = 12;


if (liczba5 > liczba6) {
    console.log("liczba 1 jest większa");
} else if (liczba5 == liczba6) {
    console.log("liczby są równe")
} else if (liczba5 < liczba6) {
    console.log("liczba 2 jest większa")
}


///////switch



var grupa = 25;



switch (grupa) {
    case 10:
        console.log("Liczba osob w grupie - 10");
        break;
    case 12:
        console.log("Liczba osób w grupie 12");
        break;
    case 18:
        console.log("Liczba osób w grupie 18");
        break;
    case 20:
        console.log("Liczba osób w grupie 20");
        break;
    default:
        console.log("nie wiadomo ile jest osob w grupie");

}
