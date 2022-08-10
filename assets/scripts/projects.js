class Project {
constructor(nome,data,ling,img,github,web){
this.nome = nome; 
this.data_projeto(data);
this.ling = ling;
this.img = img;
this.github = github;
this.web = web;


}

data_projeto (data){
    let atual = new Date();

    let projeto = data[0] + "-";
    for(i=1;i<data.length;++i){
    projeto += String(data[i]) + "-";
    ;
    }
    
    projeto = new Date(projeto);

    const tempo = Math.abs(atual - projeto);
//            1000ms * 60seg
    const horas   =   1000 * 60 * 60 
    const dias    =   horas * 24;
    const semanas =   dias * 7;
    const meses   =   semanas * 4;
    const anos    =   meses * 12;
    

    
    if(tempo / anos >= 1){
    this.data = Math.floor(tempo / anos)+ " anos";
    }else if (tempo / meses >= 1){
    this.data = Math.floor(tempo / meses)+ " meses";
    }else if(tempo / semanas >= 1){
    this.data = Math.floor(tempo / semanas)+ " semanas";
    }else if(tempo / dias >= 1){
    this.data = Math.floor(tempo / dias)+ " dias";
}else{this.data = Math.floor(tempo / horas)+ " horas"}


}

}

                                 // ANO / Mes / Dia


let pj_list = [

new Project ("Loucuras Da Filosofia",[2022,4,5],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste",[2022,7,22],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste",[2022,08,08],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com")


] 

console.log(pj_list)





let linha = document.querySelector(".linha");

for(i=0;i<pj_list.length;++i){

linha.innerHTML += `<div class="content">  <h1>${pj_list[i].nome}</h1> <div class="img_container"> <img src="./assets/imagens/projects/${pj_list[i].img}" alt="foto_projeto"> </div> <p> há ${pj_list[i].data} </p> <div class="details"> <img src="./assets/imagens/host_icon.png" alt="icon_host"> <img src="./assets/imagens/github_icon.png" alt="icon_github"> </div> </div> `

}










 