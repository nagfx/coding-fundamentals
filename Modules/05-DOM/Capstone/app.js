const header = document.querySelector('.header')
let isDown = false
                

window.addEventListener('mousemove', mouseHover)    

function mouseHover(e){
    e.preventDefault()

    if (e.clientY <= 80) {  
        header.classList.remove('nav__hidden')
    } else if ((isDown === true) && (e.clientY > 100)) {
        header.classList.add('nav__hidden')
    }
}

                
window.addEventListener('scroll', mouseScroll)   

function mouseScroll(e){
    e.preventDefault()
   if (window.scrollY >= 50){
    header.classList.add('nav__hidden')
    isDown = true
   } else {
    header.classList.remove('nav__hidden') 
    isDown = false
   }
}