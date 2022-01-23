
let left = document.querySelector('.arr.left')
let right = document.querySelector('.arr.right')
let allslider = document.querySelectorAll('.item')

right.addEventListener('click', function(){

    let allswitcherss = document.querySelectorAll('.slswith')
    let activeswitcherss = document.querySelector('.slswith.active')

    let active = document.querySelector('.item.active')
    active.classList.remove('active')
    activeswitcherss.classList.remove('active')
    if (active.nextElementSibling !== null) {
        active.nextElementSibling.classList.add('active')
        activeswitcherss.nextElementSibling.classList.add('active')
    }else{
        allslider[0].classList.add('active')
        allswitcherss[0].classList.add('active')
    }
    
})

left.addEventListener('click', function(){

    let allswitcherss = document.querySelectorAll('.slswith')
    let activeswitcherss = document.querySelector('.slswith.active')

    let active = document.querySelector('.item.active')
    active.classList.remove('active')
    activeswitcherss.classList.remove('active')
    if (active.previousElementSibling !== null) {
        active.previousElementSibling.classList.add('active')
        activeswitcherss.previousElementSibling.classList.add('active')
    }else{
        allslider[allslider.length - 1].classList.add('active')
        allswitcherss[allswitcherss.length - 1].classList.add('active')
    }
})

allslider.forEach((switcher, index)=>{
    let swt = document.createElement('span')
    index == 0 ? swt.classList.add('slswith', 'active') : swt.classList.add('slswith')
    swt.setAttribute('data-index', index)
    document.querySelector('.switchers').appendChild(swt)

    let switcherss = document.querySelectorAll('.slswith')
    switcherss.forEach(sws=>{
        sws.addEventListener('click', function(){
            let active = document.querySelector('.item.active')
            document.querySelector('.slswith.active').classList.remove('active')
            this.classList.add('active')
            let dataindex = this.getAttribute('data-index')
            active.classList.remove('active');
            allslider[dataindex].classList.add('active');
        })
    })
})