/* 
Faça um programa que leia três valores (A, B, C) e mostre-os na ordem lida.  Em seguida, 
mostre-os em ordem crescente e decrescente.

Entrada
A
B 
C

Processo
1 - Entrada dos dados - V
2 - MOSTRAR NA TELA A ORDEM NORMAL - v

Saida
Ordem normal: 5 3 6
Ordem Crescente: 3 5 6
Ordem Decrescente: 6 5 3
*/

let textoPagina = document.querySelector('h1');
function clicou(){
    textoPagina.innerText = arrayLista.sort()  
}
let arrayLista = ['A', 'C', 'D'];

function dobleclick(){
    textoPagina.innerText = arrayLista.reverse()
}