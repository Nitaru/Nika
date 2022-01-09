// let nika = [154, 3474, 96758, 234, 21, 57, 26,]

// nika.sort(function chemisortireba(a,b) {
//     return b - a
// })
// let aso = nika.find( el => {
//    return el < 150
// });

// console.log(aso)

// let ghilakebi = document.querySelectorAll(".btn");

// let gasuptaveba = document.querySelector("#reset");

// gasuptaveba.addEventListener('click', function () {
//     document.getElementById("salamaleiku").innerText = " "
// })

// ghilakebi.forEach(el =>{
//     el.addEventListener('click', function () {
//         document.getElementById('salamaleiku').innerText += this.innerText
//     })
// })

// let input = document.querySelector("#chemikaisimon")
// let patara = document.querySelector(".akak")

// input.addEventListener("keyup" , function () {
//     let values = this.value;
//     patara.removeAttribute("class")
//     if (values.length > 0 && values.length < 11) {
//         patara.innerText = "საჭიროა მინიმუმ 10 სიმბოლო"
//         patara.classList.add("text-warning")
//     }else if(values.length == ' '){
//         patara.innerText = "ველის შევსება სავალდებულოა"
//         patara.classList.add("text-danger")
//     }else{
//         patara.innerText = "კარგია"
//         patara.classList.add("text-white" , "bg-success")
//     }
// })

// ============= საშინაო =================
let menu = document.querySelector(".menu-btn");
let menuop = false;
menu.addEventListener('click', function () {
    if (!menuop) {
        menu.classList.add('open');
        menuop = true;
    }else{
        menu.classList.remove('open')
        menuop = false;
    }
});

let gaxsna = document.querySelector('modal')

let content = document.querySelector('dash')

gaxsna.addEventListener('click', function () {
    content.classList.add("appear")
})
