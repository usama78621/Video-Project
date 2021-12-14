const btn =document.querySelector(".swith-btn");
const vidoe =document.querySelector(".video-container");

btn.addEventListener("click",function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
    vidoe.pause();
    }else{ 
        btn.classList.remove("slide");
        vidoe.play();
    }
});