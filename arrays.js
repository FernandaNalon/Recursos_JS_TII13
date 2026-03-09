// Arrays me permitem colocar varios dados dentro de um único espaço.

const frutas = ['Uva', 'Kiwi', 'Banana', 'Melância', 'Abacaxi'];
// const frutas = [0,1,2,3,4];

// Exibir a primeira fruta do array
console.log("Primeira fruta:", frutas[0]);
// Exibindo a última fruta do array
console.log("Última fruta:", frutas[4]);
// Exibindo o total de frutas do array
console.log("Total de frutas:", frutas.length);

// o método push serve para adicionar uma nova informação ao array.
frutas.push('Melão');
console.log("Total de frutas, depois do push:", frutas.length);
console.log(frutas);

// método para remover informaçõe do array: splice.
// 1º parametro: posição do array.
// 2º parametro: quantos itens remover.
// removendo o abaxaxi:
frutas.splice(4,1);
console.log(frutas);

// PERCORRER UM ARRAY
// 3 maneiras de percorrer um array: for, for/of, forEach.

// Com laço FOR (para)
for (let i = 0;i<frutas.length;i++) {
    console.log("Indice:", i, "");
    console.log(frutas[i]);
};

// usando: forEach(para cada um).
// Maneira de percorer usando índice e valor.
console.log("Percorrendo com o forEach:");
// indice = posição no array.
// valor = valor de cada posição.
frutas.forEach((valor, indice) => {
    console.log("Índice:", indice, valor);
});

// usando o for/of(para/em).
// armazena a informação dentro de uma variável ou constante.
for(const fruta of frutas) {
    console.log("Fruta da vez:", fruta);
};