import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import calculate from './modules/calculate';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendform';

timer('30 april 2025')
menu()
modal()
scroll()
calculate()
validation()
tabs()
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots', 'dot', 'portfolio-item-active', 'dot-active')
calc(100)
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})

sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})

sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})