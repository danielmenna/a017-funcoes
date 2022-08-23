// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function returnSum(n1, n2) {
  let sum = n1 + n2
  return sum
}

console.log(returnSum(3, 4))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const input1 = prompt('Digite um numero:')
const input2 = prompt('Digite outro numero:')
function isHigher(i1, i2) {
  var higherThem
  if (+i1 >= +i2) {
    higherThem = true
  }
  return higherThem
}

console.log(
  `O primeiro numero é maior ou igual ao segundo? ${
    isHigher(input1, input2) ? 'Verdadeiro' : 'Falso'
  }`
)

// c) Uma função que receba um número e imprima se ele é par ou não

const number = +prompt('Digite um numero:')
function verificaPar(number) {
  let ePar = number % 2 === 0 ? 'É par' : 'É impar'
  return ePar
}
console.log(`${number} ${verificaPar(number)}`.toLocaleUpperCase())

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

const sentence = function () {
  let k1 = prompt('Escreva uma frase:')
  console.log(
    `A frase "${k1.toLocaleUpperCase()}" contém ${k1.length} caracteres.`
  ) //${k1.length}`)
}
sentence()
