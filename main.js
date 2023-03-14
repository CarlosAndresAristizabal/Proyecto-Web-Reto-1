const nav = document.querySelectorAll('.nav__lista__link');

nav.forEach(item => {
    item.addEventListener('click', e => {
        nav.forEach(item => {
            item.classList.remove('activo');
        });
        item.classList.add('activo');
    });
});