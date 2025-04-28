import { animate } from './helpers'

const modal = () => {
    const modal = document.querySelector('.popup')
    const modalPopup = modal.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')
    const screenResolution = window.innerWidth;


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = "block"

            if (screenResolution > 768) {
                animate({
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress
                        modalPopup.style.top = progress * 50 + 'px';
                    }
                });
            }
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })


}

export default modal