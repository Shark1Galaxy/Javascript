function ordemCrescent(arr){
    const [number1,number2] = arr
    return number1 > number2 ? [number2,number1] : [number1,number2]
}
const resultado = ordemCrescent([5,2])