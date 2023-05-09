// da presença pro aluno
const abrirCamera = () =>{
    cordova.plugins.barcodeScanner.scan(
        (result) =>{
            let escola = JSON.parse(localStorage.getItem('boletim_aulas')) || {};
            
            for(let i = 0; i < escola.aulas[0][1].length; i++){
                if(escola.aulas[0][1][i].nome == result.text){
                    escola.aulas[0][1][i].presenca = true;
                }
            }

            escola = JSON.stringify(escola);

            localStorage.setItem('boletim_aulas', escola);
        },
        (error) =>{
            alert("Erro: " + error);
        }
    );
}

// inserir aula
const inserirAula = () =>{
    let escola = JSON.parse(localStorage.getItem('boletim_aulas')) || {};

    if(escola.aulas == undefined){
        escola.aulas = [];
    }

    const aula = [
        // nome da aula
        document.getElementById("nomeAula").value , []
    ];

    escola.aulas.push(aula);

    escola = JSON.stringify(escola);

    localStorage.setItem('boletim_aulas', escola);
}

// adicionar aluno na aula
const adicionarAluno = () =>{
    let escola = JSON.parse(localStorage.getItem('boletim_aulas')) || {};

    const meualuno = {
        nome: document.getElementById("nomealuno").value,
        presenca: false,
        data: "dwadwa"
    }

    let existe = false;
    for(let i = 0; i < escola.aulas[0][1].length; i++){
        if(escola.aulas[0][1][i].nome == meualuno.nome){
            existe = true;
        }
    }

    if(!existe){
        escola.aulas[0][1].push(meualuno);
    }

    escola = JSON.stringify(escola);

    localStorage.setItem('boletim_aulas', escola);
}

// dar presenca aluno
const darPresenca = () =>{
    let escola = JSON.parse(localStorage.getItem('boletim_aulas')) || {};

    const meualuno = "luan";

    for(let i = 0; i < escola.aulas[0][1].length; i++){
        if(escola.aulas[0][1][i].nome == meualuno){
            escola.aulas[0][1][i].presenca = true;
        }
    }

    escola = JSON.stringify(escola);

    localStorage.setItem('boletim_aulas', escola);
}