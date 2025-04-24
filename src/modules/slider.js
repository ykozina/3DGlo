'use strict'

const slider = (sliderWrapper, slide, activeSlide = 'slide-active', dotsWrapper, dot, activeDot = activeDot) => {

    const sliderBlock = document.querySelector(sliderWrapper);
    const slides = document.querySelectorAll(slide);
    const dots = [];
    const dotsList = document.querySelector(dotsWrapper)
    const timeInterval = 2000;

    let currentSlide = 0;
    let interval;

    if (sliderBlock === null || slides.length === 0) {
        return
    }

    const addDots = () => {
        for (let i = 0; i <= slides.length; i++) {
            const newDot = document.createElement('li');
            if (i === 0) {
                newDot.classList.add(dot, activeDot);
            } else {
                newDot.classList.add(dot);
            }

            dotsList.append(newDot);
            dots.push(newDot);
        }
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, activeSlide);
        prevSlide(dots, currentSlide, activeDot);
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        nextSlide(slides, currentSlide, activeSlide)
        nextSlide(dots, currentSlide, activeDot)

    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }

        prevSlide(slides, currentSlide, activeSlide);
        prevSlide(dots, currentSlide, activeDot);

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains(dot)) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, activeSlide)
        nextSlide(dots, currentSlide, activeDot)
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true)



    startSlide(timeInterval)
    addDots();

}

export default slider