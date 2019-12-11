"use strict";
exports.__esModule = true;
var Carro_1 = require("./Carro");
var c1; //aqui apenas declarei uma "referência" a um carro, preciso criar o objeto
c1 = new Carro_1.Carro();
c1.ano = 1968;
c1.modelo = "Fuscao Neuvoso";
c1.placa = "ABC1234";
c1.andar();
c1.parar();
