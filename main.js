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

// // función que devuelve el contenido correspondiente al id de enlace
// function obtenerContenido(enlaceId) {
//   switch (enlaceId) {
//     case 'enlace0':
//       return '<h2>Contenido 0</h2><p>Este es el contenido 0.</p>';
//     case '1':
//       return '<h2>Contenido 1</h2><p>Este es el contenido 1.</p>';
//     case '2':
//       return '<h2>Contenido 2</h2><p>Este es el contenido 2.</p>';
//     case '3':
//       return '<h2>Contenido 3</h2><p>Este es el contenido 3.</p>';
//     case '4':
//       return '<h2>Contenido 4</h2><p>Este es el contenido 4.</p>';
//     case '5':
//       return '<h2>Contenido 5</h2><p>Este es el contenido 5.</p>';
//     case '6':
//       return '<h2>Contenido 6</h2><p>Este es el contenido 6.</p>';
//     case '7':
//       return '<h2>Contenido 7</h2><p>Este es el contenido 7.</p>';
//     case '8':
//       return '<h2>Contenido 8</h2><p>Este es el contenido 8.</p>';
//     case '9':
//       return '<h2>Contenido 9</h2><p>Este es el contenido 9.</p>';
//     case '10':
//       return '<h2>Contenido 10</h2><p>Este es el contenido 10.</p>';
//     case '11':
//       return '<h2>Contenido 11</h2><p>Este es el contenido 11.</p>';
//     case '12':
//       return '<h2>Contenido 12</h2><p>Este es el contenido 12.</p>';
//     case '13':
//       return '<h2>Contenido 13</h2><p>Este es el contenido 13.</p>';
//     case '14':
//       return '<h2>Contenido 14</h2><p>Este es el contenido 14.</p>';
//     case '15':
//       return '<h2>Contenido 15</h2><p>Este es el contenido 15.</p>';
//     case '16':
//       return '<h2>Contenido 16</h2><p>Este es el contenido 16.</p>';
//     case '17':
//       return '<h2>Contenido 17</h2><p>Este es el contenido 17.</p>';
//     case '18':
//       return '<h2>Contenido 18</h2><p>Este es el contenido 18.</p>';
//     case '19':
//       return '<h2>Contenido 19</h2><p>Este es el contenido 19.</p>';
//     case '20':
//       return '<h2>Contenido 20</h2><p>Este es el contenido 20.</p>';
//     case '21':
//       return '<h2>Contenido 21</h2><p>Este es el contenido 21.</p>';
//     case '22':
//       return '<h2>Contenido 22</h2><p>Este es el contenido 22.</p>';
//     case '23':
//       return '<h2>Contenido 23</h2><p>Este es el contenido 23</p>';
// 	    }
// }

// //
// function obtenerContenido(id) {
//   switch (id) {
//     case 'enlace0':
//       return {
//         titulo: '<h2>Contenido 0</h2>',
//         contenido: '<p>Este es el contenido 0.</p>'
//       };
//     case '1':
//       return {
//         titulo: '<h2>Contenido 1</h2>',
//         contenido: '<p>Este es el contenido 1.</p>'
//       };
//     case '2':
//       return {
//         titulo: '<h2>Contenido 2</h2>',
//         contenido: '<p>Este es el contenido 2.</p>'
//       };
//     // ... y así sucesivamente para las demás opciones del switch
//   }
// }
