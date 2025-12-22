let permissao = 'Gerente';

switch(permissao){
    case 'comum':
    console.log('Usuário Comum')
    break
    case 'Gerente':
        console.log("Usuário Gerente")
    break
    case 'Diretor':
        console.log("Usuário Diretor")
    break
    default:
        console.log('[ERRO] Usuário Não encontrado!')
}