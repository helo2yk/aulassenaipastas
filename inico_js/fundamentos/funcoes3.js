//Declarando a função

function somaValores (){
    return 3 + 5
}

function somaValores (n1,n2){
    return n1 + n2
}



console.log (somaValores(3, 5))
console.log(somaValores (4,8))

const listaNomes = ['Carlos', 'Carla', 'Paulo', 'Marta']
const nomeProcurado = 'Carla'

const numeros = [5, 8, 9, 13, 3]
const numeroProcurado = 9

const listaFrutas = ['Maça', 'Laranja', 'Banana', 'Pêra']
const encontrouValor = 'Maça'


/* for(nome of listaNomes){
    if(nome === nomeProcurado){
        encontrouValor = true
        break
    }
    }


    
if(encontrouValor === true){
    console.log('Valor encontrado!')
}else{
    console.log('Valor não encontrado!')
}  */


function procuraValoremArray (array, valorProcurado){

    let encontrouOValor = false

    for(item of array){
        if(item === valorProcurado)
        encontrouOValor = true
      break
    }
    if(encontrouOValor === true){
        console.log('valor encontrado')
    }else{
        console.log('valor não encontrado!')
    }
}



procuraValoremArray(listaNomes, nomeProcurado)
procuraValoremArray(numeros, numeroProcurado)
procuraValoremArray (listaFrutas, encontrouValor)


procuraValoremArray

/////////////Função tira média/////////

/* const notas = [4.5, 7.5, 4, 8]

const somaNotas = notas[0] + notas[1] + notas[2] + notas[3]
const media = somaNotas/4

console.log (media) */

function tiraMedia(arrayNumeros){
    let somaNotas = 0
    for(numero of arrayNumeros){
        somaNotas += numero
    }
    const media = somasNotas/arrayNumeros.lenth

    console.log(media)
}

tiraMedia(notas)
tiraMedia(precos)