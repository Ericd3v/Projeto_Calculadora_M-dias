const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="./images/aprovado.png" alt= "emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt= "emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado" > Aprovado </span>';
const spanReprovado = '<span class="resultado reprovado" > Reprovado </span>'
const NotaMinima = parseFloat(prompt("Digite aa nota minima: "));

let linhas = '';

form.addEventListener ('submit', function (e) {
    e.preventDefault();
        adicionarLinha();
        atualizaTabela();
        atulizaMediaFinal();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A ativididade: $( inputNomeAtividade) já foi inseirda.`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

    let linha ='<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= NotaMinima ? imgAprovado : imgReprovado} </td>`;
    linha += `<tr></tr>`;

    linhas += linha; }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
function atulizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal; 
    document.getElementById ('media-final-resultado').innerHTML = mediaFinal >= NotaMinima ? spanAprovado : spanReprovado;
}

        
        function calculaMediaFinal() {
            let somarNotas = 0;

            for (let i = 0; i < notas.length; i++) {
                somarNotas += notas[i];
                
            }
            return somarNotas / notas.length;
            
        }
