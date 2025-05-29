document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const resetButton = document.getElementById('resetButton');
    const infoSections = document.querySelectorAll('.info-section');
    const ctaSection = document.getElementById('ctaSection');
    const toggleButtons = document.querySelectorAll('.toggle-button');

    // Función para mostrar una sección con animación
    const showSection = (sectionId) => {
        infoSections.forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('visible');
        });
        ctaSection.classList.add('hidden');
        ctaSection.classList.remove('visible');

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            setTimeout(() => { // Pequeño retraso para que la animación se aplique
                targetSection.classList.add('visible');
            }, 50);
        }
    };

    // Event listener para el botón de inicio
    startButton.addEventListener('click', () => {
        showSection('importanciaAcademica');
    });

    // Event listeners para los botones de alternar sección
    toggleButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.target.dataset.target;
            showSection(targetId);

            // Si llegamos a la última sección de información, mostramos el CTA
            if (targetId === 'importanciaAcademica' && event.target.textContent.includes('Volver')) {
                 // No hacer nada especial si es el botón de volver desde ideas
            } else if (targetId === 'ideasDesayuno') {
                setTimeout(() => {
                    ctaSection.classList.remove('hidden');
                    ctaSection.classList.add('visible');
                }, 700); // Retraso para que aparezca después de la sección
            }
        });
    });

    // Event listener para el botón de reinicio
    resetButton.addEventListener('click', () => {
        infoSections.forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('visible');
        });
        ctaSection.classList.add('hidden');
        ctaSection.classList.remove('visible');
    });
});
