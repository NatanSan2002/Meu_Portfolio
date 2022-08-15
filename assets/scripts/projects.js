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

    this.data_pura = tempo;
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

new Project ("Teste1",[2022,07,10],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste2",[2022,08,08],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste3",[2022,08,07],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste4",[2022,08,06],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste5",[2022,08,05],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste6",[2022,08,03],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste7",[2022,08,02],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste8",[2022,08,01],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste9",[2022,07,29],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste10",[2022,07,28],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste11",[2022,07,27],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste12",[2022,07,26],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste13",[2022,07,25],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste14",[2022,07,24],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste15",[2022,07,23],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste16",[2022,07,22],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste17",[2022,07,21],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste18",[2022,07,20],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com"),

new Project ("Teste19",[2022,07,19],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com")





] 



function Mais_Recentes() {
    pj_list.sort(function ( a, b ) {
        if ( a.data_pura < b.data_pura ){
          return -1;} else if ( a.data_pura > b.data_pura){
          return true;
        }
    }
)
}


function Mais_Antigos() {
    pj_list.sort(function ( a, b ) {
        if ( a.data_pura > b.data_pura ){
          return -1;} else if ( a.data_pura < b.data_pura){
          return true;
}
    }
)
}



Mais_Recentes();




let number_containers = 6;

let position = 0;

function Clean () {
    let sqs = document.querySelectorAll(".square");
    for(t=0;t<sqs.length;++t){
     sqs[t].remove();
    } 
}


let vezes;
let passos;

function Push_Projects(p=0) {

    Clean();

    let linha;
    passos = 0;
    
    
    if(p == position && p+number_containers>pj_list.length-1){
    vezes = pj_list.length-p;
    }else{
    vezes = number_containers;
    }

    
    for(i=p,y=0;y<vezes;++i,++y){
    console.log("vezes: "+vezes)
    console.log("array: "+i);
    //console.log("vezes: "+vezes)
    ++passos;
  
    if(y< number_containers / 2){
    linha = document.querySelectorAll(".linha")[0];
    }else{ 
    linha = document.querySelectorAll(".linha")[1];
    } 
    
    linha.innerHTML += `<div class="square">  <h1>${pj_list[i].nome}</h1> <div class="img_container"> <img src="./assets/imagens/projects/${pj_list[i].img}" alt="foto_projeto"> </div> <p> há ${pj_list[i].data} </p> <div class="details"> <img src="./assets/imagens/host_icon.png" alt="icon_host"> <img src="./assets/imagens/github_icon.png" alt="icon_github"> </div> </div> `

   
        position = i+1; 

        
    
    }

    vezes = number_containers;
    
    
    }
    
    Push_Projects();



function next(){  
    if(position>=pj_list.length-1){}else{
    Push_Projects(position);
}
}



function prev(){
    if(position<=number_containers){}else{
    Push_Projects(position-vezes-passos)   
    }   
} 















 