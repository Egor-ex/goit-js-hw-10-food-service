


const switchToggle = document.querySelector('#theme-switch-toggle')
const bodyRef = document.querySelector("body")
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}

if(localStorage.getItem("theme")){
const checked = JSON.parse(localStorage.getItem("theme"))
    switchToggle.checked = checked
    switchToggle.checked
        ? onDarkTheme()
        : onLightTheme()
}

function checkboxState(event) {
    localStorage.setItem("theme", JSON.stringify(event.target.checked))
    event.target.checked
        ? onDarkTheme()
        : onLightTheme()
}

function onDarkTheme() {
    bodyRef.classList.add(Theme.DARK)
    bodyRef.classList.remove(Theme.LIGHT)
}

function onLightTheme() {
    bodyRef.classList.add(Theme.LIGHT)
    bodyRef.classList.remove(Theme.DARK)
}

switchToggle.addEventListener('change', checkboxState)