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

let information = {
  wona: 30,
  raodenoba: 20,
  pasi: 15,
  maragi: function(){
    if (this.raodenoba == 0) {
      return `<span class="bg-danger">maragi amoiwura<span>`;
    }
    else {
      return this.raodenoba;
  }
}
}

console.log(information.maragi)