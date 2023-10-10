/* const retorno = fetch('https://viacep.com.br/ws/06365210/json/')
.then(promessa => promessa.json())//convertando a promessa para um arquivo json
.then((retorno) => {
    if(retorno.erro ===true){
        alert('cep inexistente')
    }else{
         console.log(resultado)
         const inputBairro = document.getElementsById('bairro')
     /*     const selectEstado = document.getElementById ('uf') */
       /*   const inputRua

         inputBairro.value = resultado.bairro
         selectEstado.value = resultado.uf
        }
    }) */
/* .catch(erro =>alert ('cep invalido'))  *///Resultado da promessa e exibir no console

/* console.log(retorno) */
/* const inputCep = document.getElementsById('cep')
const valorCep = inputCep.value

function consoleCep (cep){
    const retorno = fetch('https://viacep.com.br/ws/${cep}/json/')
}

 */

const inputCep = document.getElementById('cep')

function consultaCep (cep){
    const retorno = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(promessa => promessa.json())
    .then((resultado) => {
        if(resultado.erro){
            alert('cep formato válido, porém inexistente')
        }else{
            //reconhecendo os inputs
            console.log(resultado)
            const inputBairro = document.getElementbyId('bairro')
            const inputRua = document.getElementById('endereço')
            const inputCidade = document.getElementById('cidade')
            const inputEstado = document.getElementById('uf')

            //atribuir os valores do resultado dos inputs 
            inputRua.value = resultado.logradouro
            inputBairro.value = resultado.bairro
            inputCidade.value = resultado.localidade
            inputEstado.value = resultado.uf
        }

    })
  .catch(erro => alert('cep de formato inválido'))
  .finally(console.log('processamento concluido!'))

}
inputCep.addEventListener('focusout', () => consultaCep(inputCep.value))