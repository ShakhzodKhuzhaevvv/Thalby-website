const nav = document.querySelector('.header_body');
const burger = document.querySelector('.burger_menu');
const lists = document.querySelectorAll('.header_menu_lists')

burger.addEventListener('click', () =>{
    nav.classList.toggle('open');
})
lists.forEach(elem => {
    elem.addEventListener('click', () => {
    nav.classList.remove('open')
})
})
