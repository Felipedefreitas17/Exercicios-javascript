//7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.



export function soma() {

    let soma = 0;
    let contador = 1;
    
    while (contador <= 100) {
        soma = soma + contador

        contador++
        console.log(soma);

    }
}

// console.log(`A soma é ${soma}`);