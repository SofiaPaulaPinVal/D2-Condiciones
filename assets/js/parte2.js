let cantidad1= document.getElementById("cantidad1");
let cantidad2 = document.getElementById("cantidad2");
let cantidad3 = document.getElementById("cantidad3");

let sticker1 = 0;
let sticker2 = 0;
let sticker3 = 0;

cantidad1.addEventListener("change", (event) => {
    console.log("cantidad1", event.target.value);
    sticker1 = parseInt(event.target.value);
});

cantidad2.addEventListener("change", (event) => {
    console.log("cantidad2", event.target.value);
    sticker2 = parseInt(event.target.value);
});

cantidad3.addEventListener("change", (event) => {
    console.log("cantidad3", event.target.value);
    sticker3 = parseInt(event.target.value);
});


let button = document.getElementById('calculo');
button.addEventListener('click', hacerCalculo);

function hacerCalculo () {
    let calculo = sticker1 + sticker2 + sticker3;
    console.log(calculo)
    if (calculo <= 10){
        mensaje.innerHTML = `Llevas ${calculo} stickers`
    }
    else {
        mensaje.innerHTML = `Llevas demaciados stickers`
    }
}