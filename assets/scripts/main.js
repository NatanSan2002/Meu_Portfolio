let anime_color = document.querySelectorAll("[data-anime]");
let anime_class = "animate";

function animeScroll(){
let windowTop = window.pageYOffset + window.innerHeight * 3 / 4 ;

anime_color.forEach(function(e){

if(windowTop > e.offsetTop ){
e.classList.add(anime_class);
}

})
}


window.addEventListener("scroll",function(){

    animeScroll();

})