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

// petle while i do while


var iter = 0;


while( iter < 20 ) {
    console.log( iter );
    ++iter;
}



var iterek = 30;
do {
    console.log(iterek);
    ++iterek;
} while ( iterek < 10);



