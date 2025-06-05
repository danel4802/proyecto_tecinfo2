document.addEventListener('DOMContentLoaded', function() {
    const botonPDF = document.getElementById('descargarPDF');

    botonPDF.addEventListener('click', function() {
        // Reemplaza 'ruta/a/tu/archivo.pdf' con la ruta real de tu PDF
        const urlPDF = 'ruta/a/tu/archivo.pdf';

        // Abre el PDF en una nueva pestaña del navegador
        // Si quieres que se descargue directamente, usa la siguiente línea en lugar de window.open:
        // window.location.href = urlPDF;
        window.open(urlPDF, '_blank');

        alert('¡Abriendo el archivo PDF con información importante!');
    });
});
