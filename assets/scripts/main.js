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


let arrow = document.getElementsByClassName("up_arrow");
let arrows = [];


for(i=0;i<arrow.length;++i){
arrows.push(arrow[i])
};



if(window.screen.width < 1011){
  for(i=0;i<arrow.length;++i){
   arrows[i].style.display = "none";
  }
}

window.addEventListener('resize',function(){
  if(window.screen.width < 1011){
    for(i=0;i<arrow.length;++i){
     arrows[i].style.display = "none";
    }
  }else{
    for(i=0;i<arrow.length;++i){
      arrows[i].style.display = "inline-block";
    }
  }
})



let container= document.getElementsByClassName("container");

for(i=0;i<container.length; ++i){

    container[i].addEventListener("mouseover",function() {

      this.children[1].classList.add("UpAnime");
      this.children[1].children[0].classList.add("hidden_arrow");
      this.classList.add("full_view","animeOFF");

     
    
    })

    container[i].addEventListener("mouseout",function() {

      this.children[1].classList.remove("UpAnime");
      this.children[1].children[0].classList.remove("hidden_arrow");
      this.classList.remove("full_view","animeOFF");
    
    })
}





