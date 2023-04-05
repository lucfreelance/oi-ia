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
var contenido = document.getElementById("contenidos");

for (var i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace siga el enlace
    contenido.innerHTML = this.getAttribute("data-contenido"); // Actualiza el contenido
  });
}

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
