// primeiro comando java console.log("Olá mundo!")

const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeCompletoArray = nomeCompleto.split(' ');
    return nomeCompletoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeBenificiario = document.getElementById('nome-beneficiario');
    if (!validaNome(nomeBenificiario.value)) {
        alert('O nome não está completo');
    }else {
        alert('Está tudo certo!');
    }
})

console.log(form);