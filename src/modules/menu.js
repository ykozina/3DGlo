'use strict'

const menu = () => {

    const smoothScroll = document.querySelector('body');
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');

    smoothScroll.style.scrollBehavior = "smooth";

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handleMenu)
    closeBtn.addEventListener('click', handleMenu)

    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))

}

export default menu