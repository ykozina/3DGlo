'use strict'

const calculate = () => {

    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')

    const onlyNumbers = (field) => {
        field.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "")
        })
    }

    onlyNumbers(calcSquare);
    onlyNumbers(calcCount);
    onlyNumbers(calcDay);

}

export default calculate