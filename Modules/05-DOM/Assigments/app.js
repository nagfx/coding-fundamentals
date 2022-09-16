const add__button = document.querySelector('.add__button')
const notification__hidden = document.querySelector('.notification')
const show = document.querySelector('.show')
const card__cta = document.querySelector('.card__cta')

add__button.addEventListener('click', addFunction)

function addFunction(e){
        e.preventDefault()
    notification__hidden.classList.add('show')
}

card__cta.addEventListener('click', closeCard)

function closeCard(e) {
    e.preventDefault()
    notification__hidden.classList.remove('show')
}