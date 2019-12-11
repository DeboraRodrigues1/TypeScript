import {Carro} from "./Carro";

let c1: Carro; //aqui apenas declarei uma "referência" a um carro, preciso criar o objeto
c1 = new Carro();  

c1. ano = 1968;
c1.modelo = "Fuscao Neuvoso";
c1. placa = "ABC1234";

c1.andar();
c1.parar();

console.log(c1.modelo);
c1.setAno(-1968);

//c1.modelo = "fusca"
//c1.setModelo("fusca");

//console.log(c1.getModelo());