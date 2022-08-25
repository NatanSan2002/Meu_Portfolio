class Project {
constructor(nome,data,ling,img,github,web,text){
this.nome = nome; 
this.data_projeto(data);
this.ling = ling;
this.img = img;
this.github = github;
this.web = web;
this.text = text;


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
    

    
    if(tempo / anos >= 100){
    this.data = "(em breve)";
    } else if(Math.floor(tempo / anos) == 1){
    this.data = Math.floor(tempo / anos)+ " ano";
    }else if(Math.floor(tempo / anos) > 1){
        this.data = Math.floor(tempo / anos)+ " anos";
        } 

    else if (Math.floor(tempo / meses) == 1){
    this.data = Math.floor(tempo / meses)+ " mês";
    }else if (Math.floor(tempo / meses) > 1){
        this.data = Math.floor(tempo / meses)+ " meses";
        }

    else if(Math.floor(tempo / semanas) == 1){
    this.data = Math.floor(tempo / semanas)+ " semana";
    }else if(Math.floor(tempo / semanas) > 1){
        this.data = Math.floor(tempo / semanas)+ " semanas";
        }

    else if(Math.floor(tempo / dias) == 1){
    this.data = Math.floor(tempo / dias)+ " dia";
    }else if(Math.floor(tempo / dias) > 1){
        this.data = Math.floor(tempo / dias)+ " dias";
        }

        else if(Math.floor(tempo / horas) == 1){
          this.data = Math.floor(tempo / horas)+ " hora"
        }else {
            this.data = Math.floor(tempo / horas)+ " horas"
        }


}

}

                                 // ANO / Mes / Dia
    // Linguagens: HTML/CSS, PHP, JS, React, SQL 


