let hidden = document.querySelector('.hidden')
let more = document.querySelector('.more')

more.addEventListener('click', show)

function show() {
    hidden.classList.toggle('show')
}

