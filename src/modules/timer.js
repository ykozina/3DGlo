const timer = (deadline) => {
    let count = 0;

    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        //let days = Math.floor((timeRemaining / 60 / 60) / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, hours, minutes, seconds }

    }

    const updateClock = () => {
        let getTime = getTimeRemaining(deadline);


        // вариант "в лоб"
        //

        // if (getTime.hours >= 10) {
        //     timerHours.textContent = getTime.hours
        // } else {
        //     timerHours.textContent = '0' + getTime.hours
        // }

        // if (getTime.minutes >= 10) {
        //     timerMinutes.textContent = getTime.minutes
        // } else {
        //     timerMinutes.textContent = '0' + getTime.minutes
        // }

        // if (getTime.seconds >= 10) {
        //     timerSeconds.textContent = getTime.seconds
        // } else {
        //     timerSeconds.textContent = '0' + getTime.seconds
        // }

        // оптимизированный сокращенный вариант
        //

        function formatTime(timeValue) {
            return (timeValue >= 10) ? timeValue : '0' + timeValue;
        }

        timerHours.textContent = formatTime(getTime.hours);
        timerMinutes.textContent = formatTime(getTime.minutes);
        timerSeconds.textContent = formatTime(getTime.seconds);

    }


    let timerInterval = setInterval(() => {
        let getTime = Math.floor(getTimeRemaining(deadline).timeRemaining);
        count++
        updateClock()

        if (getTime <= 0) {
            clearInterval(timerInterval)
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'
        }
    }, 1000)

}

export default timer