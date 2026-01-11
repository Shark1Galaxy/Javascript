const pessoa1 = {
    nome: 'Marcos',
    sobrenome: 'Henrique',
    idade: 25,

    fala(){ //Uma função
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++
    }
}
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
