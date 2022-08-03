// Animação Sobre Mim


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



// Animação Skills 

let container= document.getElementsByClassName("container");

for(i=0;i<container.length; ++i){

    container[i].addEventListener("mouseover",function() {

      this.children[1].classList.add("UpAnime");
    
    })
}



