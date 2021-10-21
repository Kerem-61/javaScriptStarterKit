console.log("Merhaba")

//JScript type safe değil
let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.10
    
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 sabitlerde yeni deger atanamaz

console.log(euroDun)

let konutKredileri = ["Konut Kredisi","Emlak kredisi","Kamu konut kredisi","Özel konut kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
   
}
console.log("</ul>")

console.log(konutKredileri)