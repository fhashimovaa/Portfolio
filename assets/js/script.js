$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});

const menuBtn=document.querySelector("#menu-btn");
const navbar=document.querySelector("#navbar");
const asidemenu=document.querySelector(".header_aside");
const navClose=document.querySelector("#closeNavBtn")
const asideClose=document.querySelector("#asideCloseBtn");
const asideBtn =document.querySelector("header_aside-content")

const width=window.matchMedia("(min-width: 991.98px)");

runEvent();

function runEvent(){
    menuBtn.addEventListener("click",miniNavbar);
    navClose.addEventListener("click",closeNavbar);
    asideClose.addEventListener("click",closeAside);
    asidemenu.addEventListener("click",closeAsidemenu);
    
    
}




function miniNavbar(e){
    e.preventDefault()
    // console.log("hello")
    if(width.matches){
        navbar.style.display="block";
    }else{
        asidemenu.style.left='0px'
        navbar.style.display='none';
    }
}

function closeNavbar(){
    navbar.style.display='none'
}

function closeAside(e){
    e.preventDefault()
    asidemenu.style.left='-2000px';
}
function closeAsidemenu(){
    asidemenu.style.left='-2000px';
}