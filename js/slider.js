// slider.js
// Espera a que todo el contenido de la página se cargue
document.addEventListener("DOMContentLoaded", function () {
  // --- 1. CONFIGURACIÓN ---

  const imagenesDeFondo = [
    "../src/img/page_index/Bicentenario.jpg",
    "../src/img/page_index/Catedral.jpg",
    "../src/img/page_index/Pesca-DiqueCuestadelViento.jpg",
  ];

  // Tiempo entre cada cambio (en milisegundos)
  // 5000ms = 5 segundos
  const tiempoDeCambio = 2500;

  // --- 2. LÓGICA DEL SLIDER ---

  let indiceActual = 0;
  const heroSection = document.querySelector(".hero-section");

  function cambiarFondo() {
    // a. Desvanece la sección (Fade Out)
    heroSection.style.opacity = "0";

    // b. Espera a que termine la transición (1 segundo, como en el CSS)
    setTimeout(() => {
      // c. Calcula el índice de la siguiente imagen
      indiceActual = (indiceActual + 1) % imagenesDeFondo.length;

      // d. Prepara la nueva URL de la imagen
      const nuevaUrl = `url('${imagenesDeFondo[indiceActual]}')`;

      // e. Cambia la imagen de fondo MIENTRAS está invisible
      // ¡Importante! Debemos incluir la capa oscura (linear-gradient)
      // que teníamos en el CSS, porque 'style' sobrescribe la regla.
      heroSection.style.backgroundImage = `
        linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        ${nuevaUrl}
      `;

      // f. Vuelve a mostrar la sección (Fade In)
      heroSection.style.opacity = "1";
    }, 1000); // 1000ms = 1 segundo (debe coincidir con 'transition' en CSS)
  }

  // Inicia el carrusel: llama a la función cambiarFondo
  // cada 5 segundos (o el tiempo que definiste)
  setInterval(cambiarFondo, tiempoDeCambio);
});