let pj_list = [

new Project ("Loucuras Da Filosofia",[2022,4,5],"HTML/CSS","LF_screen.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://natansan2002.github.io/Projeto_L_Filosofias/",
""),

new Project ("Poesias de Lorem",[2022,4,10],"HTML/CSS","cordel_screen.png",
"https://github.com/NatanSan2002/Projeto_Cordel","https://natansan2002.github.io/Projeto_Cordel/",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, temporibus? Praesentium distinctio dolore aliquid inventore unde cum possimus commodi eveniet. Voluptatum eligendi soluta quod nostrum doloribus sit eaque dolor alias! Iusto voluptatem impedit aliquam, commodi libero quisquam reiciendis maxime assumenda iure. Dolores obcaecati, sint culpa accusamus doloremque"
),

new Project ("Slides de Paisagens",[2022,07,08],"HTML/CSS","slide_screen.png",
"https://github.com/NatanSan2002/Slide","https://natansan2002.github.io/Slide/",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, provident! Sint iure illum illo voluptatibus perferendis debitis accusamus distinctio recusandae officia non incidunt est accusantium, id nemo, cumque dolorum amet pariatur sequi. Architecto sapiente cupiditate neque libero doloremque non reprehenderit, culpa dolore, a, ducimus soluta nihil doloribus commodi perspiciatis itaque odit accusamus. Repellendus dolorem aliquam debitis vel non quia ipsum nostrum minima corrupti, laborum veritatis quas autem impedit consectetur. Assumenda iure fuga mollitia saepe vel. Error autem omnis accusantium modi porro quisquam id fuga minima, maxime in. Fugiat expedita iure, at esse consequatur blanditiis repellendus, obcaecati atque cupiditate maiores consequuntur!"),

new Project ("Loja True Gaming",[2021,11,06],"PHP","lojaTG_screen.png",
"https://github.com/NatanSan2002/Projeto_PHP","#",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, temporibus? Praesentium distinctio dolore aliquid inventore unde cum possimus commodi eveniet. Voluptatum eligendi soluta quod nostrum doloribus sit eaque dolor alias! Iusto voluptatem impedit aliquam, commodi libero quisquam reiciendis maxime assumenda iure. Dolores obcaecati, sint culpa accusamus doloremque"),

new Project ("Custos de Trabalhos",[2022,05,06],"React","Costs_screen.png",
"https://github.com/NatanSan2002/React-JS/tree/main/React/Hora_de_Codar_Projeto/projeto_hc","#",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, temporibus? Praesentium distinctio dolore aliquid inventore unde cum possimus commodi eveniet. Voluptatum eligendi soluta quod nostrum doloribus sit eaque dolor alias! Iusto voluptatem impedit aliquam, commodi libero quisquam reiciendis maxime assumenda iure. Dolores obcaecati, sint culpa accusamus doloremque"),

new Project ("Em Breve",[1000,01,01],"","em_breve_screen.jpg", 
"#","#", "Projeto Futuro"),

new Project ("Em Breve",[1000,01,01],"","em_breve_screen.jpg",
"#","#", "Projeto Futuro"),


//Sim, o unico motivo de ter esses "Em Breve" é que queria mostrar que o scroll de paginas funciona.

] 



let number_containers = 6;

let position = 0;


let pags = pj_list.length / number_containers;

let abas_totais = document.getElementById("abas_totais");

let about = document.querySelector(".info_project");

function Clean_About(){
 about.innerHTML = "";
}

abas_totais.innerHTML = Math.ceil(pags).toFixed(0);

let atual_pag = 0;

let ordem = document.getElementById("funcao_ord");

function Mais_Recentes() {
    pj_list.sort(function ( a, b ) {
        if ( a.data_pura < b.data_pura ){
          return -1;} else if ( a.data_pura > b.data_pura){
          return true;
        }
    }
)
atual_pag = 0;
ordem.innerHTML = "Mais recentes";
Clean_About(); 

}


function Mais_Antigos() {
    pj_list.sort(function ( a, b ) {
        if ( a.data_pura > b.data_pura ){
          return -1;} else if ( a.data_pura < b.data_pura){
          return true;
}
    }
)
atual_pag = 0;
ordem.innerHTML = "Mais antigos";
Clean_About(); 
}



Mais_Recentes();



function Clean () {
    let sqs = document.querySelectorAll(".square");
    for(t=0;t<sqs.length;++t){
     sqs[t].remove();
    } 
}




let vezes;

let passos;

let square = document.getElementsByClassName("square");

function Push_Projects(p=0,ord) {

    if(p == position || ord == true){
        ++atual_pag;
        document.getElementById("aba_atual").innerHTML = atual_pag;
    }else{
        --atual_pag;
        document.getElementById("aba_atual").innerHTML = atual_pag;
    }

    


    Clean();

    let linha;
    passos = 0;
    
    
    if(p == position && p+number_containers>pj_list.length-1){
    vezes = pj_list.length-p;
    }else{
    vezes = number_containers;
    }

    let pj_attr =[];
    
    for(i=p,y=0;y<vezes;++i,++y){
    
    ++passos;
  
    if(y< number_containers / 2){
    linha = document.querySelectorAll(".linha")[0];
    }else{ 
    linha = document.querySelectorAll(".linha")[1];
    } 

    let icon;
    let pj = pj_list[i];

    pj_attr.push(pj);

    if(pj.ling == "HTML/CSS"){
    icon = "html-css-js_icon.png";
    }else if(pj.ling == "PHP"){
    icon = "php_icon.png";
    }else if (pj.ling == "JS"){
    icon = "js_icon.png";
    }else if(pj.ling ==  "React") {
    icon = "react_icon.png";
    }else if(pj.ling == "SQL") {
    icon = "sql_icon.png";
    }else {
    icon = "interrogacao_icon.png";
    }
    
    linha.innerHTML += `<div class="square">  
    <h1>${pj.nome}</h1> 
    <div class="img_container"> <img src="./assets/imagens/projects/${pj.img}" alt="foto_projeto"> </div> 
    <div class="data"> <p> há ${pj.data} </p> <img src="./assets/imagens/skills/${icon}"> </div>

    <p class="text"> ${pj.text}</p>  

    <div class="details"> 
    <a href="${pj.web}" target="_blank"> <img src="./assets/imagens/host_icon.png" alt="icon_host"> </a>
    <a href="${pj.github}" target="_blank"> <img src="./assets/imagens/github_icon.png" alt="icon_github"> </a>
    </div> 
    </div> `

   
        position = i+1; 

        
    
    }
    
    let atual;

   
    for(i=0;i<square.length; ++i){

       let ext_i = i;
        
        square[i].addEventListener("mouseover",function() {



            // Remove Atributes
            if(atual != undefined){
            atual.classList.remove("full_view");
            atual.children[4].classList.remove("full_view");
            atual.children[3].classList.remove("open");
            atual.children[2].classList.remove("centralize");
            atual.children[1].children[0].classList.remove("open_img");

            
     Clean_About();

            }

        // Add Atributes
        
        this.classList.add("full_view");
        this.children[4].classList.add("full_view");
        this.children[3].classList.add("open");
        this.children[2].classList.add("centralize");
        this.children[1].children[0].classList.add("open_img");
        

        
        
        var attr = pj_attr[ext_i];

        about.innerHTML += `<div class="text"> <h1> ${attr.nome}</h1>
     <p> 
         ${attr.text}
     </p>
  
    </div> 
    
    <div class="links" style="background-image: url(./assets/imagens/projects/${attr.img})"> <!-- Com base no index.html-->

         <div>
      <a href="${attr.github}" target="_blank">
     <p>Github</p> <img src="./assets/imagens/github_icon.png" alt="icone_github"> 
     </a>
     <a href="${attr.web}" target="_blank">
     <p>Acessar</p> <img src="./assets/imagens/host_icon.png" alt="icon_host"> 
     </a>
     </div>
 
 </div>`
     



        
        atual = this; 
        
          })
        }

    
   
    vezes = number_containers;
    
    
    }
    
    Push_Projects();

    

function next(){  
    if(position>pj_list.length-1){}else{
    Push_Projects(position);
    Clean_About(); 
}
}



function prev(){
    if(position<=number_containers){}else{
    Push_Projects(position-vezes-passos);
    Clean_About(); 
    }   
} 















 