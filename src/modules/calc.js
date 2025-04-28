'use strict'
import { animate } from './helpers'

const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block')
    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.getElementById('total')
    let rollingDigits;

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = calcSquare.value;
        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;
        let counter = 0;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }

        if (calcTypeValue && calcSquareValue) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0
        }

        //total.textContent = totalValue
        //animateNumbers(totalValue)

        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                total.textContent = Math.floor(progress * totalValue)
            }
        });

    }

    calcBlock.addEventListener('change', (e) => {

        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc()
        }
    })

    // const animateNumbers = (sum) => {

    //     if (rollingDigits) {
    //         clearInterval(rollingDigits);
    //     }

    //     let counter = 0;

    //     rollingDigits = setInterval(() => {
    //         if (counter <= sum) {
    //             total.textContent = counter;
    //             counter += 100;
    //         } else {
    //             clearInterval(rollingDigits);
    //         }
    //     }, 30);
    // }

}

export default calc