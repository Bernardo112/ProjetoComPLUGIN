let escola = JSON.parse(localStorage.getItem('boletim_aulas')) || {};

if(escola.aulas == undefined){
    escola.aulas = [];
}

const meualuno = {
    nome: "wellygton",
    presenca: true,
    data: "dwadwa"
}

const abrirCamera = () =>{
    cordova.plugins.barcodeScanner.scan(
        (result) =>{
            let alunos = ["WELLYNGTON", "MICHAEL", "ANA", "RYAN", "THAMIRES"];
            
            for(let i = 0; i < alunos.length; i++){
                if(result.text == alunos[i]){
                    document.getElementById("aqui").textContent = result.text;
                }
            }
        },
        (error) =>{
            alert("Erro: " + error);
        }
    );
}

for(let i = 0; i < escola.aulas.length; i++){
    if(escola.aulas[i].nome === meualuno.nome){
        escola.aulas.push(meualuno);
    }
}

escola = JSON.stringify(escola);

localStorage.setItem('boletim_aulas', escola);