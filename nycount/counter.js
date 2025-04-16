'use strict'

const showText = document.querySelector('.main');
const dayTime = ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'];
const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']

let date = new Date();
let weekDay = date.getDay();
let greeting = '';

const daysTillNewYear = () => {
    let newYear = new Date('31 december 2025').getTime();
    let currentDay = new Date().getTime();
    let timeLeft = (newYear - currentDay) / 1000;
    let days = Math.floor((timeLeft / 60 / 60) / 24)

    return days;
}


if (weekDay === 0) {
    weekDay = 6;
} else {
    weekDay--;
}

if (date.getHours() >= 0 && date.getHours() < 7) {
    greeting = dayTime[3]
} else if (date.getHours() >= 7 && date.getHours() < 12) {
    greeting = dayTime[0]
} else if (date.getHours() >= 12 && date.getHours() < 18) {
    greeting = dayTime[1]
} else {
    greeting = dayTime[2]
}

showText.innerHTML = `
${greeting}! <br> Сегодня ${week[weekDay]}, текущее время ${date.toLocaleTimeString('ru')}. <br> До нового года осталось ${daysTillNewYear()} дней.`
