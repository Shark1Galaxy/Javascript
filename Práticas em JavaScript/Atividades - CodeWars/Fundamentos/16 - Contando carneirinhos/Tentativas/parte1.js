function countSheeps(sheep) {
  return sheep.filter(Boolean).length
  //Aqui o filter estra filtrandos os valores boleanos e devolvendo em uma nova array. apenas os boleanos que eu me referir que no caso é true e o . length é o tamanho do array no caso de quantso true tem
}
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]
))