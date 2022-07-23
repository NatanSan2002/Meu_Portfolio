
// Var Globais 

let header = document.getElementById("cabecalho");
let icon_header = document.getElementById("header_icon");



/*Roll Sense: Change Menu Bar*/


window.addEventListener("scroll",function(e){
if(this.scrollY > 0 && window.screen.width > 950){
header.setAttribute("class","roll");

icon_header.setAttribute("class","header_icon_small");
}else{
    header.removeAttribute("class","roll");
} 
})


// Mobile Menu

let exb_menu = false;

let mob_menu = document.getElementsByClassName("mobile_menu");
let lines = mob_menu[1].children;



function Act_MobMenu(){
if(exb_menu == false){

header.style.display = "flex";
mob_menu[1].style.background = "white";

for(i=0;i < lines.length;++i){
lines[i].style.background = "black";
}


exb_menu = true;

}else{
    header.style.display = "none";
    exb_menu = false;
}
}

window.addEventListener('resize',function(){
let largura = window.screen.width;

if(largura > 950){
    header.style.display = "flex";
    }else if(largura < 950 && exb_menu == false){
        header.style.display = "none";
    }
})



