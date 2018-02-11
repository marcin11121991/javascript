var ileRazy = 30;


for (var i = 0; i <= ileRazy; i++) {
    var iteracja = i + 1;
    console.log("Iteracja pętli nr " + iteracja);
}

var tablica = ["adui", "opel", "honda", "mazda", "nissan"];

for (var i = 0; i < tablica.length; i++){
    console.log("Tablica index= " + i + ". wartość = " + tablica[i]);
}


tablica.forEach( function(elementTablicy, indexTablicy){
    console.log("Index: " + indexTablicy + ", wartość: " + elementTablicy);
})