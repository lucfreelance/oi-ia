  // 
  $(document).ready(function () {
    // Toggle the navbar when the hamburger button is clicked
    $(".navbar-toggler").on("click", function () {
      $(".navbar-collapse").toggleClass("show");
    });
  
    // Hide the navbar when a link is clicked (for small screens only)
    $(".navbar-nav>li>a").on("click", function () {
      $(".navbar-collapse").removeClass("show");
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

  // Crea una regla que cuando se cierre el contenido desplegado la pagina se pone a la altura de #table-board-top
  window.addEventListener("load", function() {
    window.scrollTo(0, document.querySelector("main #table-board-top").offsetTop);
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

// Menu desplegable con submenus que funcione tanto en movil como en web
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

//
var dropdownMenu = document.querySelector('.menu-dropdown');
dropdownMenu.addEventListener('click', function() {
  this.classList.toggle('dropdown-active');
});

//
document.getElementById("td1").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("subcontenido").innerHTML = document.getElementById("texto-audio").innerHTML;
});

//   // 
//   const menuToggleTop = document.querySelector('.menu-toggle-top');
// const menu = document.querySelector('nav ul');

// menuToggleTop.addEventListener('click', () => {
//   menuToggleTop.classList.toggle('active');
//   menu.classList.toggle('active)');
  

// // 
// const btnBackToTop = document.querySelector('#btn-back-to-top');

// btnBackToTop.addEventListener('click', function(e) {
// e.preventDefault();
// window.scroll({
// top: 0,
// left: 0,
// behavior: 'smooth'
// });
// });

// window.addEventListener('scroll', function() {
// if (window.scrollY > 200) {
// btnBackToTop.style.display = 'block';
// } else {
// btnBackToTop.style.display = 'none';
// }
// })

// 
// function intercambiarTarjetas() {
//   var encabezadoInfo = document.querySelector('.encabezado-info');
//   var encabezadoArriba = document.querySelector('.encabezado-arriba');
//   var encabezadoAbajo = document.querySelector('.encabezado-abajo');
  
//   // Guardar la posición de la tarjeta superior
//   var arribaPosicion = encabezadoArriba.style.order;
  
//   // Intercambiar las posiciones de las tarjetas
//   encabezadoInfo.insertBefore(encabezadoAbajo, encabezadoArriba);
  
//   // Restaurar la posición de la tarjeta superior
//   encabezadoArriba.style.order = arribaPosicion;
// }

// // 
// function intercambiarTarjetas() {
//   var encabezadoInfo = document.querySelector('.encabezado-info');
//   var tarjeta1 = document.querySelector('.tarjeta-1');
//   var tarjeta2 = document.querySelector('.tarjeta-2');
  
//   // Intercambiar las posiciones de las tarjetas
//   encabezadoInfo.insertBefore(tarjeta2, tarjeta1);
// }

// // 
// function intercambiarTarjetas() {
//   var encabezadoInfo = document.querySelector('.encabezado-info');
//   var encabezadoArriba = document.querySelector('.encabezado-arriba');
//   var encabezadoAbajo = document.querySelector('.encabezado-abajo');
  
//   // Guardar la posición de la tarjeta superior
//   var arribaPosicion = encabezadoArriba.style.order;
  
//   // Intercambiar las posiciones de las tarjetas
//   encabezadoInfo.insertBefore(encabezadoAbajo, encabezadoArriba);
  
//   // Restaurar la posición de la tarjeta superior
//   encabezadoArriba.style.order = arribaPosicion;
// }

// setInterval(intercambiarTarjetas, 2000);

// // 
// function intercambiarTarjetas() {
//   var encabezadoInfo = document.querySelector('.encabezado-info');
//   var encabezadoArriba = document.querySelector('.encabezado-arriba');
//   var encabezadoAbajo = document.querySelector('.encabezado-abajo');

//   // Intercambiar las posiciones de las tarjetas
//   encabezadoInfo.insertBefore(encabezadoAbajo, encabezadoArriba);
// }

// // 
// // Obtener las dos tarjetas
// var tarjeta1 = document.querySelector('.tarjeta-1');
// var tarjeta2 = document.querySelector('.tarjeta-2');

// // Agregar event listeners a ambas tarjetas
// tarjeta1.addEventListener('click', intercambiarTarjetas);
// tarjeta2.addEventListener('click', intercambiarTarjetas);

// function intercambiarTarjetas() {
//   var encabezadoInfo = document.querySelector('.encabezado-info');
//   var encabezadoArriba = document.querySelector('.encabezado-arriba');
//   var encabezadoAbajo = document.querySelector('.encabezado-abajo');

//   // Guardar la posición de la tarjeta superior
//   var arribaPosicion = encabezadoArriba.style.order;

//   // Intercambiar las posiciones de las tarjetas
//   encabezadoInfo.insertBefore(encabezadoAbajo, encabezadoArriba);

//   // Restaurar la posición de la tarjeta superior
//   encabezadoArriba.style.order = arribaPosicion;
// }


// // Function intercambiarTarjetas: Esta funciona perfectamente!
var tarjeta1 = document.querySelector('.tarjeta-1');
var tarjeta2 = document.querySelector('.tarjeta-2');
var posicionOriginal = 1;

function intercambiarTarjetas() {
  var encabezadoInfo = document.querySelector('.encabezado-info');
  var encabezadoArriba = document.querySelector('.encabezado-arriba');
  var encabezadoAbajo = document.querySelector('.encabezado-abajo');
  
  if (posicionOriginal == 1) {
    encabezadoInfo.insertBefore(encabezadoAbajo, encabezadoArriba);
    posicionOriginal = 2;
  } else {
    encabezadoInfo.insertBefore(encabezadoArriba, encabezadoAbajo);
    posicionOriginal = 1;
  }
}


