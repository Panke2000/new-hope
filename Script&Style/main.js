


/* SCREEN WIDTH */
/* Initial */
let screenWidth = window.innerWidth;
document.querySelector(':root').style.setProperty('--current-width', screenWidth + 'px');
console.log(screenWidth + 'px');
/* Uzima sirinu stranice i menja vrednost promenjive u CSS-u  */
window.onresize = (event) => {
    let widthInPixels = event.currentTarget.innerWidth + 'px';
    document.querySelector(':root').style.setProperty('--current-width', widthInPixels);
    /*console.log(widthInPixels);*/
    document.getElementById('current-width').innerHTML = widthInPixels;
};





/* HAMBURGER MENU */
let header = document.querySelector('header');
let menu = document.getElementById('header-mobile-hamburger');
let button = document.querySelector('#header-mobile-menu button');

button.addEventListener('click', (e) => {
    if (button.innerHTML === 'MENI') {

        document.querySelectorAll('.hamburger-link').forEach(el => {
            el.style.display = 'inherit';
        });

        menu.classList.remove('hide');

        button.innerHTML = 'SAKRIJ';
        button.style.backgroundColor = 'var(--color-dark-skin)';
        button.style.backgroundImage = `url('../Resources/Background-filler/header&footer-filler-dark.png')`;
        button.style.color = 'var(--color-light-skin)';
        header.style.minHeight = 'var(--header-height-hamburger)';

    } else if (button.innerHTML === 'SAKRIJ') {

        document.querySelectorAll('.hamburger-link').forEach(el => {
            el.style.display = 'none';
        });

        menu.classList.add('hide');

        button.innerHTML = 'MENI';
        button.style.backgroundColor = 'var(--color-light-skin)';
        button.style.backgroundImage = `url('../Resources/Background-filler/header&footer-filler.png')`;
        button.style.color = 'var(--color-dark-skin)';
        header.style.minHeight = 'var(--header-height)';
    }
});