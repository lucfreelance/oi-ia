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
var contenido = document.getElementById('contenido-adicional');

// agrega un evento de clic al botón que muestra el contenido adicional
boton.addEventListener('click', function() {
  // inserta el contenido adicional después del contenedor existente
  contenido.insertAdjacentHTML('afterend', boton.dataset.contenido);
  
  // oculta el botón "Mostrar más"
  boton.style.display = 'none';
});
