// Espera a que todo el contenido de la página se cargue
document.addEventListener("DOMContentLoaded", function () {
  // --- 1. CONFIGURACIÓN ---

  const imagenesDeFondo = [
    "../src/img/page_index/Bicentenario.jpg",
    "../src/img/page_index/Catedral.jpg",
    "../src/img/page_index/Pesca-DiqueCuestadelViento.jpg",
  ];

  // Tiempo entre cada cambio (en milisegundos)
  const tiempoDeCambio = 25000;

  // --- 2. LÓGICA DEL SLIDER ---

  let indiceActual = 0;
  const heroSection = document.querySelector(".hero-section");

  function cambiarFondo() {
    // Desvanece la sección (Fade Out)
    heroSection.style.opacity = "0";

    // Espera a que termine la transición (1 segundo, como en el CSS)
    setTimeout(() => {
      // Calcula el índice de la siguiente imagen
      indiceActual = (indiceActual + 1) % imagenesDeFondo.length;

      // Prepara la nueva URL de la imagen
      const nuevaUrl = `url('${imagenesDeFondo[indiceActual]}')`;

      // Cambia la imagen de fondo MIENTRAS está invisible
      heroSection.style.backgroundImage = `
        linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        ${nuevaUrl}
      `;

      // Vuelve a mostrar la sección
      heroSection.style.opacity = "1";
    }, 1500);
  }
  setInterval(cambiarFondo, tiempoDeCambio);
});
