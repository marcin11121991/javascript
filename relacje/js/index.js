var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);
console.log(pierwszyDiv.childNodes);

var childNodesDiva = pierwszyDiv.childNodes;
childNodesDiva.forEach(function(element){
    if(element.nodeType == 3) {
        console.log(element);
    }
});