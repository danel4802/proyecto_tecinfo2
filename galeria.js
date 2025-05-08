document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.galeria-container img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            const altTexto = this.alt;
            alert(`Has hecho clic en: ${altTexto}`);
            // Aquí podrías agregar más funcionalidad, como mostrar la imagen en un modal
        });
    });
});