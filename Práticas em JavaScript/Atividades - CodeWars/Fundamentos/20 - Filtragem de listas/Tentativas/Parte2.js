const filter_list = l => {return [...(l.filter(numeroInteiro => Number.isInteger(numeroInteiro)))]}
const resultado = filter_list([1,2,'a','b'])
console.log(resultado)