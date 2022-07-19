
/*Roll Sense: Change Menu Bar*/

window.addEventListener("scroll",function(e){
if(this.scrollY>0){
document.getElementById("cabecalho").setAttribute("class","roll");

document.getElementById("header_icon").setAttribute("class","header_icon_small");
}else{
    document.getElementById("cabecalho").removeAttribute("class","roll");

    

} 
})



