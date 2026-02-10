/*Escreva uma função em JavaScript que oculte endereços de e-mail para impedir o acesso 
não autorizado. 

Dados de teste : 
console.log(protect_email(" robin_singh@example.com ")); 
" robin...@example.com " */

function protect_email(email){
    let indice = email.indexOf("@"); 
    let emailCortado = email.slice(indice);
    return email.slice(0,5) + '...' + emailCortado
}
console.log(protect_email('robin_singh@example.com'))