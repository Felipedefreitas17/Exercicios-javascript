// Autor: Felipe de Freitas 
// Dia 11/07/2023
// Faça um programa que receba um número do usuário e informe
// se este número é par ou ímpar.

let prompt = require('prompt-sync')()


let numero = parseInt( prompt("Digite o primeiro numero "))

let restante = numero % 2 

if (restante != 0){
    console.log(" O numero è impar ")

}else{
    console.log(" O numero è par ")
}
