const form = document.getElementById('form-cadastro');
const nomes = [];
const numeros = [];

let linhas = '';
let cadastros = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
});

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
    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    document.getElementById('numero-cadastros').innerHTML = cadastros;

    inputNome.value = '';
    inputTel.value = '';
}