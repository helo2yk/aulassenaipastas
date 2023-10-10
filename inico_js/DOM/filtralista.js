//reconhecer em variaveis um array com as linhas e o input
//Declarar ua função que:
    //Reconhecer conteudo input(value)
    //Reconhece o conteúdo de a cada linha
    //Compara o conteudo da linha com o texto do input e :
      //se houver correspondencia mantem a linha
      // caso contrario esconde a linha display:none
//relacionar a função ao input com um encutador de eventos para digitação

const linhasFiltro = document.querySelectorAll('listafiltro')
const inputFiltro = document.querySelectorAll('#input_filtra')

console.log(linhasFiltro, inputFiltro)

function filtraLista (){
    const textoInputFiltro = inputFiltro.values.toUpperCase()
    for(let linha of linhasFiltro){
        const textoLinha = linha.textContent
        if(textoLinha.toUpperCase().includes(textoInputFiltro)){
            linha.style.display="block"
        }else{
            linha.style.display='none'
        }
    }
  }

inputFiltro.addEventListener('keyup', filtraLista)