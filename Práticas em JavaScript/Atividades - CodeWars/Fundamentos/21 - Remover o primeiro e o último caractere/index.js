function removeChar(str){
    if(str.length < 2){
        return ''
    } else if(str.length == 3){
        return str[1]
    } else {
        return str.slice(1,-1)
    }
};
const resultado = removeChar('Casa')
console.log(resultado)
