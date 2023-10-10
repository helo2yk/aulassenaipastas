//Reconhecer todas as linhas como um array
//Criar uma função que remove o item que recebeu o evento
//Aplica a função a todos os itens do array

const linhasremoviveis = document.querySelectorAll('linha_remove')

console.log(linhasremoviveis)

function removeLinha (event){
    const linhaClicada =event.target

    console.log("Fui clicada")
}
for(let linha of linha){
    linha.addEventListener('click', removeLinha)
}