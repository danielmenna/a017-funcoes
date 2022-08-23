const number1 = +prompt('Digite um numero:')
const number2 = +prompt('Digite um outro numero:')

function function1(n1, n2) {
  let sum = n1 + n2
  return sum
}
console.log(`${number1} + ${number2} = ${function1(number1, number2)}`)

function function2(n1, n2) {
  let substract = n1 - n2
  return substract
}
console.log(`${number1} - ${number2} = ${function2(number1, number2)}`)

function function3(n1, n2) {
  let multiple = n1 * n2
  return multiple
}
console.log(`${number1} * ${number2} = ${function3(number1, number2)}`)

function function4(n1, n2) {
  let division = n1 / n2
  return division
}
console.log(`${number1} / ${number2} = ${function4(number1, number2)}`)
