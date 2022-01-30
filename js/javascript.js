let startquiz = document.querySelector('.startquiz');
let quizbody = document.querySelector('.quiz');
startquiz.addEventListener('submit', function (e) {
    e.preventDefault();
    let level = document.querySelector('select[name="level"]').value
    startquiz.parentElement.parentElement.classList.add('d-none')
    quizbody.classList.remove('d-none');
})

let questions = [
    {
        title:`იუვენტუსი, ინტერისა და მილანის შემდეგ ვის აქვს მოგებული ყველაზე მეტჯერ სერია ა?`,
        answers:['ტორინო', 'ჯენოა', 'ნაპოლი', 'რომა'],
        correct:1,
        Image:'https://blogstatic.adjarabet.com/quiz%20photos/11111.JPG'
    },
    {
        title:`ჩამოთვლილთაგან, რომელ გუნდს აქვს უფრო მეტჯერ მოგებული ინგლისის ჩემპიონატი?`,
        answers:['მანჩესტერ-სიტი', 'ჩელსი', 'ევერტონი', 'ტოტენჰემი'],
        correct:2,
        Image:'https://blogstatic.adjarabet.com/quiz%20photos/2222.JPG'
    },
    {
        title:`ჩამოთვლილთაგან, რომელი გუნდი არ გავარდნილა არასოდეს სერია ა-დან?`,
        answers:['ინტერი', 'მილანი', 'რომა', 'ლაციო'],
        correct:0,
        Image:'https://blogstatic.adjarabet.com/quiz%20photos/3333333.JPG'
    },
    {
        title:`ჩამოთვლილთაგან, რომელ გუნდს არ მოუგია არასოდეს ბუნდესლიგა?`,
        answers:['შალკე', 'ნიურნბერგი', 'კაიზერსლაუტერნი', 'კიოლნი'],
        correct:0,
        Image:'https://blogstatic.adjarabet.com/%E1%83%9A%E1%83%9D%E1%83%92%E1%83%9D%E1%83%94%E1%83%91%E1%83%98/4.JPG'
    },
    {
        title:`ჩამოთვლილთაგან, რომელ გუნდს აქვს მოგებული ინგლისის პრემიერლიგა? (1992-1993 სეზონიდან დღემდე)`,
        answers:['ევერტონი', 'ბლექბერნი', 'ტოტენჰემი', 'რომნიუკასლი'],
        correct:1,
        Image:'https://blogstatic.adjarabet.com/%E1%83%9A%E1%83%9D%E1%83%92%E1%83%9D%E1%83%94%E1%83%91%E1%83%98/5.JPG'
    },
    {
        title:`ჩამოთვლილთაგან, რომელ გუნდს აქვს მოგებული ყველაზე მეტჯერ სერია ა?`,
        answers:['რომა', 'ნაპოლი', 'ბოლონია', 'ფიორენტინა'],
        correct:2,
        Image:'https://blogstatic.adjarabet.com/%E1%83%9A%E1%83%9D%E1%83%92%E1%83%9D%E1%83%94%E1%83%91%E1%83%98/6.JPG'
    },
    {
        title:`ბარსელონასა და რეალის გარდა, რომელია ერთადერთი ესპანური კლუბი, რომელიც ლა ლიგადან არასოდეს გავარდნილა?`,
        answers:['სევილია', 'მადრიდის-ატლეტიკო', 'ატლეტიკ-ბილბაო', 'რეალ-სოსიედადი'],
        correct:2,
        Image:'https://blogstatic.adjarabet.com/%E1%83%9A%E1%83%9D%E1%83%92%E1%83%9D%E1%83%94%E1%83%91%E1%83%98/7.JPG'
    },
    {
        title:`რომელ გუნდს აქვს მოგებული ყველაზე მეტჯერ საფრანგეთის ჩემპიონატი?`,
        answers:['სენტ-ეტიენი', 'მარსელი', 'ლიონი', 'მონაკო'],
        correct:0,
        Image:'https://blogstatic.adjarabet.com/%E1%83%9A%E1%83%9D%E1%83%92%E1%83%9D%E1%83%94%E1%83%91%E1%83%98/8.JPG'
    },
    {
        title:`ჩამოთვლილთაგან, რომელს აქვს მოგებული ყველაზე მეტჯერ საკუთარი ქვეყნის ჩემპიონატი?`,
        answers:['რეალი', 'იუვენტუსი', 'ბაიერნი', 'აიაქსი'],
        correct:1,
        Image:'https://blogstatic.adjarabet.com/%E1%83%9A%E1%83%9D%E1%83%92%E1%83%9D%E1%83%94%E1%83%91%E1%83%98/9.JPG'
    },   {
        title:`ჩამოთვლილთაგან, რომელს არ მოუგია არასოდეს საკუთარი ქვეყნის ჩემპიონატი?`,
        answers:['ბეტისი', 'სამპდორია', 'ნიუკასლი', 'ლევერკუზენი'],
        correct:3,
        Image:'https://blogstatic.adjarabet.com/%E1%83%9A%E1%83%9D%E1%83%92%E1%83%9D%E1%83%94%E1%83%91%E1%83%98/100.JPG'
    }
]



