function rps(p1,p2){
    if(p1 === p2) return 'Draw!'
    /*Esse objeto define quem vence quem:

        rock vence scissors
        scissors vence paper
        paper vence rock

        Ou seja:
        a chave vence o valor*/
    const vencedoresPessoa = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    }
    return vencedoresPessoa[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!'
    /*Passo a passo:

    wins[p1] pega qual jogada o Player 1 vence
    Compara com a jogada do Player 2 (=== p2)
    Se for igual → Player 1 venceu
    Caso contrário → Player 2 venceu

    Exemplo prático:

    p1 = "rock"
    p2 = "scissors"

    wins["rock"] === "scissors" // true


    Resultado:
    "Player 1 won!" */
}