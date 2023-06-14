const border_img = document.querySelector(".border_img");
let border = true;

border_img.addEventListener("click", (event)=>{
    
    if (border) {
        border_img.style.border = "none";
        border = false;
    }else{
        border_img.style.border = "2px solid greenyellow"
        border = true;
    }
    
});