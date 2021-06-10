const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
const search = document.querySelector('.search')
const search_btn = document.querySelector('.search-btn')
const search_input = document.querySelector('.search-input')
const panels = document.querySelectorAll('.panel')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

search_btn.addEventListener('click', () => {
    search.classList.toggle('active')
    search_input.focus()
})

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('activePanel')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('activePanel')
    })
}