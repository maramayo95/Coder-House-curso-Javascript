let precio = parseFloat(prompt("Ingrese un monto"));
let cuotas = parseFloat(prompt("Ingrese la cantidad de cuotas"));

const calculo = (precio,cuotas) =>  precio/cuotas 
const resultado = calculo(precio,cuotas)

document.write("Usted debe pagar" + " "+ precio + " " + "en" + " " + cuotas + " " + "cuotas" + " " + "." + "Debera pagar por mes"  + resultado + " " + "pesos");