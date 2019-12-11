"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.andar = function () {
        console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + "ta andando...");
    };
    Carro.prototype.parar = function () {
        console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " acabou de parar");
    };
    return Carro;
}());
exports.Carro = Carro;
