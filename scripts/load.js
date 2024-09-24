const screen = document.querySelector('.load');

window.onload = function () {
    screen.classList.add('loading');
    setTimeout(function () {
        screen.classList.remove('loading')
        screen.classList.add('loaded');
    }, 3000);
};