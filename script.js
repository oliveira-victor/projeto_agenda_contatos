const form = document.getElementById('form-cadastro');
const nomes = [];
const numeros = [];
let formEValido = false;

let linhas = '';
let cadastros = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    formEValido = validaNome(nome.value)
    if (formEValido) {
        adicionaLinha();
    } else {
        document.querySelector('.error-message').style.display = 'block';
    }

});

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTel = document.getElementById('tel');

    if (nomes.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já foi cadastrado.`);
    } else if (numeros.includes(inputTel.value)) {
        alert(`O número ${inputTel.value} já foi cadastrado.`);
    } else {
    nomes.push(inputNome.value);
    numeros.push(inputTel.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    cadastros += 1;

    inputNome.value = '';
    inputTel.value = '';
    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    document.getElementById('numero-cadastros').innerHTML = cadastros;

}

nome.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nome.classList.add('error')
        document.querySelector('.error message').style.display = 'block';
    } else {
        nome.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})