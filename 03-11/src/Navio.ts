export class Navio{
   protected nome:string
   protected capacidadeTripulacao:number
   private vida:number 
   protected vidaMaxima:number
   protected velocidade:number
   protected canhoes:number

constructor(nome:string, capacidadeTripulacao:number, vida:number, vidaMaxima:number, velocidade:number, canhoes:number) {
    this.nome = nome
    this.capacidadeTripulacao = capacidadeTripulacao
    this.vida = vida
    this.vidaMaxima = vidaMaxima
    this.velocidade = velocidade
    this.canhoes = canhoes
}
public getVida(): number{
    return this.vida
}

 public receberDano(dano: number): void {

        if (dano < 0) {
            console.log("Dano inválido!");
            return;
        }

        this.vida -= dano;

        if (this.vida < 0) {
            this.vida = 0;
        }

        console.log(`${this.nome} recebeu ${dano} de dano.`);
    }

    protected recuperarVida(valor: number): void {

        if (valor <= 0) {
            console.log("Valor de recuperação inválido!");
            return;
        }

        this.vida += valor;

        if (this.vida > this.vidaMaxima) {
            this.vida = this.vidaMaxima;
        }
    }

    public navegar(): void {
        console.log(`${this.nome} está navegando pelo mar.`);
    }

    public atacar(): void {
        console.log(`${this.nome} está atacando com seus canhões!`);
    }

    public exibirInformacoes(): void {
        console.log(`
        ----- INFORMAÇÕES DO NAVIO -----
        Nome: ${this.nome}
        Capacidade: ${this.capacidadeTripulacao}
        Vida: ${this.vida}/${this.vidaMaxima}
        Velocidade: ${this.velocidade}
        Canhões: ${this.canhoes}`);
    }
}
