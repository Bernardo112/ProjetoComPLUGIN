// mostra alunos
const visualizarAluno = () =>{
    let escola = JSON.parse(localStorage.getItem('boletim_aulas')) || {};
    let aluno = "";

    for(let i = 0; i < escola.aulas[0][1].length; i++){
        aluno += `
            <table class="table table-striped m-0">
                <tr>
                    <td class="table-light">${escola.aulas[0][1][i].nome}</td>
                    <td class="table-light">${escola.aulas[0][1][i].data}</td>
                    <td class="table-light">${escola.aulas[0][1][i].presenca}</td>
                </tr>
            </table>
        `
    }

    document.getElementById("alunos").innerHTML = aluno;

    escola = JSON.stringify(escola);

    localStorage.setItem('boletim_aulas', escola);
}

visualizarAluno();