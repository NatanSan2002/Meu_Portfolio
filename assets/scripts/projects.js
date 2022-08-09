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
    const dias    =   1000 * 60 * 60 * 24;
    const semanas =   dias * 7;
    const meses   =   semanas * 4;
    const anos    =   meses * 12;
    
    

    
    this.data = Math.ceil(tempo / meses);
    
}

}

// ANO / Mes / Dia

const LF = new Project ("Loucuras Da Filosofia",[2022,4,5],"HTML/CSS","LF.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com");

const test = new Project ("Teste",[2022,10,9],"HTML/CSS","LF.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com");

const test2 = new Project ("Teste",[2022,08,08],"HTML/CSS","LF.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com");


let projects_list = [LF,test,test2] ;

console.log(projects_list)





 