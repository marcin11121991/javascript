var imiona = ["paweł", "Krzysztof", "Kasia", "Nikol", "Kamil"];

console.log(imiona[2]);
console.log(imiona);


imiona[5] = "Monika";
imiona[6] = "marcin";

console.log(imiona[5]);
console.log(imiona);

imiona.push("karolina");
console.log(imiona);



imiona.pop();
console.log(imiona); /// usuwa ostani element tablicy


var usunietyElement = imiona.pop();
console.log(usunietyElement);



// imiona.shift();
// console.log(imiona); usuwanie pierwszego elelemntu 


///// długosć tablicy

console.log(imiona.length);


// rozbijanie tablicy na ciąg tekstowy


var tablicaJakoTekst = imiona.join(" ");

console.log(tablicaJakoTekst);

//// odwracanie tablicy

var odwroconaTablica = imiona.reverse();
console.log(odwroconaTablica);

var sortTablica = imiona.sort();
console.log(sortTablica);















