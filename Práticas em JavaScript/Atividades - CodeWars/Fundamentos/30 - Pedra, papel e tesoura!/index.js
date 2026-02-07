/*As regras do jogo "Pedra, Papel, Tesoura" são:

Pedra vence Tesoura.
Tesoura vence papel.
Papel vence pedra,

Duas jogadas idênticas resultam em empate.
Vamos jogar! Você receberá jogadas válidas de dois jogadores de Pedra, Papel e Tesoura e deverá indicar qual jogador venceu: "Player 1 won!"para o jogador 1 e "Player 2 won!"para o jogador 2. Em caso de empate, retorne Draw!.

Exemplos:
ENTRADA                          Saida
"scissors",     "paper"     --> "Player 1 won!"
"scissors",     "rock"      --> "Player 2 won!"
"paper",        "paper"     --> "Draw!"
*/

function rps(p1,p2){
    //                       0       1         2
    const escolhaPessoa = ['rock','paper','scissors'];
    
    if(p1 === escolhaPessoa[0] && p2 === escolhaPessoa[2] || p1 === escolhaPessoa[2] && p2 === escolhaPessoa[1] || p1 === escolhaPessoa[1] && p2 === escolhaPessoa[0]){
    return 'Player 1 won!'
    } else if(p1 === escolhaPessoa[2] && p2 === escolhaPessoa[0] || p1 === escolhaPessoa[1] && p2 === escolhaPessoa[2] ||p1 === escolhaPessoa[0] && p2 === escolhaPessoa[1] ){
        return 'Player 2 won!'
    } else {
        return 'Draw!'
    }
}
console.log(rps('Pedra','Tessoura'))