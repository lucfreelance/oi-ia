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


$(document).ready(function(){
    $("#subtabla td").click(function(){
        var contenido = $(this).find(".contenido").html();
        $("#subcontenido").html(contenido);
    });
});
