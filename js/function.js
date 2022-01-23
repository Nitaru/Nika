let navtag = document.querySelector('.navbar')

window.addEventListener('scroll', function(){
    if (window.scrollY > 10) {
        navtag.classList.add('changed')
    }else{
        navtag.classList.remove('changed')
    }
})