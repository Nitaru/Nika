/*======= საშინაო =======*/
let auto = ["Ford", "Mustang", 5.4, ["V6", "V8"], 
{
variant:"boss 302", 
variant2:"Shelby",
variant3:"Saalen", 
year:["2018", "2022"]
}
];

let newstring = `${auto[0]} ${auto[1]} "გამოდის" ${auto[2]} ${auto[3][1]} ტიპის ძრავით,ასევე მისი მოდიფიკაციებია ${auto[4].variant}, ${auto[4].variant2}, საუკეთესო მოდელები გამოდიოდა ${auto[4].year[0]} დან ${auto[4].year[1]}წლამდე`

console.log(newstring)

let newarray = ["es", "aris", "chemi", "pirveli", "masivi"]

newarray.unshift("chamatebuli")

newarray.push("esec")

newarray.shift()

newarray.pop()

console.log(newarray)
/*======== საკლასო ========*/

















