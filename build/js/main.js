const initApp = () => {
    const hmBtn = document.getElementById('hamburger-button')
    const mblMn = document.getElementById('mobile-menu')



    const toggle = () => {
        mblMn.classList.toggle('hidden')
        hmBtn.classList.toggle('toggle-btn')
    }

    hmBtn.addEventListener('click', toggle)
    mblMn.addEventListener('click', toggle)

}

document.addEventListener('DOMContentLoaded', initApp)
console.log("Learning Tailwind CSS 🔥")
console.log("Tutoral at https://www.youtube.com/watch?v=lCxcTsOHrjo by Dave Gray")

