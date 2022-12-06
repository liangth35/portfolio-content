var hidden = true
var left = true

var contact = document.getElementById('contactUs')
var homeform = document.querySelector('aside.home')
var navbutton = document.getElementById("b1")
var navlist = document.querySelector('nav')
// var send = document.getElementById('sendbutton')

navbutton.addEventListener('click', revert)
try{contact.addEventListener('click', hide)}
catch{}
// try{send.addEventListener('focus', hide)}
// catch{}


function hide() {
    if (hidden) {
        hidden=false
        contact.innerHTML='Hide'
        homeform.style.right='0'
    }
    else {
        hidden=true
        contact.innerHTML='Contact us!'
        homeform.style.right='-22em'
    }
}
function revert() {
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
