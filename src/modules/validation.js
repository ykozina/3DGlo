'use strict'

const validation = () => {

    const formName = document.querySelectorAll('[id$="-name"]')
    const formEmail = document.querySelectorAll('[id$="-email"]')
    const formPhone = document.querySelectorAll('[id$="-phone"]')
    const formMessage = document.querySelectorAll('[id$="-message"]')

    console.log(formMessage);

    const fieldCheck = (fieldType, regExp) => {
        fieldType.forEach(field => {
            field.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(regExp, "")
            })
        })
    }

    fieldCheck(formName, /[^а-яА-Я]/g)
    fieldCheck(formEmail, /[^a-zA-Z0-9@\-_\.\!\~\*']/g)
    fieldCheck(formPhone, /[^0-9\(\)\-]/g)
    fieldCheck(formMessage, /[^а-яА-Я\s\.\-]/g)
}

export default validation