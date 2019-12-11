export class Carro{
    private placa: string;
    private cor: string;
    private modelo: string;
    private ano: number;
    private ligado: boolean;

    public getPlaca(): string{
        return this.placa;
    }
    public setPlaca(_placa:string): void{
        this.placa =_placa; 
    }
    public getCor(): string{
        return this.cor;

    }
    public setCor(_cor:string): void{
        this.cor =_cor; 

    }
    public getModelo(): string{
        return this.modelo;

    }
    public setModelo(_modelo:string): void{
        this.modelo =_modelo; 
    }
    public getAno(): number{
        return this.ano;

    }
    public setAno(_ano:number): void{
        if (_ano < 0){
            console.log("ERRO!!!!");
        }
        else{
            this.ano =_ano; 
        }

    } 
    public ligar(): void{
        this.ligado = true;
        console.log("Carro "+this.modelo+ "  acabou de ser ligado");
    }
    public desligar(): void{
        this.ligado = false;
        console.log("Carro "+this.modelo+ " esta desligado");
    }
    public andar(): void{
        
        // mostrando mensagens usando concatenações
        if (this.ligado){
            console.log("O carro "+this.modelo+" ("+this.placa+") do ano "+this.ano+" ta andando...");
        }
        else{
            console.log("Para andar, ligue o carro "+this.modelo);
        }
    }

    public parar():void {
        // mostrando mensagens usando expression languages
        if (this.ligado){
            console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} acabou de parar`);
        }
        else{
            console.log("Num da pra estacionar um carro desligado "+this.modelo);
        }
    }

    public getInfo(): string {
        var info: string;
        info = `CARRO: ${this.modelo} / ${this.ano} / ${this.placa} / ${this.cor} / ${this.ligado}`;
        return info;
    }
    }