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

// Selecciona los elementos con la clase .subenlace dentro de la sección
const subenlaces = document.querySelectorAll('section .subenlace');

// Añade un evento click a cada enlace
subenlaces.forEach(subenlace => {
  subenlace.addEventListener('click', e => {
    e.preventDefault();

    const ficha = subenlace.getAttribute('data-contenido');
    const subContenido = document.querySelector("#subcontenido");
    subContenido.innerHTML = ficha;
    subContenido.classList.add("mostrar");
    
    // Busca el botón cerrar dentro del contenido desplegado y añade un evento click
    const cerrarBtn = subContenido.querySelector('.cerrar-btn');
    cerrarBtn.addEventListener('click', () => {
      subContenido.classList.remove('mostrar');
    });
  });
});

// 
var botonLeerMas = document.getElementById("leer-mas");
  var posicionBotonLeerMas = botonLeerMas.getBoundingClientRect().top + window.scrollY;
  
  function volver() {
    window.scrollTo(0, posicionBotonLeerMas);
  }

  //
  function cerrarContenido() {
    // Oculta el contenido que se va a cerrar
    // ...
  
    // Cambia la posición de la página al top de la sección table-board
    document.getElementById("table-board-top").scrollIntoView({ behavior: "smooth" });
  }