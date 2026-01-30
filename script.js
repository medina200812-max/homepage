const menu=document.querySelector(".menu")
const right=document.querySelector(".closeicon")
const close=document.querySelector(".close")

menu.addEventListener("click", function(){
    right.classList.toggle("active")
})
close.addEventListener("click", function(){
    right.style.display="none"
})