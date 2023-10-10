const listaDestinos = ['São Paulo', ' Rio de Janeiro', 'Belo Horizonte', 'Salvador'] //Array

const destinoDesejado = 'Rio de Janeiro' //String
const idadeCliente = 17 //Number
const acompanhaDeMaior = true //Boolean


//Para que o cliente possa viajar ele deve viajar ele deve ser maior de 18 anos ou estar acompanhada de um maior

if(idadeCliente >= 18){
    console.log('Pode viajar é maior de idade')
    console.log(listaDestinos.splice(1,1))
}else if(acompanhaDeMaior){
    console.log('Pode viajar é menor está acompanhado')
    console.log(listaDestinos.splice(1,1))
}else{
    console.log('Não pode viaja, menor de idade e nao esta acompanhado maior')
}

if(idade >= 18 || acompanhaDeMaior){

    console.log('pode viajar')
    listaDestinos.splice(1,1)
    
}

