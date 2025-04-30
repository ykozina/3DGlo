/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_calculate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculate */ \"./src/modules/calculate.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendform */ \"./src/modules/sendform.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('30 april 2025')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_calculate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('.portfolio-content', '.portfolio-item', '.portfolio-dots', 'dot', 'portfolio-item-active', 'dot-active')\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(100)\r\n;(0,_modules_sendform__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\r\n    formId: 'form1',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n    ]\r\n})\r\n\r\n;(0,_modules_sendform__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\r\n    formId: 'form2',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n    ]\r\n})\r\n\r\n;(0,_modules_sendform__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\r\n    formId: 'form3',\r\n    someElem: [\r\n        {\r\n            type: 'block',\r\n            id: 'total'\r\n        }\r\n    ]\r\n})\n\n//# sourceURL=webpack://3DGlo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n;\r\n\r\nconst calc = (price = 100) => {\r\n\r\n    const calcBlock = document.querySelector('.calc-block')\r\n    const calcType = document.querySelector('.calc-type')\r\n    const calcSquare = document.querySelector('.calc-square')\r\n    const calcCount = document.querySelector('.calc-count')\r\n    const calcDay = document.querySelector('.calc-day')\r\n    const total = document.getElementById('total')\r\n    let rollingDigits;\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n        const calcSquareValue = calcSquare.value;\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n        let counter = 0;\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5\r\n        }\r\n\r\n        if (calcTypeValue && calcSquareValue) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n        } else {\r\n            totalValue = 0\r\n        }\r\n\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 500,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                total.textContent = Math.floor(progress * totalValue)\r\n            }\r\n        });\r\n\r\n    }\r\n\r\n    calcBlock.addEventListener('change', (e) => {\r\n\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcCount || e.target === calcDay) {\r\n            countCalc()\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3DGlo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/calculate.js":
/*!**********************************!*\
  !*** ./src/modules/calculate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst calculate = () => {\r\n\r\n    const calcSquare = document.querySelector('.calc-square')\r\n    const calcCount = document.querySelector('.calc-count')\r\n    const calcDay = document.querySelector('.calc-day')\r\n\r\n    const onlyNumbers = (field) => {\r\n        field.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/, \"\")\r\n        })\r\n    }\r\n\r\n    onlyNumbers(calcSquare);\r\n    onlyNumbers(calcCount);\r\n    onlyNumbers(calcDay);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculate);\n\n//# sourceURL=webpack://3DGlo/./src/modules/calculate.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\n\r\n\r\nfunction animate({ timing, draw, duration }) {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://3DGlo/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst menu = () => {\r\n\r\n    const smoothScroll = document.querySelector('body');\r\n    const menu = document.querySelector('menu');\r\n\r\n    smoothScroll.style.scrollBehavior = \"smooth\";\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    smoothScroll.addEventListener('click', (e) => {\r\n        if (e.target.closest('.menu') || e.target.classList.contains('close-btn')) {\r\n            e.preventDefault();\r\n            handleMenu()\r\n        } else if (e.target.matches('ul>li>a')) {\r\n            e.preventDefault();\r\n            const anchor = e.target.getAttribute('href');\r\n            document.querySelector(`${anchor}`).scrollIntoView({ behavior: \"smooth\" })\r\n            handleMenu()\r\n        } else if (menu.classList.contains('active-menu') && !e.target.closest('menu')) {\r\n            handleMenu();\r\n        }\r\n    })\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3DGlo/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n    const modal = document.querySelector('.popup')\r\n    const modalPopup = modal.querySelector('.popup-content')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const screenResolution = window.innerWidth;\r\n\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = \"block\"\r\n\r\n            if (screenResolution > 768) {\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 500,\r\n                    timing(timeFraction) {\r\n                        return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        modal.style.opacity = progress\r\n                        modalPopup.style.top = progress * 50 + 'px';\r\n                    }\r\n                });\r\n            }\r\n        })\r\n    })\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none'\r\n        }\r\n    })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3DGlo/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst scroll = () => {\r\n\r\n    const scrollBtn = document.querySelector('main a');\r\n\r\n    scrollBtn.addEventListener('click', (link) => {\r\n        link.preventDefault();\r\n        const anchor = scrollBtn.getAttribute('href');\r\n\r\n        document.querySelector(`${anchor}`).scrollIntoView({ behavior: \"smooth\" })\r\n    })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://3DGlo/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendform.js":
/*!*********************************!*\
  !*** ./src/modules/sendform.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst sendForm = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId)\r\n    const statusBlock = document.createElement('div')\r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка'\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется'\r\n\r\n    console.log(formId)\r\n\r\n    const validate = (list) => {\r\n        let success = true\r\n        // list.forEach(input => {\r\n        //     if (input.classList.contains('success')) {\r\n        //         success = false\r\n        //     }\r\n        // })\r\n\r\n        return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n\r\n        statusBlock.textContent = loadText\r\n\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val\r\n        })\r\n\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n\r\n            if (elem.type === 'block') {\r\n                formBody[elem.id] = element.textContent\r\n            } else if (elem.type === 'input') {\r\n                formBody[elem.id] = element.value\r\n            }\r\n        })\r\n\r\n        console.log('submit');\r\n\r\n        if (validate(formElements)) {\r\n            sendData(formBody)\r\n                .then(data => {\r\n                    statusBlock.textContent = successText\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = ''\r\n                    })\r\n                })\r\n                .catch(error => {\r\n                    statusBlock.textContent = errorText\r\n                })\r\n        } else {\r\n            alert('Данные не валидны!')\r\n        }\r\n    }\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error('Верните форму на место, пожаааалуйста!')\r\n        }\r\n\r\n        form.addEventListener('submit', (event) => {\r\n            event.preventDefault()\r\n\r\n            submitForm()\r\n        })\r\n    } catch (error) {\r\n        console.log(error.messsage);\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3DGlo/./src/modules/sendform.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst slider = (sliderWrapper, slide, dotsWrapper, dot, activeSlide = 'slide-active', activeDot = 'active-dot') => {\r\n\r\n    const sliderBlock = document.querySelector(sliderWrapper);\r\n    const slides = document.querySelectorAll(slide);\r\n    const dots = [];\r\n    const dotsList = document.querySelector(dotsWrapper)\r\n    const timeInterval = 2000;\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n\r\n    if (sliderBlock === null || slides.length === 0) {\r\n        return\r\n    }\r\n\r\n    const addDots = () => {\r\n        for (let i = 0; i < slides.length; i++) {\r\n            const newDot = document.createElement('li');\r\n            if (i === 0) {\r\n                newDot.classList.add(dot, activeDot);\r\n            } else {\r\n                newDot.classList.add(dot);\r\n            }\r\n\r\n            dotsList.append(newDot);\r\n            dots.push(newDot);\r\n        }\r\n    }\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, activeSlide);\r\n        prevSlide(dots, currentSlide, activeDot);\r\n        currentSlide++;\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n        nextSlide(slides, currentSlide, activeSlide)\r\n        nextSlide(dots, currentSlide, activeDot)\r\n\r\n    }\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer)\r\n    }\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval)\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, activeSlide);\r\n        prevSlide(dots, currentSlide, activeDot);\r\n\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains(dot)) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index;\r\n                }\r\n            })\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, activeSlide)\r\n        nextSlide(dots, currentSlide, activeDot)\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide();\r\n        }\r\n    }, true)\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timeInterval);\r\n        }\r\n    }, true)\r\n\r\n\r\n\r\n    startSlide(timeInterval)\r\n    addDots();\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3DGlo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active')\r\n                    tabContent[index].classList.remove('d-none')\r\n                } else {\r\n                    tab.classList.remove('active')\r\n                    tabContent[index].classList.add('d-none')\r\n                }\r\n            })\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3DGlo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    let count = 0;\r\n\r\n    const timerHours = document.getElementById('timer-hours')\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        //let days = Math.floor((timeRemaining / 60 / 60) / 24)\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return { timeRemaining, hours, minutes, seconds }\r\n\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining(deadline);\r\n\r\n\r\n        // вариант \"в лоб\"\r\n        //\r\n\r\n        // if (getTime.hours >= 10) {\r\n        //     timerHours.textContent = getTime.hours\r\n        // } else {\r\n        //     timerHours.textContent = '0' + getTime.hours\r\n        // }\r\n\r\n        // if (getTime.minutes >= 10) {\r\n        //     timerMinutes.textContent = getTime.minutes\r\n        // } else {\r\n        //     timerMinutes.textContent = '0' + getTime.minutes\r\n        // }\r\n\r\n        // if (getTime.seconds >= 10) {\r\n        //     timerSeconds.textContent = getTime.seconds\r\n        // } else {\r\n        //     timerSeconds.textContent = '0' + getTime.seconds\r\n        // }\r\n\r\n        // оптимизированный сокращенный вариант\r\n        //\r\n\r\n        function formatTime(timeValue) {\r\n            return (timeValue >= 10) ? timeValue : '0' + timeValue;\r\n        }\r\n\r\n        timerHours.textContent = formatTime(getTime.hours);\r\n        timerMinutes.textContent = formatTime(getTime.minutes);\r\n        timerSeconds.textContent = formatTime(getTime.seconds);\r\n\r\n    }\r\n\r\n\r\n    let timerInterval = setInterval(() => {\r\n        let getTime = Math.floor(getTimeRemaining(deadline).timeRemaining);\r\n        count++\r\n        updateClock()\r\n\r\n        if (getTime <= 0) {\r\n            clearInterval(timerInterval)\r\n            timerHours.textContent = '00'\r\n            timerMinutes.textContent = '00'\r\n            timerSeconds.textContent = '00'\r\n        }\r\n    }, 1000)\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://3DGlo/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst validation = () => {\r\n\r\n    const formName = document.querySelectorAll('[id$=\"-name\"]')\r\n    const formEmail = document.querySelectorAll('[id$=\"-email\"]')\r\n    const formPhone = document.querySelectorAll('[id$=\"-phone\"]')\r\n    const formMessage = document.querySelectorAll('[id$=\"-message\"]')\r\n\r\n    const fieldCheck = (fieldType, regExp) => {\r\n        fieldType.forEach(field => {\r\n            field.addEventListener('blur', (e) => {\r\n                e.target.value = e.target.value.replace(regExp, \"\");\r\n                e.target.value = e.target.value.replace(/\\s{2,}/gi, \" \");\r\n                e.target.value = e.target.value.replace(/\\-{2,}/gi, \"-\");\r\n                e.target.value = e.target.value.replace(/^[\\s?\\-?]/gi, \"\");\r\n\r\n                if (field.getAttribute('type') == 'text') {\r\n                    const firstLetter = /( |^)(.){1}/gi\r\n\r\n                    e.target.value = e.target.value.replace(firstLetter, (str) => {\r\n                        return str.toUpperCase();\r\n                    })\r\n                }\r\n            })\r\n\r\n\r\n        })\r\n    }\r\n\r\n    fieldCheck(formName, /[^а-яА-Я\\s]/g)\r\n    fieldCheck(formEmail, /[^a-zA-Z0-9@\\-_\\.\\!\\~\\*']/g)\r\n    fieldCheck(formPhone, /[^0-9\\(\\)\\-\\s]/g)\r\n    fieldCheck(formMessage, /[^а-яА-Я\\s\\.\\-]/g)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://3DGlo/./src/modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;