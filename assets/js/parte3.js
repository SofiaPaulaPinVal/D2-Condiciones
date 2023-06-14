let digito1 = document.getElementById("digito1");
let digito2 = document.getElementById("digito2");
let digito3 = document.getElementById("digito3");

let pas1 = null;
let pas2 = null;
let pas3 = null;


digito1.addEventListener("change", (event) => {
    console.log("digito1", event.target.value);
    pas1 = event.target.value;
});

digito2.addEventListener("change", (event) => {
    console.log("digito2", event.target.value);
    pas2 = event.target.value;
});

digito3.addEventListener("change", (event) => {
    console.log("digito3", event.target.value);
    pas3 = event.target.value;
});

const password1 = 911;
const password2 = 714;

login.addEventListener("click", (event)=>{
    // const passwordIngresado = parseInt(document.getElementById('login').value);
    const passwordIngresado = pas1+ pas2+ pas3;
    console.log (passwordIngresado);

    if(passwordIngresado == password1){
        const par = document.getElementById ('secretResult');
        par.innerHTML = 'password 1 correcto';
    }

    else if(passwordIngresado == password2){
        const secretResult = document.querySelector('#secretResult');
        secretResult.innerHTML = 'password 2 correcto';
    }

    else {
        secretResult.innerHTML = 'password incorrecto'
    }
});

