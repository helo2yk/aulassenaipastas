function consultaCep (cep) {
    try{
    const resultado = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    const resultadoConvertido = await.resultado.json()
    if(resultadoConvertido.erro){
        alert('cep formato válido, porém inexistente')
    }else{
        console.log(resultadoConvertido)
    }
    }catch(erro){
        alert('CEP de formato invalido')
    }
}
const inputCep = document.getElementById('cep')

