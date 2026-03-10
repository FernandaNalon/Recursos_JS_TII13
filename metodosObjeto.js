const pessoa = {
    nome: "Fernanda",
    idade: 26,
    pets: ["Buck"],
    nacionalidade: "Brasileira"
};

// A estrutura FOR IN nos permite percorrer o objeto, dessa forma, retornará
// todas as chaves do objeto, sendo: nome, idade, pets e nacionalidade.
for(const chave in pessoa) {
    console.log("Chave:", chave);
};

// Acessando chaves e valores do objeto:
for(const chave in pessoa) {
    console.log("Chave:", chave);
    console.log("Valor:", pessoa[chave]);
};

// MÉTODOS PARA OBJETOS (keys, values, entries)

//Obtendo todas as chaves do objeto
const chaves = Object.keys(pessoa);

//Obtendo todos os valores do objeto
const valores = Object.values(pessoa);

//Obtendo pares de chave e valor do objeto
const entradas = Object.entries(pessoa);

console.log("Chaves:", chaves);
console.log("Valores:", valores);
console.log("Entradas (chave/valor):", entradas);