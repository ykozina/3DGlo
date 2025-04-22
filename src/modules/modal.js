const modal = () => {
    const modal = document.querySelector('.popup')
    const modalPopup = modal.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')
    const screenResolution = window.innerWidth;

    const modalAnimation = () => {
        if (screenResolution > 768) {
            modalPopup.style.top = "-100%"
            modalPopup.style.transitionProperty = "all"
            modalPopup.style.transitionDuration = "300ms"
            modalPopup.style.transitionTimingFunction = "linear"
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = "block"
            modal.getBoundingClientRect().top + 50
            modalPopup.style.top = "50px"
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })

    modalAnimation()


}

export default modal