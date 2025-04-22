'use strict'

const menu = () => {

    const smoothScroll = document.querySelector('body');
    const menu = document.querySelector('menu');

    smoothScroll.style.scrollBehavior = "smooth";

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    smoothScroll.addEventListener('click', (e) => {
        if (e.target.closest('.menu') || e.target.classList.contains('close-btn')) {
            e.preventDefault();
            handleMenu()
        } else if (e.target.matches('ul>li>a')) {
            e.preventDefault();
            const anchor = e.target.getAttribute('href');
            document.querySelector(`${anchor}`).scrollIntoView({ behavior: "smooth" })
            handleMenu()
        } else if (menu.classList.contains('active-menu') && !e.target.closest('menu')) {
            handleMenu();
        }
    })



}

export default menu