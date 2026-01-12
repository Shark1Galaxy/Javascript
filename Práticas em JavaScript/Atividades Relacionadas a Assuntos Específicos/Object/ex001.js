/*
1. Listar Propriedades de um Objeto 
Escreva um programa em JavaScript para listar as propriedades de um objeto JavaScript. 

Objeto de exemplo: 
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12 
}; 

Saída esperada: name, sclass, rollno
*/
const estudanteDados = () => {return {nome: 'Marcos',sclass: '3º ANO', rollno: 12}}

const nomePessoa = estudanteDados().nome
const sclassPessoa = estudanteDados().sclass
const rollno = estudanteDados().rollno

console.log(nomePessoa, sclassPessoa, rollno)