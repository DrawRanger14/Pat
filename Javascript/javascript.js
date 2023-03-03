const hamburgerButton = document.getElementById ('hamburger')
const navlist = document.getElementById ('nav-list')

function toggledButton() {
    navlist.classList.toggle ('show')
}

hamburgerButton.addEventListener ('click', toggledButton)