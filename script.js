
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


function Act_MobMenu(){
if(exb_menu == false){

header.style.display = "flex";
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



