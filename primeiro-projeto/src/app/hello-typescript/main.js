var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES6 || ES2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3, 4];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
