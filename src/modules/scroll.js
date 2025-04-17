'use strict'

const scroll = () => {

    const scrollBtn = document.querySelector('main a');

    scrollBtn.addEventListener('click', (link) => {
        link.preventDefault();
        const anchor = scrollBtn.getAttribute('href');

        document.querySelector(`${anchor}`).scrollIntoView({ behavior: "smooth" })
    })


}

export default scroll