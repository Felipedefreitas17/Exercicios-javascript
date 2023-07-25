// Autor: Felipe de Freitas 
// Dia 11/07/2023
// Faça um programa que receba o nome, cargo e salário de um
// funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
// salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
// desse funcionário.

let prompt = require('prompt-sync')()

let nome = prompt('Digite seu Nome: ')
let cargo = prompt('Digite seu Cargo: ')
let salario = parseFloat(prompt('Digite seu Salario: '))


if (salario < 1000 ){
    salario = ((salario * 0.1) + salario)
 
 }else{
   
}

console.log(' Seu nome `e' + nome + " com cargo de" + cargo + "e salario de R$:" + salario )