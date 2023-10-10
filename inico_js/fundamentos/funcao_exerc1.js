function verificaaprovacao (notaAluno, faltasAlunos, aulasCurso){

    if(notaAluno >= 50 && faltasAlunos <= 0.25 * aulasCurso){
        console.log('Aluno  Aprovado')
}else{
    console.log('Aluno Reprovado')
}
}
verificaaprovacao(60, 50, 40)//APROVADO
verificaaprovacao(10, 20,10)//REPROVADO

