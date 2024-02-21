function encontrarMaiorNumero(numeros) {
    let maiorNumero = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }
    return maiorNumero;
}

let numeros = [10, 5, 20, 15, 8];
let maior = encontrarMaiorNumero(numeros);
console.log("O maior número no array é:", maior);