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
        answr += `<div class="col-lg-12">
        <p class="bg-light p-3 ${id == quetion.correct ? 'correct' : ""}">${ans}</p>
        </div>`
    })
    

    let quethtml = `
    <div class="row shadow ansrow mb-3">
    <div class="col-lg-12 ">
    <h5 class="m-4"> ${quetion.title} </h5>
    <img src="${quetion.Image}" clas="img-fluid width-100">
    </div>
    ${answr}
    </div>
    `


    document.querySelector('#load').innerHTML += quethtml;

    // let ans = document.querySelector('.ansrow p');

    // ans.forEach(el=>{
    //     el.addEventListener('click', function () {
    //         if (this.classList.contains('correct') ){
    //             this.classList.add('bg-success')
    //         }else{
    //             this.classList.replace('bg-light','bg-danger')
    //         }
    //     })
    // })
})