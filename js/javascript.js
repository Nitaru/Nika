
// document.querySelectorAll('.tabbtn').forEach(tab => {
//     tab.addEventListener('click', function () {
//         document.querySelector('.alltab button.active').classList.remove('active')
//         document.querySelector('.mytab.active').classList.remove('active')
//         this.classList.add('active')
//         document.querySelector(this.getAttribute('data-id')).classList.add('active')
//     })
// });

let firstcol = document.querySelector('.pirveli')
let card1 = document.querySelector('.card1')
let card2 = document.querySelector('.card2')

firstcol.addEventListener('click', function () {
    card1.classList.toggle('.changed')
    card2.classList.toggle('.changed2')
})