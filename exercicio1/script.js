function printName() {
  const name = 'Daniel Menna'
  console.log(name)
}
printName()

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function printMultiples(array) {
  let result = []
  for (n of array) {
    result += `${n * 6}${n < array.length ? ', ' : '.'}`
  }
  return result
}

console.log(printMultiples(array))
