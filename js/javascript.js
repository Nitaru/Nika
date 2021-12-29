let students = [
    {
        name: "ნიკა",
        profilepic:"https://preview.redd.it/r5an6r0rbp061.jpg?width=640&crop=smart&auto=webp&s=cdcacee8b8c4a12a2df1c4a5d67481466b22aaf3",
        age: 16,
        regdate: "26//12/2021",
        coursetype: "front-end",
        attendance:     "100%",
        scholarhip: true,
    },
    {
        name: "გიორგი",
        profilepic:"https://qph.fs.quoracdn.net/main-qimg-0ab1ee9a9f35bd89ffecccf892b8df6c",
        age: 22,
        regdate: "05/12/2021",
        coursetype: "back-end",
        attendance: "50%",
        scholarhip: false,
    },
    {
        name: "მარი",
        profilepic:"https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg",
        age: 19,
        regdate: "12//10/2021",
        coursetype: "programireba",
        attendance: "90%",
        scholarhip: false,
    },
    {
        name: "ნინი",
        profilepic:"https://www.finetoshine.com/wp-content/uploads/2020/07/runa-yomozuki-anime-bearbeiten-anime-profile-picture-kakegurui-fan-art.jpg",
        age: 26,
        regdate: "26//12/2021",
        coursetype: "mark-up",
        attendance: "70%",
        scholarhip: false,
    },
    {
        name: "ანი",
        profilepic:"https://thypix.com/wp-content/uploads/2021/10/anime-avatar-profile-picture-thypix-62-700x700.jpg",
        age: 22,
        regdate: "18//08/2021",
        coursetype: "front-end",
        attendance: "60%",
        scholarhip: false,
    },
    {
        name: "არჩილი",
        profilepic:"https://lh5.googleusercontent.com/proxy/Am7Ura1vMpK_F9_bqFYHumJNx0O1--fKqS6xF3IsbEioRrndAhlD9IA-CPi6uhahw4zpMW43-0pECEKN-OUS-Vxatzavimy1wAHqmYJW7pCVmO9AQ82X6JySRHYItqeIo0ivFn0=s0-d",
        age: 23,
        regdate: "01//01/2021",
        coursetype: "back-end",
        attendance: "90%",
        scholarhip: false,
    },
    {
        name: "ზურა",
        profilepic:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/142581495/original/5ef8c08e98ccf349672b9a73c32575153d00e7c3/draw-an-anime-profile-picture-for-you.jpg",
        age: 24,
        regdate: "26//12/2021",
        coursetype: "programireba",
        attendance: "80%",
        scholarhip: false,
    },
    {
        name: "თორნიკე",
        profilepic:"https://cutewallpaper.org/22/anime-profile-picture-wallpapers/3005126266.jpg",
        age: 20,
        regdate: "13//04/2021",
        coursetype: "graphic-design",
        attendance: "50%",
        scholarhip: false,
    },
    {
        name: "ლიზი",
        profilepic:"https://i.pinimg.com/550x/d0/55/d4/d055d45e53415c48b4739faed0f51dbc.jpg",
        age: 19,
        regdate: "26//12/2021",
        coursetype: "front-end",
        attendance: "100%",
        scholarhip: true,
    },
    {
        name: "თეა",
        profilepic:"https://i.pinimg.com/736x/03/4b/de/034bde783ea726b922100c86547831e8.jpg",
        age: 22,
        regdate: "21//12/2021",
        coursetype: "programireba",
        attendance: "90%",
        scholarhip: false,
    }
]


function valueinformacia(id) {
    chasasmeli.innerHTML = '';

    let studentsfilter;
    if (id == 1) {
         studentsfilter = students.filter(el =>{
             return el.age == 22;
        })
    }if (id == 2) {
        studentsfilter = students.filter(el =>{
            return el.regdate == "26//12/2021"
        })
    }if (id == 3) {
        studentsfilter = students.filter(el =>{
            return el.coursetype == "programireba"
        })
    }if (id == 4) {
        studentsfilter = students.filter(el =>{
            return el.attendance == "100%"
        })
    }if (id == 5) {
        studentsfilter = students.filter(el =>{
            return el.scholarhip == true
        })
    }if (id == 0) {
        studentsfilter = students
    }

    infofilter(studentsfilter)
}

function search(text) {
    chasasmeli.innerHTML = '';

    let studentsfilter;

    studentsfilter = students.filter(el =>{
        return !el.name.search(text)
    })

    document.getElementById("result").innerHTML = `${studentsfilter.length} result`

    infofilter(studentsfilter)
}

function infofilter(studentsfilter) {
    studentsfilter.forEach( element =>{
        let daswreba
        if (element.attendance == "100%") {
            daswreba = `<span class="badge bg-info">წარმატებული</span>`
        } else{
            daswreba = `<span class="badge bg-danger">ნაკლებად წარმატებული</span>`
        }
        let stipendia
        if (element.scholarhip) {
            stipendia = `<span class="badge bg-success">სტიპენდიანტი</span>`
        } else{
    
        }
    
        chasasmeli.innerHTML += `
       <div class="col-lg-4 mb-3"> <div class="card" style="width: 18rem;">
      <img src="${element.profilepic}" class="card-img-top" alt="...">
      <div class="card-body">
        <h4 class="card-title">სახელი:${element.name}</h5>
        <h4 class="card-title">ასაკი:${element.age}</h5>
        <h5 class="card-title">${stipendia}</h5>
        <h5>თარიღი: ${element.regdate}<h5>
        <p class="card-text">კურსი:${element.coursetype}</p>
        <a href="#" class="btn mx-auto">${daswreba}</a>
      </div>
    </div>
        `
    }
    )
}





