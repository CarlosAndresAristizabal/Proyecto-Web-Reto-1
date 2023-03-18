const nav = document.querySelectorAll('.nav-link');

nav.forEach(item => {
    item.addEventListener('click', e => {
        nav.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});