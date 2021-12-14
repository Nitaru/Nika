let stringi = "es aris chemi pirveli stringi"

let chamatebuli = "chamatebuli sityva"

console.log(stringi.slice(3, 8))

let modzebna = stringi.search("chemi")

console.log(modzebna)

console.log(stringi.includes("pirveli"))

console.log(stringi.replace("pirveli", "meore"))

console.log(stringi.startsWith("es"))

console.log(stringi.toUpperCase())

console.log(stringi.trim())

console.log("es aris chemi " + chamatebuli + " pirveli stringi")

console.log(stringi.split(" "))

let year = 2;

let axalistringi = `me vswavlob front end web programirebas ${year} wlis ganmavlobashi`

console.log(axalistringi)

let poto = "images/layer 1.svg"

let linki = "https://mystat.itstep.org/en/main/market/page/index"

let card = `
<div class="col-lg-4 pt-2">
<div class="card pe-0 ps-0" style="width: 18rem; border: 1px solid whitesmoke">
<img src="${poto}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="${linki}" target="_blank" class="btn btn-danger">Go somewhere</a>
</div>
</div>
</div>
`
document.getElementById("inner").innerHTML = card
