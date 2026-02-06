const filter_list = l => l.filter(numeros => Number.isInteger(numeros))
console.log(filter_list([1,2,"aasf","1","123",123]))