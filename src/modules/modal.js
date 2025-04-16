const modal = () => {
    const modal = document.querySelector('.popup')
    const modalPopup = modal.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
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
            // console.log()
            modalPopup.style.top = "50px"
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none"
        modalAnimation()
    })

    modalAnimation()


}

export default modal