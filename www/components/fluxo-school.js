let escola = JSON.parse(localStorage.getItem('boletim_aulas')) || {};

if(escola.aulas == undefined){
    escola.aulas = [];
}

const meualuno = {
    nome: "wellygton",
    presenca: true,
    data: "dwadwa"
}

for(let i = 0; i < escola.aulas.length; i++){
    if(escola.aulas[i].nome === meualuno.nome){
        escola.aulas.push(meualuno);
    }
}

escola = JSON.stringify(escola);

localStorage.setItem('boletim_aulas', escola);