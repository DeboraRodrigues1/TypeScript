export class Carro{
    placa: string;
    cor: string;
    modelo:string;
    ano: number;

    andar(): void{
        console.log("O carro "+this.modelo+" ("+this.placa+") do ano "+this.ano+"ta andando...");
    }

    parar():void{
        console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} acabou de parar`);
    }
}