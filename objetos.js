// Criando objetos em JS

const pessoa = {
    nome: "Maicon",
    idade: 34,
    profissão: "Cantor"
};

// Adicionando nova propriedade no objeto pessoa
pessoa.sobrenome = "Jackson";

// Exibindo propriedades do objeto
console.log("Nome:", pessoa.nome);
console.log("Sobrenome:", pessoa.sobrenome);

const livro = {
    titulo: "O Pequeno Principe",
    paginas: 300
};

// Adicionando novas propriedades ao objeto livro
livro.publicado = true; // propriedade do tipo boolean
livro.idiomas = [
    "Portugues", "Inglês", "Espanhol"
]; // propriedade com array

// Adicionando informações ao Array idiomas, presente no objeto livro.
livro.idiomas.push("Mandarim");
livro.idiomas.push("Francês");

console.log("Livro:", livro);

// Deletando propriedade paginas, do objeto livro
delete livro.paginas;

console.log("Livro depois de remover as páginas:", livro);

const autor = {
    nome: "Antoine de Saint-Exupéry",
    nacionalidade: "Francês",
    idade: 72
};

//console.log("Autor:", autor);

// Adicionando o objeto autor inteiro para propriedade "autor" do objeto livro
livro.autor = autor;

console.log(livro);

// Exibindo o objeto autor, através do objeto livro
console.log("Autor do livro:", livro["autor"]);
