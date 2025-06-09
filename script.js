const burger = document.querySelector(".burger")
const menu_nav = document.querySelector(".header_nav")
const xmark = document.querySelector(".xmark")

burger.addEventListener("click", ()=>{
    menu_nav.style.left = "0";
    xmark.style.display = "block";
    burger.style.display = "none";
})

xmark.addEventListener("click", ()=>{
    menu_nav.style.left = "-100%";
    xmark.style.display = "none";
    burger.style.display = "block";
})