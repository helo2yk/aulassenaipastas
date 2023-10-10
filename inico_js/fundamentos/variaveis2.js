//Tipos de váriveis

const n1 = 15
const n2 = '15'
const n3 = 15.5
const nome = 'Marivaldo'
const sobrenome = 'Silva '
const nomeCompleto = nome + " " + sobrenome
const listaNomes = ['João', 'maria', 'paulo']
const maioridade = true

console.log(`o tipo de variavel n1 é ${typeof n1}`)
console.log(`o tipo de variavel n1 é ${typeof n2}`)
console.log(`o tipo de variavel n1 é ${typeof n3}`)
console.log(`o tipo de variavel n1 é ${typeof listaNomes}`)
console.log(`o tipo de variavel n1 é ${typeof maioridade}`)


console.log(n1+n2) //1515
console.log(n1+n3) //30.5

//Tipagem fraca JS
console.log(n2 * 3) //45


//Operações Áritmeticas

console.log(2+2) //4
console.log(2-2) //0
console.log(2 * 2) //4
console.log(2 / 2) //1

console.log(2 + 2 * 2) //6
console.log( (2+2)*2) //8

console.log(nomeCompleto)