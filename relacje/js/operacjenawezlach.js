var istniejacyWezel = document.getElementById('parFirst').children[3]; // przypisz do zmiennej istniejacy wezel



var newElement = document.createElement('p'); // stworznowy paragraf

console.log(newElement);

var newElementContent = document.createTextNode('To jest nowy paragraf'); // dodaj tresc
newElement.appendChild(newElementContent);

istniejacyWezel.appendChild(newElement);
istniejacyWezel.removeChild(newElement);

var parFirstDiv = document.getElementById('parFirst');
parFirstDiv.replaceChild(newElement, istniejacyWezel);  // zmiana elementu na wezle

var allLinks = document.querySelectorAll('a'); /// wybieramy wszystkie a
// console.log(allLinks);
for (var i = 0; i < allLinks.length; i++) {
    var br = document.createElement('br');
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling); 
    allLinks[i].removeAttribute('class');
}
// dodaj br po kazdym linku




