// let stringi = "es aris chemi pirveli stringi"

// let chamatebuli = "chamatebuli sityva"

// console.log(stringi.slice(3, 8))

// let modzebna = stringi.search("chemi")

// console.log(modzebna)

// console.log(stringi.includes("pirveli"))

// console.log(stringi.replace("pirveli", "meore"))

// console.log(stringi.startsWith("es"))

// console.log(stringi.toUpperCase())

// console.log(stringi.trim())

// console.log("es aris chemi " + chamatebuli + " pirveli stringi")

// console.log(stringi.split(" "))

// console.log(stringi.match(/es/aris/pirveli/))

// let price = "81.345";

// let weight = "22.34123";

// let FinalPrice = Number(price) * Number(weight);

// console.log(FinalPrice.toFixed(), FinalPrice.toFixed(1), FinalPrice.toFixed(2))

// console.log(typeof(FinalPrice))

// function chemifunqcia (img, linki, selector) {
//  let mystring =  `<div class="card" style="width: 18rem;">
//   <img src="${img}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="${linki}" target="_blank" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`

//    document.getElementById(selector).innerHTML = mystring;
// }

// chemifunqcia("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", "https://getbootstrap.com/docs/5.1/components/card/", "pasi")

// chemifunqcia("https://media.istockphoto.com/photos/beautiful-panoramic-view-of-tbilisi-at-sunset-picture-id476813550?k=20&m=476813550&s=612x612&w=0&h=nkgs_znOulcr77969-rB-mQ4Tyr8qN53crzMASFZlDU=", "https://mystat.itstep.org/en/main/dashboard/page/index", "wona")

// function funqcia (farenheit) {
//   let celcius = (farenheit - 32) * (5/9)
//   return celcius
// }

// let pasuxi = funqcia(128)

// console.log(pasuxi.toFixed(2))

// document.getElementById("ubra").innerHTML = pasuxi;

// let user = {
//     saxeli: "admin",
//     mail: "adminivar@gmail.com",
//     teleponi: "559-33-43-43",
//     statusi: 1,
//     raodenoba: function(){
//         if (this.statusi !== 1) {
//             return false
//         }
//         return true
//     },

// };

// let key = Object.keys(user)
// let val = Object.values(user)
// let yvela = Object.entries(user)

// console.log(key)
// console.log(val)
// console.log(yvela)

// user.mail = "sxvamail"
// console.log(user.mail)

// let newarray = ["es", "aris", "chemi", "pirveli", "masivi"]

// newarray.unshift("chamatebuli")

// newarray.push("esec")

// newarray.shift()

// newarray.pop()

// console.log(newarray)

// let auto = ["Ford", "Mustang", 5.4, ["V6", "V8"], 
// {
// variant:"boss 302", 
// variant2:"Shelby",
// variant3:"Saalen", 
// year:["2018", "2022"]
// }
// ];

// let newstring = `${auto[0]} ${auto[1]} გამოდის ${auto[2]} ${auto[3][1]} ტიპის ძრავით,ასევე მისი მოდიფიკაციებია ${auto[4].variant}, ${auto[4].variant2}, საუკეთესო მოდელები გამოდიოდა ${auto[4].year[0]} დან ${auto[4].year[1]}წლამდე`

// console.log(newstring)

// ============= mpiltravi ==============

