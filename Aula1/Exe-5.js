// Autor: Felipe de Freitas 
// Dia 11/07/2023
// Faça um programa receba dois valores e imprima qual é o maior
// número digitado.
let prompt = require('prompt-sync')()


let numero1 = parseInt( prompt("Digite o primeiro numero "))
let numero2 = parseInt( prompt("Digite o Segundo numero "))



if (numero1 > numero2){
    console.log(" O primeiro numero e: " + numero1 + " e e maior que o segundo" + numero2 )

}else{
    console.log(" O Segundo numero e: " + numero2 + "  e e maior que o primeiro" + numero1 )
    
}