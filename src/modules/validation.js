'use strict'

const validation = () => {

    const formName = document.querySelectorAll('[id$="-name"]')
    const formEmail = document.querySelectorAll('[id$="-email"]')
    const formPhone = document.querySelectorAll('[id$="-phone"]')
    const formMessage = document.querySelectorAll('[id$="-message"]')

    const fieldCheck = (fieldType, regExp) => {
        fieldType.forEach(field => {
            field.addEventListener('blur', (e) => {
                e.target.value = e.target.value.replace(regExp, "");
                e.target.value = e.target.value.replace(/\s{2,}/gi, " ");
                e.target.value = e.target.value.replace(/\-{2,}/gi, "-");
                e.target.value = e.target.value.replace(/^[\s?\-?]/gi, "");

                if (field.getAttribute('type') == 'text') {
                    const firstLetter = /( |^)(.){1}/gi

                    e.target.value = e.target.value.replace(firstLetter, (str) => {
                        return str.toUpperCase();
                    })
                }
            })


        })
    }

    fieldCheck(formName, /[^а-яА-Я\s]/g)
    fieldCheck(formEmail, /[^a-zA-Z0-9@\-_\.\!\~\*']/g)
    fieldCheck(formPhone, /[^0-9\(\)\-\s]/g)
    fieldCheck(formMessage, /[^а-яА-Я\s\.\-]/g)
}

export default validation