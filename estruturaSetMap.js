// Um set é uma estrutura de dados que guarda valores únicos.
let numeros = new Set();
numeros.add(1);
numeros.add(2);
numeros.add(2); // Não será adicionado.

console.log(numeros);

// Quando usar um Set?
// Quando desejar remover a duplicidade em um array
// Quando desejar uma verificação rápida de valores existentes
let arrayComDuplicidade = [1,2,2,3,4,4,5];
let arraySemDuplicidade = [...new Set(arrayComDuplicidade)];

console.log("Array com duplicidade:", arrayComDuplicidade);
console.log("Array sem duplicidade usando Set:", arraySemDuplicidade);

// Estrutura MAP
// Armazena informações associadas a chaves específicas;
// mantendo a ordem de inserção de informações.
let mapa = new Map();

// (chave, valor)
mapa.set('nome', 'Fernanda');
mapa.set('idade', 26);

console.log(mapa.get('nome'));
console.log(mapa.get('idade'));

// Usando diferentes tipos de chaves (função, objeto)
let chaveFuncao = function() {};
let chaveObjeto = {};

let mapaVariado = new Map();

mapaVariado.set(chaveFuncao, 'Valor da função.');
mapaVariado.set(chaveObjeto, 'Valor do objeto.');

console.log(mapaVariado.get(chaveFuncao));
console.log(mapaVariado.get(chaveObjeto));

// DIFERENÇA ENTRE ARRAY, SET E MAP:
// Array: Armazena varios valores podendo ter duplicidade de informação.
// Set: Verifica os valores, Guardando valores únicos, evitando duplicidade.
// Map: Armazenas pares de informações com chave e valor único (informações específicas).