questions.forEach((quetion, index)=>{

    let answr = "";

    quetion.answers.forEach((ans, id)=>{
        answr += `<div class="col-lg-6 pdiv">
        <p data-id="${index}" class="bg-light  p-3 mt-2 ${id == quetion.correct ? 'correct' : ""} ">${ans}</p>
        </div>`
    })
    

    let quethtml = `
    <div class="row shadow ansrow ${index == 0 ? 'active' : ""} bg-white mb-3 mt-3 rounded" id="id${index}" >
    <div class="col-lg-12 ">
    <h5 class="m-4"> ${quetion.title} </h5>
    <img src="${quetion.Image}" clas="img-fluid width-100">
    </div>
    ${answr}
    <div class="row">

    <div class="col-lg-6 p-3 pirveli">
    <span class="bg-success text-white p-1 rounded cor">0 სწორი</span>
    <span class="bg-danger text-white p-1 rounded wr">0 არასწორი</span>
    <span class="bg-dark text-white p-1 rounded all">0 სულ</span>
    </div>

    <div class="col-lg-6 p-3 meore text-end">
    <button class="btn btn-warning next" disabled>შემდეგი</button>
    </div>

    </div>
    </div>
    `

    document.querySelector('#load').innerHTML += quethtml;

    let ans = document.querySelectorAll('.ansrow p');

    ans.forEach(el=>{
        el.addEventListener('click', function () {
            document.querySelectorAll('button.next').forEach(el=>{
                el.removeAttribute('disabled')
            })
            let dataid = this.getAttribute('data-id');
            document.querySelectorAll(`#id${dataid} .pdiv p`).forEach(el=>{
                el.classList.add('point')
            })
        
            if (this.classList.contains('correct') ){
                 corans++
                document.querySelectorAll('.cor').forEach(el=>{
                    el.innerText = corans + " სწორი"
                })
                this.classList.replace('bg-light', 'bg-success');
            }else{
                this.classList.replace('bg-light','bg-danger');
                 wrongans++
                document.querySelectorAll('.wr').forEach(el=>{
                    el.innerText = wrongans + " არასწორი"
                })
                document.querySelector(`#id${dataid} .correct`).classList.replace('bg-light', 'bg-success')
            }
        })
    })
    
})

document.querySelectorAll('.all').forEach(el=>{
    el.innerText = questions.length + ' სულ'
})
let corans = 0;
let wrongans = 0; 

document.querySelectorAll('.next').forEach(el=>{
    el.addEventListener('click', function(){
     let activerow = document.querySelector('.active')

    if (activerow.nextElementSibling != null ) {
        activerow.nextElementSibling.children[5].children[1].children[0].classList.add('next')
        activerow.nextElementSibling.children[5].children[1].children[0].setAttribute('disabled', 'disabled')
        activerow.classList.remove('active')
        activerow.nextElementSibling.classList.add('active')
    }else{
        let finalcor = corans++
        let all = 10
        document.querySelector('#load').innerHTML = `<div class="container finished">
        
        <div class="row text-center shadow rounded bg-info">
            <div class="col-lg-12">
                  <h2 class=" text-white">ტესტირება დასრულებულია</h2>
            </div>
            <div class="col-lg-12">
                   <h4 class="text-white" >თქვენი შედეგია <span class="text-primary">${all}</span> დან <span class="text-success">${finalcor}</span> სწორი პასუხი</h4>
            </div>
            <div class="col-lg-12">
                  <button class="text-white btn btn-warning" >კიდევ სცადეთ</button>
            </div>
        </div>
    </div>`
    }
    
    })
})


// let reset = document.querySelector('.finished .row button')

// reset.addEventListener('click', function(){
//     activerow.classList.remove('active')
//     document.querySelector('.ansrow').classList.add('active')
// })
