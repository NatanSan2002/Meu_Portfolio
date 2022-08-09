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
let  full = new Date(...data);
const dia = String(full.getDate()).padStart(2,"0");
const mes = String(full.getMonth()).padStart(2,"0");
const ano = full.getFullYear();

const date =  `${dia}/${mes}/${ano}`;

this.data = date;
}

}



const LF = new Project ("Loucuras Da Filosofia",[2022,4,5],"HTML/CSS","LF.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com");

const test = new Project ("Teste",[2022,10,9],"HTML/CSS","LF.png",
"https://github.com/NatanSan2002/Projeto_L_Filosofias","https://www.youtube.com");


let projects_list = [LF,test] ;

console.log(projects_list)





 