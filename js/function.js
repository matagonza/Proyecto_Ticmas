let boton = document.getElementById("boton");
boton.addEventListener("click", preguntarNombre);

let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");

function preguntarNombre() {
    let nombre = prompt("Introduce tu nombre");
    mostrarNombre(nombre);
}
function mostrarNombre(nombre) {
    h1.textContent = nombre;
    h2.textContent = "Gracias por visitar mi Cv Web";
}




