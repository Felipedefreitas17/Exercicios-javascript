// Autor: Felipe de Freitas 
// Dia 11/07/2023
// Faça um programa que receba um número inteiro do usuário e informe
// se este número é positivo ou negativo.

let prompt = require('prompt-sync')()

let numero = parseInt( prompt("Digite o primeiro numero "))


if (numero < 0){
    console.log(" O numero è negativo ")

}else{
    console.log(" O numero è positivo ")
}
