//
const articles = document.querySelector(".article-container");
const articleCards = document.querySelectorAll(".article-card");

articles.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("article-card")) {
    articleCards.forEach((card) => {
      if (card !== e.target) {
        card.style.transform = "translateX(10px)";
      }
    });
  }
});

articles.addEventListener("mouseout", () => {
  articleCards.forEach((card) => {
    card.style.transform = "none";
  });
});

//
var enlaces = document.getElementsByClassName("enlace");
var contenido = document.getElementById("contenido");

for (var i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace siga el enlace
    contenido.innerHTML = this.getAttribute("data-contenido"); // Actualiza el contenido
  });
}

// selecciona el botón "Mostrar más" y el contenedor adicional
var boton = document.getElementById('toggle-button');
var contenido = document.getElementById('contenido');

// agrega un evento de clic al botón que muestra el contenido adicional
boton.addEventListener('click', function() {
contenido.insertAdjacentHTML('afterend', boton.dataset.contenido);
// inserta el contenido adicional después del contenedor existente

// oculta el botón "Mostrar más"
boton.style.display = 'none';
});

// const articleContainer = document.querySelector('.article-container');
const articleExpandedContainer = document.querySelector('.article-expanded-container');
const toggleButton = document.querySelector('#toggle-button');

toggleButton.addEventListener('click', () => {
if (articleContainer.style.display !== 'none') {
articleContainer.style.display = 'none';
articleExpandedContainer.style.display = 'block';
} else {
articleContainer.style.display = 'block';
articleExpandedContainer.style.display = 'none';
}
});

//
const toggleButtons = document.querySelectorAll('[id^="toggle-button-"]');
toggleButtons.forEach((button, index) => {
button.addEventListener('click', () => {
const articleCard = button.parentNode;
articleCard.classList.toggle('expanded');
});
});

// Recorrer todos los botones y agregar el evento click
botones.forEach(function(boton) {
boton.addEventListener("click", function(event) {
	event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
	var contenido = boton.dataset.contenido; // Obtener el contenido del atributo data-contenido
	var contenedor = document.querySelector("#contenido"); // Obtener el contenedor donde se mostrará el contenido
	contenedor.innerHTML = contenido; // Agregar el contenido al contenedor
});
});

// 
  $('.imagen-principal').click(function() {
  $('#modal-imagen').modal('show');
});

// 
// Selecciona los elementos con la clase .subenlace dentro de la sección
const subenlaces = document.querySelectorAll('section .subenlace');

// Añade un evento click a cada enlace
subenlaces.forEach(subenlace => {
subenlace.addEventListener('click', e => {
e.preventDefault();
const contenido = subenlace.getAttribute('data-contenido');
const subContenido = document.querySelector("#subcontenido");
subContenido.innerHTML = contenido;
subContenido.classList.add("mostrar");
});
});

// Selecciona el elemento con el id #subcontenido
const subContenido = document.querySelector("#subcontenido");

// Añade un evento click al #subcontenido para cerrarlo
subContenido.addEventListener("click", () => {
subContenido.classList.remove("mostrar");
});

// 
$(document).ready(function(){
$("#subtabla td").click(function(){
	var contenido = $(this).find(".contenido").html();
	$("#subcontenido").html(contenido);
});
});

// "subir al top" NO FUNCIONA
window.addEventListener("scroll", function() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");
  if (window.scrollY > 0) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

document.getElementById("scrollToTopButton").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// //
// var enlaces = document.getElementsByClassName("enlace");

// for (var i = 0; i < enlaces.length; i++) {
// enlaces[i].addEventListener("click", function(event) {
// event.preventDefault(); // Evita que el enlace siga el enlace

// // Crea un nuevo div para el contenido adicional
// var nuevoContenido = document.createElement("div");
// nuevoContenido.classList.add("contenido");
// nuevoContenido.innerHTML = this.getAttribute("data-contenido");

// // Agrega el nuevo contenido después del enlace actual
// this.insertAdjacentElement("afterend", nuevoContenido);
// });
// }

// // 
// var enlaces = document.querySelectorAll('.subenlace');
// enlaces.forEach(function(enlace) {
// enlace.addEventListener('click', function(e) {
// 	e.preventDefault();
// 	var contenido = this.getAttribute('data-contenido');
// 	var subtabla = document.getElementById(subcontenido);
// 	var subtablas = document.querySelectorAll('.subtable-board');
// 	subtablas.forEach(function(tabla) {
// 	tabla.classList.remove('activo');
// 	});
// 	subtabla.classList.add('activo');
// });
// });

// // Obtener todos los botones "Saber más"
// var botones = document.querySelectorAll("#table-board .enlace");
