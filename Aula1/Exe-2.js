// Autor: Felipe de Freitas 
// Dia 11/07/2023
// Uma empresa decide dar aumento de 30% aos funcionários cujo
// salário é inferior a 500 reais. Escreva um programa que receba o
// salário de um funcionário e imprima o valor do salário reajustado ou
// uma mensagem caso o funcionário não tenha direito a aumento..

let prompt = require('prompt-sync')()

let nome = prompt('Digite seu Nome: ')
let salario = parseFloat(prompt('Digite seu Salario: '))


if (salario < 500 ){
    salario = ((salario * 0.3) + salario)
 
 }else{
    console.log(' Seu nome e' + nome + 'maior que R$ 500,00 voce nao tem direito')
}

console.log(' Seu nome e :' + nome + "e seu novo salario è R$:" + salario )