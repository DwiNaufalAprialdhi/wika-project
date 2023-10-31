const overlay = document.querySelector('.overlay')
const dropdownMenu = document.querySelector('.dropdownMenu')

function navToggle() {
    overlay.classList.toggle('overlay_active')
}

function dropdownToggle(){
    console.log('masuk')
    dropdownMenu.classList.toggle('flex')
}