// Esperamos a que el documento cargue
document.addEventListener('DOMContentLoaded', () => {

    const miFormulario = document.getElementById('formularioContacto');
    const cajaMensaje = document.getElementById('mensajeExito');

    // FUNCIÓN 1: Modifica el texto y estilo del DOM
    function mostrarConfirmacion(nombre) {
        cajaMensaje.innerHTML = "<h3>¡Gracias, " + nombre + "!</h3><p>Tu mensaje ha sido enviado con éxito.</p>";
        
        // Aplicamos estilos directamente para que sea visible (Dinamismo)
        cajaMensaje.style.display = "block";
        cajaMensaje.style.backgroundColor = "#d4edda";
        cajaMensaje.style.color = "#155724";
        cajaMensaje.style.padding = "20px";
        cajaMensaje.style.marginTop = "20px";
        cajaMensaje.style.borderRadius = "10px";
        cajaMensaje.style.border = "2px solid #c3e6cb";
    }

    // FUNCIÓN 2: Gestiona el envío
    function alEnviar(evento) {
        evento.preventDefault(); // Detiene la recarga de la página
        
        const valorNombre = document.getElementById('nombre').value;
        console.log("Evento submit detectado para: " + valorNombre);
        
        // Llamamos a la otra función
        mostrarConfirmacion(valorNombre);
        
        // Limpiamos el formulario
        miFormulario.reset();
    }

    // EVENTO: Escuchar el envío
    if (miFormulario) {
        miFormulario.addEventListener('submit', alEnviar);
    }

    // Verificamos que el formulario existe en el HTML antes de usarlo
    if (miFormulario) {
        // Conectamos el evento 'submit' con tu función 'alEnviar'
        miFormulario.addEventListener('submit', alEnviar);
    }

});