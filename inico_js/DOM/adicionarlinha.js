const listaOrdenada = document.querySelector('.lista_acrescenta')
const inputTexto = document.querySelector('#conteudo_linha')
const addBotao = document.querySelector('#btn_add_linha')

console.log(listaOrdenada, inputTexto, addBotao)

function addLinha(){ 
    const textoInput = inputTexto.value
    const novaLinha = document.createElement('li')
    novaLinha.innerText = textoInput

    listaOrdenada.appendChild(novaLinha)

    inputTexto.value = ""
}

addBotao.addEventListener('click', addLinha)