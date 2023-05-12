const.toggleButton = document.getElementsByClassName(`toggleButton`)[0]
const.navbarlink = document.getElementsByClassName(`navbar-links`)[0]

toggleButton.addEventListener(`click`, () =>{
    navbarlinks.classList.toggle(`active`)
})