import { Carro } from "./Carro";

var c1: Carro; // aqui apenas declarei uma "referencia" a um carro, preciso citar o objeto
c1: new Carro(); // agora sim, aloquei (reservei) memoria para armazenar as coisas

//vamos preencher  os dados
c1.ano    = 1968;
c1.modelo = "fuscao";
c1.placa  = "ABC1234";

// vamos manipular o carro com suas operações 
c1.andar();
c1.parar();