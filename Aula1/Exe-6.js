// Autor: Felipe de Freitas 
// Dia 11/07/2023
// Faça um programa que receba 4 notas de um aluno, calcule e
// imprima a média aritmética das notas e a mensagem de APROVADO
// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
// 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let prompt = require('prompt-sync')()

let note1 = parseFloat( prompt("Digite a primeiro nota "))
let note2 = parseFloat( prompt("Digite a Segundo nota "))
let note3 = parseFloat( prompt("Digite a terceira nota "))
let note4 = parseFloat( prompt("Digite a quarta nota "))

let notageral= (note1+note2+note3+note4)/4



 if (notageral > 7){
     console.log("Nota:"+notageral+ "  Parabens voce foi aprovado" )

 }else if (notageral >= 5 || notageral <= 7 ){
     console.log("Nota:"+notageral+ "  Atencao voce esta de recuperacao" )

 }else{
    console.log("Nota:"+notageral+ "  Voce Reprovou" )

}