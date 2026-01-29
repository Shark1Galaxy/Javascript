/*
Deletar Propriedade  
Escreva um programa em JavaScript para remover a propriedade rollno do objeto abaixo. 
Também exiba o objeto antes ou depois de remover a propriedade.  
Objeto de exemplo:  

var student = {  
name: "David Rayy",  
  sclass : "VI",    
  rollno : 12  
};  
*/

const student = {  
name: "David Rayy",  
  sclass : "VI",    
  rollno : 12  
};  
function removeObjetc(){
     delete student.rollno
     return student
}
console.log(removeObjetc())

