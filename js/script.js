//lista vazia para armazenar as tarefas
let listaTarefa = []

//criação das variáveis
const descricaoInput = document.querySelector('#descricao')
const autorInput = document.querySelector('#autor')
const departamentoInput = document.querySelector('#departamento')
const importanciaInput = document.querySelector('#importancia')
const valorInput = document.querySelector('#valor')
const duracaoInput = document.querySelector('#duracao')
const adicionarBotao = document.querySelector('#botao')
const ordenarBotao = document.querySelector('#ordenar')
const tabelaOrdenadaBody = document.querySelector('#tabelaOrdenada');


adicionarBotao.addEventListener('click', function(){
    const tarefa = {
        descricao: descricaoInput.value,
        autor: autorInput.value,
        departamento: departamentoInput.value,
        importancia: parseInt(importanciaInput.value),

        valor: valorInput.value !== '' ? parseFloat(valorInput.value) : null,
        duracao: duracaoInput.value !== '' ? parseInt(duracaoInput.value) : null
    };

    listaTarefa.push(tarefa);
    atualizaTabela();
    limparInputs();
    
});

ordenarBotao.addEventListener('click', function(){
    ordenarTabela();
})

//Funções

//Atualiza a tabela com os dados
function atualizaTabela(){
    let tbody = document.getElementById('tbody');
    tbody.innerText = '';

    for(let i = 0;  i < listaTarefa.length; i++){
        let tr = tbody.insertRow();

        let td_descricao = tr.insertCell();
        let td_autor = tr.insertCell();
        let td_departamento = tr.insertCell();
        let td_importancia = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_duracao = tr.insertCell();
        let td_excluir = tr.insertCell();

        td_descricao.innerText = listaTarefa[i].descricao;
        td_autor.innerText = listaTarefa[i].autor;
        td_departamento.innerText = listaTarefa[i].departamento;
        td_importancia.innerText = listaTarefa[i].importancia;
        td_valor.innerText = listaTarefa[i].valor;
        td_duracao.innerText= listaTarefa[i].duracao;
    

        let imgExcluir = document.createElement('img');
        imgExcluir.src = 'img/lixo1.png';
        imgExcluir.setAttribute("onclick", "deletar()")

        imgExcluir.width = 40;
        imgExcluir.height = 40;
        td_excluir.appendChild(imgExcluir);

    }
}
//Limpa todos os campos
function limparInputs() {

    descricaoInput.value = '';
    autorInput.value = '';
    departamentoInput.value = '';
    importanciaInput.value = '';
    valorInput.value = '';
    duracaoInput.value = '';

}

//Deleta a tarefa
function deletar(i) {
    listaTarefa.splice(i, 1);
    atualizaTabela();
    ordenarTabela();
}

//Ordena a tarefa
function ordenarTabela() {
    const listaOrdenada = [...listaTarefa];
    listaOrdenada.sort((a, b) => b.importancia - a.importancia);
    const tabelaOrdenadaBody = tabelaOrdenada.querySelector('tbody')
    tabelaOrdenadaBody.innerHTML = '';

    listaOrdenada.forEach(tarefa => {
        const row = document.createElement('tr');
        const descricaoTarefa = document.createElement('td');
        descricaoTarefa.textContent = tarefa.descricao;
        const importanciaTarefa = document.createElement('td');
        importanciaTarefa.textContent = tarefa.importancia;
        row.appendChild(descricaoTarefa);
        row.appendChild(importanciaTarefa);
        tabelaOrdenadaBody.appendChild(row);
    });
}


    