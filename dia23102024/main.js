console.log(window, "window");
console.log(document,"document");


// uso de string 
//getElemetById -> regersa elemento que tengan un id
//getElementsByClassName -> regresa elementos que tengan class
//getElemetsByTagName -> regresa elementos que tengan tagname

//querySelector -> regresa el nodo
//querySelectorAll -> regresa los nodos

//document
//elemento o nodo
const navEl = document.getElementsByTagName("header")[0].querySelector("navegacion_header");

console.log(document.getElementById("navegacion_header"));
console.log(document.getElementsByTagName("header")[0].querySelector("navegacion_header"));
console.log(document.getElementsByTagName("header")[0].children.namedItem("navegacion_header"));
console.log(document.querySelectorAll("header"));

//obtener los elmentos de las listas de la nav
const lis = navEl.getElementsByClassName("li_nav header_nav");
//busca desde los elementos del header
const lisNodes = navEl.querySelectorAll(".li_nav");

//busca en todo el documento
const liss = document.getElementsByClassName(".li_nav");

//--------agergar nuevos elementos a mi nav (header)
// append -> mete texto todo lo que se le asigne
// appendChild
// innerHTML -> se modifica por completo el contenido del nodo o elemnto seleccionado

const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "News"

navEl.innerHTML = "Hola mundo";
navEl.append("<span>Hola mundo</span>");
navEl.appendChild("<p>hola mundo</p>");

//espesifica donde quiero agregar la informacion, agrego la informacion en el hijo de nav
navEl.querySelector("ul").append(nuevoElemento, "Soy alonso");