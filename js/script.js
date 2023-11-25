const hamburguer = document.querySelector('.hamburguer');
const cerrar = document.querySelector('.x');
const nav = document.querySelector('.nav');

hamburguer.addEventListener('click', () => {
    nav.style.transform = 'translateX(0)';

    nav.addEventListener('click', () => {
        nav.style.transform = 'translateX(100%)';

    })
})

particlesJS.load('particles-js', '../particles.json', function() {
    console.log('callback - particles.js config loaded');
});