let openBtn = document.querySelector(".openBtn");
let closeBtn = document.querySelector(".closeBtn");
let menu = document.querySelector(".navbar__menu");


openBtn.addEventListener("click", ()=> {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", ()=> {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");

})