import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import calculate from './modules/calculate';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';

timer('30 april 2025')
menu()
modal()
scroll()
calculate()
validation()
tabs()
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots', 'dot', 'portfolio-item-active', 'dot-active')
calc(100)