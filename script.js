// Funcionalidad para hacer que la barra de navegación se pegue en la parte superior al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

// Funcionalidad para animar las secciones cuando se desplazan en la pantalla
const sections = document.querySelectorAll('section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Ejecutar la función una vez al cargar la página
