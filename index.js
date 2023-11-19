class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque

        if(this.tipo === "mago"){
            ataque = "magia"
        }else if(this.tipo === "guerreiro"){
            ataque = "espada"
        }else if(this.tipo === "monge"){
            ataque = "artes marciais"
        }else if(this.tipo === "ninja"){
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let Personagem1 = new heroi("Felipe", 34, "mago")
let Personagem2 = new heroi("Felipe", 34, "guerreiro")
let Personagem3 = new heroi("Felipe", 34, "monge")
let Personagem4 = new heroi("Felipe", 34, "ninja")

Personagem1.atacar()
Personagem2.atacar()
Personagem3.atacar()
Personagem4.atacar()
