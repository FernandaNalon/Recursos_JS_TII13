// H = Higher
// O = Order
// F = Function
// Função de Alta Ordem
// Função que recebe outras funções como parâmetro e argumento.
function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
};
function soma(num1, num2) {
    return num1+num2;
};
function subtrair(num1, num2) {
    return num1-num2;
};
// Chamada da função de alta ordem
const resultadoSoma = calcular(10, 8, soma);
console.log("A soma dos dois valores é:", resultadoSoma);

const resultadoSubtracao = calcular(25, 15, subtrair);
console.log("A subtração dos dois números é:",resultadoSubtracao);

