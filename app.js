let navtoggle = document.querySelector(".menu");
let navbar = document.querySelector(".navtoggle");


navtoggle.addEventListener("click",function(){
    if(navtoggle.firstElementChild.classList.contains("ri-menu-line"))
    {
        navtoggle.firstElementChild.classList.replace("ri-menu-line","ri-close-line") ;
    }
    else
    {
        navtoggle.firstElementChild.classList.replace("ri-close-line","ri-menu-line")
    }
    navbar.classList.toggle("navtoggle1");
});