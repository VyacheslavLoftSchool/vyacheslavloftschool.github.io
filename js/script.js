var burger = document.querySelector("#burger");
var burgerMenu = document.querySelector("#burger-menu");
var closeBtn = document.querySelector("#close-btn");
var menuList = document.querySelector(".menu-list_burger");
var menuItem = menuList.children;

burger.addEventListener("click", function(){
    burgerMenu.style.display = "flex";
    document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function(){
    burgerMenu.style.display = "none";
    document.body.style.overflow = "initial";
});

for(let i = 0; i<menuItem.length; i++){
    menuItem[i].addEventListener("click", ()=>{
        burgerMenu.style.display = "none";
        document.body.style.overflow = "initial";
    });
}
