// Selecciona el botón
let button = document.getElementById("button");

// Agrega un listener para el evento "click"
button.addEventListener("click", function() {
  // Agrega la clase "clicked" al botón cuando es clicado
  button.classList.add("clicked");

  // Elimina la clase "clicked" después de un corto retraso (200ms)
  setTimeout(function() {
    button.classList.remove("clicked");
  }, 200);
});

document.getElementById('.button').forEach(function(enlace) {
    enlace.addEventListener('click', function(event) {
      event.preventDefault(); // Evita la acción predeterminada de los enlaces
  
      // Agrega una clase de animación al cuerpo de la página
      document.body.classList.add('animacion-salida');
  
      // Espera un corto tiempo antes de redirigir a la nueva página
      setTimeout(function() {
        window.location.href = button.href;
      }, 500); // Espera 0.5 segundos (ajustable según la duración de tu animación)
    });
  });