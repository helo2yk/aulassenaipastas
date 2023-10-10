const nomeAluno = 'Marivaldo'
const mediaAluno= 40
const faltasAluno = 20
const aulasCurso = 45

//Para que o aluno seja APROVADO a média deve ser maior ou igual a 50
//e quantidade de faltas menor ou igual a 25% do total de aulas do curso

if(mediaAluno >= 50 && faltasAluno <= 0.25*aulasCurso){
    console.log(`${nomeAluno}foi aprovado` )
}else if (mediaAluno < 50){
    console.log(`${nomeAluno} foi reprovado por NOTA`)
}else{
    console.log(`${nomeAluno} foi reprovado por falta`)
}


if(mediaAluno >= 50 && faltasAluno <= 0.25*aulasCurso){
    console.log(`${nomeAluno}foi aprovado` )
}else if (mediaAluno < 50){
    console.log(`${nomeAluno} foi reprovado por NOTA`)
}else{
    console.log(`${nomeAluno} foi reprovado por falta`)
}

