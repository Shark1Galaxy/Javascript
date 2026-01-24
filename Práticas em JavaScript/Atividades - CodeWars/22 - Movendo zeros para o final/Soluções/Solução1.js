//Solução incrivel
const moveZeros = arr => {
    return [
        ...(arr.filter(numeroSemZer => numeroSemZer !== 0)),
        ...(arr.filter(numeroComZero => numeroComZero === 0))
    ]
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))