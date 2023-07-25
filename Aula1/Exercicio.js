let prompt = require('prompt-sync')()


// let nome = prompt('Digite seu Nome: ')
// console.log('Ola ' + nome)

// let numero = prompt('Digite um numero: ')

// if (numero > 10){
//     console.log ("Maior que 10")
// }else if (numero == 10){
//     console.log ("Maior que 10")

// } else {
//     console.log ("Menor que 10")
// }



//let letra = prompt('Digite uma letra: ')
// if (letra == 'a'){
//     console.log ("letra a")
// } else if (letra == 'b'){
//     console.log ("letra b")

// } else if (letra == 'c'){
//     console.log ("letra c")    

// }else{
//     console.log ("letra nao existe")
// }




// let letra = prompt('Digite uma letra: ')
//     switch (letra){
//         case "a":
//             console.log("letra a")
//             break;
//         case "b":
//                 console.log("letra b")
//             break; 
//         case "c":
//             console.log("letra c")
//                 break; 
//         default:
//             console.log ("letra nao existe")
//             break;

//     }



// let pNum = parseInt( prompt("Digite o primeiro numero "))
// let sNum = prompt("Digite o segundo numero ")

// let soma = pNum + parseInt(sNum);

// if (soma > 10){
//     console.log("A Soma e: " + soma + " e è maior que 10" )

// }else if (soma == 10){
//     console.log("A Soma e: " + soma + " e è igual que 10" )

// }else{
//     console.log("A Soma e: " + soma + " e è menor que 10" )

// }


// let letra = prompt("Digite uma letra ")
// let numero = prompt("Digite um numero ")

// poderia colocar o "OU" "||"


// if (letra == "a" && numero == "1"){
//     console.log("Acertou !!!!" )
// }else{
//     console.log("Errou !!!!" )
// }

// V && V == V
// V && F == F
// F && V == F
// F && F == F

// V || V == V
// V || F == V
// F || V == V
// F || F == F


let numero = parseInt( prompt("Digite o primeiro numero "))

let restante = numero % 2 

if (restante != 0){
    console.log(" O numero è impar ")

}else{
    console.log(" O numero è par ")
}





