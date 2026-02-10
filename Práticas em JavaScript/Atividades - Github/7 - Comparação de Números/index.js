
function comparatioNumber(number1,number2){
    if(number1 > number2){
        return ` ${number1} é maior`
    } else if(number1 < number2){
        return `${number2} é maior`
    } else if( number1 === number2){
        return `São iguais`
    }
}
console.log(comparatioNumber(5,2))