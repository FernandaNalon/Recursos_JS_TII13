const numeros = [1,2,3,4,5,6,7,8,9,10];
// array = 0,1,2,3,4,5,6,7,8,9 (posições)

// Método: forEach
// Percorre o array trazendo o valor e o indice.
numeros.forEach((valor, indice) => {
    console.log("Na posição:",indice,"está o valor:",valor);
});

// Método filter()
// Permite que criar uma nova lista sem modificar a 
// original (dentro de uma constante).

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0; //Condição verdadeira
});

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 != 0; //Condição verdadeira
});

console.log("Todos os números:", numeros);
console.log("Todos os pares:", numerosPares);
console.log("Todos os ímpares:", numerosImpares);

// Método MAP
// Permite manipular os dados, armazenando em um novo array
// sem modificar o array original.

const numerosDobrados = numeros.map((numero) => { 
    return numero*2; // Ação de modificação.
});

console.log("Valores dobrados:", numerosDobrados);