// let studentebi = [
//     {
//     name: "ნიკა",
//     profilepic:"https://preview.redd.it/r5an6r0rbp061.jpg?width=640&crop=smart&auto=webp&s=cdcacee8b8c4a12a2df1c4a5d67481466b22aaf3",
//     age: 16,
//     regdate: "26//12/2021",
//     coursetype: "front-end",
//     attendance:     "100%",
//     scholarhip: true,
// },
// {
//     name: "გიორგი",
//     profilepic:"https://qph.fs.quoracdn.net/main-qimg-0ab1ee9a9f35bd89ffecccf892b8df6c",
//     age: 22,
//     regdate: "05/12/2021",
//     coursetype: "back-end",
//     attendance: "50%",
//     scholarhip: false,
// },
// {
//     name: "მარი",
//     profilepic:"https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg",
//     age: 19,
//     regdate: "12//10/2021",
//     coursetype: "programireba",
//     attendance: "90%",
//     scholarhip: false,
// },
// {
//     name: "ნინი",
//     profilepic:"https://www.finetoshine.com/wp-content/uploads/2020/07/runa-yomozuki-anime-bearbeiten-anime-profile-picture-kakegurui-fan-art.jpg",
//     age: 26,
//     regdate: "26//12/2021",
//     coursetype: "mark-up",
//     attendance: "70%",
//     scholarhip: false,
// },
// {
//     name: "ანი",
//     profilepic:"https://thypix.com/wp-content/uploads/2021/10/anime-avatar-profile-picture-thypix-62-700x700.jpg",
//     age: 22,
//     regdate: "18//08/2021",
//     coursetype: "front-end",
//     attendance: "60%",
//     scholarhip: false,
// },
// {
//     name: "არჩილი",
//     profilepic:"https://lh5.googleusercontent.com/proxy/Am7Ura1vMpK_F9_bqFYHumJNx0O1--fKqS6xF3IsbEioRrndAhlD9IA-CPi6uhahw4zpMW43-0pECEKN-OUS-Vxatzavimy1wAHqmYJW7pCVmO9AQ82X6JySRHYItqeIo0ivFn0=s0-d",
//     age: 23,
//     regdate: "01//01/2021",
//     coursetype: "back-end",
//     attendance: "90%",
//     scholarhip: false,
// },
// {
//     name: "ზურა",
//     profilepic:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/142581495/original/5ef8c08e98ccf349672b9a73c32575153d00e7c3/draw-an-anime-profile-picture-for-you.jpg",
//     age: 24,
//     regdate: "26//12/2021",
//     coursetype: "programireba",
//     attendance: "80%",
//     scholarhip: false,
// },
// {
//     name: "თორნიკე",
//     profilepic:"https://cutewallpaper.org/22/anime-profile-picture-wallpapers/3005126266.jpg",
//     age: 20,
//     regdate: "13//04/2021",
//     coursetype: "graphic-design",
//     attendance: "50%",
//     scholarhip: false,
// },
// {
//     name: "ლიზი",
//     profilepic:"https://i.pinimg.com/550x/d0/55/d4/d055d45e53415c48b4739faed0f51dbc.jpg",
//     age: 19,
//     regdate: "26//12/2021",
//     coursetype: "front-end",
//     attendance: "100%",
//     scholarhip: true,
// },
// {
//     name: "თეა",
//     profilepic:"https://i.pinimg.com/736x/03/4b/de/034bde783ea726b922100c86547831e8.jpg",
//     age: 22,
//     regdate: "21//12/2021",
//     coursetype: "programireba",
//     attendance: "90%",
//     scholarhip: false,
// }
// ]


// function valueinformacia(id) {
// chasasmeli.innerHTML = '';

// let studentsfilter;
// if (id == 1) {
//      studentsfilter = students.filter(el =>{
//          return el.age == 22;
//     })
// }if (id == 2) {
//     studentsfilter = students.filter(el =>{
//         return el.regdate == "26//12/2021"
//     })
// }if (id == 3) {
//     studentsfilter = students.filter(el =>{
//         return el.coursetype == "programireba"
//     })
// }if (id == 4) {
//     studentsfilter = students.filter(el =>{
//         return el.attendance == "100%"
//     })
// }if (id == 5) {
//     studentsfilter = students.filter(el =>{
//         return el.scholarhip == true
//     })
// }if (id == 0) {
//     studentsfilter = students
// }

// infofilter(studentsfilter)
// }

// function search(text) {
// chasasmeli.innerHTML = '';

// let studentsfilter;

// studentsfilter = students.filter(el =>{
//     return !el.name.search(text)
// })

// document.getElementById("result").innerHTML = `${studentsfilter.length} result`

// infofilter(studentsfilter)
// }

// function infofilter(studentsfilter) {
// studentsfilter.forEach( element =>{
//     let daswreba
//     if (element.attendance == "100%") {
//         daswreba = `<span class="badge bg-info">წარმატებული</span>`
//     } else{
//         daswreba = `<span class="badge bg-danger">ნაკლებად წარმატებული</span>`
//     }
//     let stipendia
//     if (element.scholarhip) {
//         stipendia = `<span class="badge bg-success">სტიპენდიანტი</span>`
//     } else{
//         stipendia = ""
//     }

//     chasasmeli.innerHTML += `
//    <div class="col-lg-4 mb-3"> <div class="card" style="width: 18rem;">
//   <img src="${element.profilepic}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h4 class="card-title">სახელი:${element.name}</h5>
//     <h4 class="card-title">ასაკი:${element.age}</h5>
//     <h5 class="card-title">${stipendia}</h5>
//     <h5>თარიღი: ${element.regdate}<h5>
//     <p class="card-text">კურსი:${element.coursetype}</p>
//     <a href="#" class="btn mx-auto">${daswreba}</a>
//   </div>
// </div>
//     `
// }
// )
// }





