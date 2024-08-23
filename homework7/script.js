let btn = document.querySelectorAll('.scroll-btn')
let btnScroll = document.querySelector('.scroll-active')

btn.forEach(function (e) {
    e.addEventListener('click', function() {
        btn.forEach(i => {
            i.classList.remove('active')
        })
        e.classList.add('active')
        if (e.classList.contains('btnStart')) {
            btnScroll.style.top = '0';
        }
        else if (e.classList.contains('btn1')) {
            btnScroll.style.top = '25%';
        }
        else if (e.classList.contains('btn2')) {
            btnScroll.style.top = '50%';
        }
        else if (e.classList.contains('btn3')) {
            btnScroll.style.top = '75%';
        }
    })
})
//бургер
let burgerBtm = document.querySelector('.header-burger')
let popup = document.querySelector('.popup')
let popupConteiner = document.querySelectorAll('.popup-conteiner')
let main = document.querySelector('main')
let body = document.querySelector('body')


// При клике на бургер переключаем стили
function burgerHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open')
    burgerBtm.classList.toggle('active')
    main.classList.toggle('black')
    body.classList.toggle('noscrol')
}

burgerBtm.addEventListener('click', burgerHandler)

//при клике на любой элемент в бургере, закрываем его
let links = Array.from(popupConteiner)

links.forEach((link) => {
    link.addEventListener('click', closeBurger)
})

function closeBurger () {
    popup.classList.add('open')
    burgerBtm.classList.add('active')
    main.classList.remove('black')
    body.classList.remove('noscrol')

}
