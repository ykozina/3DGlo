'use strict'

const menu = () => {

    const smoothScroll = document.querySelector('body');
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const bodySections = document.querySelectorAll('body > div:has(.container)')

    smoothScroll.style.scrollBehavior = "smooth";

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handleMenu)
    closeBtn.addEventListener('click', handleMenu)

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (link) => {
            link.preventDefault();
            const anchor = menuItem.getAttribute('href');

            document.querySelector(`${anchor}`).scrollIntoView({ behavior: "smooth" })
            handleMenu()
        })
    })


}

export default menu