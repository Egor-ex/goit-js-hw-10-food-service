import itemsTemplate from '../templates/menu.hbs'
import menu from '../menu.json'

const galleryRef = document.querySelector('.js-menu')
const markup = itemsTemplate(menu)

galleryRef.insertAdjacentHTML('beforeend', markup)



