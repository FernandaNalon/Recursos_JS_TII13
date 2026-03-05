// Função é claraca com: palavra reservada "function" + nome da função();
// Os parenteses guardarão o parâmetro.
function saudacao(nome) {
    console.log("Olá, ", nome);
};
saudacao("Gaby");
saudacao("Pedro");
saudacao("Helo");
saudacao("Gabriel");
saudacao("Lucas");
saudacao("Yasmim");
saudacao("Luis");

// Quando uma fulção retornar um valor, usar a palavra reservada "return".
function calcDobro(numero) {
    return numero*2;
};
// Armazena a função com parâmetro dentro de uma constante ou variável.
const numeroDobro = calcDobro(30);
console.log("O dobro de 30, é", numeroDobro);

// ARROW FUNCTION
 const saud = (nome) => {
    console.log("Oi,", nome);
 };
 saud("Fernanda");

 const dobro = (num) => {
    return num*2;
 };
 const numDobrado = dobro(7);
 console.log("O dobro de 7 é:", numDobrado);

// FUNÇÃO SIMPLIFICADA
// const + nomedafuncao + parametro + ação.
 const saudacao2 = nome => console.log("Oii,", nome);
 saudacao2("Luana");

 const dobro2 = numero => numero*2;
 const numDobro2 = dobro2(13);
 console.log("O dobro de 13 é:", numDobro2);