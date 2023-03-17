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

// 
var enlaces = document.getElementsByClassName("enlace");

for (var i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace siga el enlace

    // Crea un nuevo div para el contenido adicional
    var nuevoContenido = document.createElement("div");
    nuevoContenido.classList.add("contenido-adicional");
    nuevoContenido.innerHTML = this.getAttribute("data-contenido");

    // Agrega el nuevo contenido después del enlace actual
    this.insertAdjacentElement("afterend", nuevoContenido);
  });
}




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




const toggleButtons = document.querySelectorAll('[id^="toggle-button-"]');
toggleButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const articleCard = button.parentNode;
    articleCard.classList.toggle('expanded');
  });
});
