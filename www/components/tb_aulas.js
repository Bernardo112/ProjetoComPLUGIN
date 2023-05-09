// mostra aulas
const visualizarAula = () =>{
    let escola = JSON.parse(localStorage.getItem('boletim_aulas')) || {};
    let aula = "";

    for(let i = 0; i < escola.aulas.length; i++){
        aula += `
            <tr>
                <td class="table-light ">${escola.aulas[i][0]}</td>
                <td class="text-center">
                    <input type="checkbox">
                </td>
            </tr>
        `
    }

    document.getElementById("tbaulas").innerHTML = aula;

    escola = JSON.stringify(escola);

    localStorage.setItem('boletim_aulas', escola);
}

visualizarAula();