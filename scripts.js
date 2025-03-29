console.log(document.title);
// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

const title = document.getElementById("gen-1");
title.innerText = "Generasión 1 Pokimon";

// 2. Cambia el color de fondo de la primera generación de Pokimon.
const primeraGen = document.querySelectorAll(".infocard-list");
primeraGen[0].style.background = "grey";
// 3. Imprime por consola la URL de la página.
console.log(document.URL);

// 4. Imprime por consola el dominio de la página.
console.log(document.domain);

// 5. Imprime todos los nodos de imagen.
const images = document.querySelectorAll("img");
console.log(images);

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
const nuevoGif = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
images.forEach((image) => {
  image.src = nuevoGif;
});
// *Premium:*

// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`
const flying = document.querySelectorAll(".itype.flying");
flying.forEach((fly) => {
  const contenedorPadre = fly.closest(".infocard-lg-data.text-muted");
  contenedorPadre.style.background = "lightgreen";
});
