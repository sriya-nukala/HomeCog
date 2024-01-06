var menu=document.getElementById("menu");
var navbar=document.getElementById("navbar");
var close=document.getElementById("close");

if(menu){
    menu.addEventListener('click',()=>{
        navbar.classList.add("active");
    })
}
if(close){
    close.addEventListener('click',()=>{
        navbar.classList.remove("active");
    })
}