const form = document.getElementById("form-contato")
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinhas();
    atualizarTabela();
})

function adicionarLinhas(){

    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');
    
    if (telefone.includes(inputTelefone.value)) {
        alert(`Esse telefone: (${inputTelefone.value}) já foi inserido!`)
    }else{

    nome.push(inputNome.value);
    telefone.push(inputTelefone.value);
    
    let linha = '<tr>';

    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    inputNome.value = '';
    inputTelefone.value = '';   
}

function atualizarTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}