const overlay = document.querySelector('.overlay')
const dropdownMenu = document.querySelector('.dropdownMenu')

// Toggle Menu Overlay Mobile
function navToggle() {
    overlay.classList.toggle('overlay_active')
}

// Dropdown
function dropdownToggle(){
    console.log('masuk')
    dropdownMenu.classList.toggle('flex')
}