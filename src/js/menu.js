// import menuTemplate from '../templates/menu.hbs';
// import menuMath from '../menu.json'


// const menu = menuTemplate(menuMath);
// // console.log(menuTemplate(menuMath))
// const menuRef = document.querySelector('.js-menu');
// menuRef.insertAdjacentHTML('beforeend', menu);

import menu from '../menu.json'
import itemsTemplate from '../templates/menu.hbs'

const galleryRef = document.querySelector('.js-menu')
const markup = itemsTemplate(menu)
console.log(itemsTemplate(menu))
galleryRef.insertAdjacentHTML('beforeend', markup)