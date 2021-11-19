const menuButtons = document.querySelectorAll('.menu-li');
const contents = document.querySelectorAll('.content');

menuButtons.forEach((menuButton, idx) =>{
  menuButton.addEventListener('click', () =>{
    removeActiveClasses()
    hideAllContents()
    menuButton.classList.add('menu-li-active')
    contents[idx].classList.add('show')
  })
})

function removeActiveClasses() {
    menuButtons.forEach(menuButton => {
        menuButton.classList.remove('menu-li-active')
    })
}

function hideAllContents() {
  contents.forEach(content => content.classList.remove('show') )
}
