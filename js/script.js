var contact = document.getElementById('contactUs')
var form = document.querySelector('aside.home')
var navbutton = document.querySelector('nav button')
var navlist = document.querySelector('nav')
var hidden = true
var left = true

contact.addEventListener(`click`, hide)
navbutton.addEventListener(`click`, right)

function hide() {
    if (hidden) {
        hidden=false
        contact.innerHTML='Hide'
        form.style.right='0'
    }
    else {
        hidden=true
        contact.innerHTML='Contact us!'
        form.style.right='-11em'
    }
}
function right() {
    if (left) {
        left=false
        navbutton.innerHTML='To the left'
        navbutton.style.right='unset'
        navbutton.style.left='0'
        navlist.classList.add("revert")
    }
    else {
        left=true
        navbutton.innerHTML='To the right'
        navbutton.style.right='0'
        navbutton.style.left='unset'
        navlist.classList.remove("revert")
    }
}
