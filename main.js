// 
function goArriba() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// 
const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelectorAll('.menu-item');

menuToggle.addEventListener('click', () => {
  menuItems.forEach(item => {
    item.classList.toggle('show');
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
      setTimeout(() => {
        // Hace scroll al elemento target
        const target = cerrarBtn.getAttribute('data-target');
        document.getElementById(target).scrollIntoView({behavior: 'smooth'});
      }, 300); // Espera 300ms (tiempo de transición) antes de hacer el scroll
    });
  });
});

//
function cerrarContenido() {
  const subContenido = document.querySelector("#subcontenido");
  const target = document.getElementById("toggle-button").getAttribute("data-target");

  subContenido.classList.remove("mostrar");

  setTimeout(() => {
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  }, 300);
}

  // 
  const buttons = document.querySelectorAll('table td button');
  const newsletter = document.querySelector('#newsletter');

  function hideNewsletter() {
    newsletter.classList.add('hide');
  }

  buttons.forEach(button => {
    button.addEventListener('click', hideNewsletter);
  });

// restaurar la posición de desplazamiento al volver atrás
window.addEventListener('load', () => {
  const scrollPosition = JSON.parse(sessionStorage.getItem('scrollPosition'));
  if (scrollPosition) {
    window.scrollTo(scrollPosition.x, scrollPosition.y);
    sessionStorage.removeItem('scrollPosition');
  }
});
  
  // 
  const saltadorLinks = document.querySelectorAll(".saltador-link");

  saltadorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    
      const miSubContenido = document.getElementById("subcontenido");
      const miContenido = link.getAttribute("data-contenido");
    
      miSubContenido.innerHTML = miContenido;
      window.scrollTo(0, miSubContenido.offsetTop);
    });
  });  

// Function intercambiarTarjetas: Está funciona perfectamente!
var tarjeta1 = document.querySelector('.tarjeta-1');
var tarjeta2 = document.querySelector('.tarjeta-2');
var posicionOriginal = 1;

function intercambiarTarjetas() {
  var premisaInfo = document.querySelector('.premisa-info');
  var premisaArriba = document.querySelector('.premisa-arriba');
  var premisaAbajo = document.querySelector('.premisa-abajo');
  
  if (posicionOriginal == 1) {
    premisaInfo.insertBefore(premisaAbajo, premisaArriba);
    posicionOriginal = 2;
  } else {
    premisaInfo.insertBefore(premisaArriba, premisaAbajo);
    posicionOriginal = 1;
  }
}