export class Carro{
    placa : string;
    cor   : string;
    modelo: string;
    ano   : number;

    andar(): void{
        // mostrando mensagens usando concatenações
        console.log("O carro"+this.modelo+"do ano"+this.ano+ "ta andando...");
    }

    parar(): void{
        // mostrando imagem usando expression languege 
        console.log(`O carro ${this.modelo} do ano ${this.ano} acabou de parar`);
    }

}