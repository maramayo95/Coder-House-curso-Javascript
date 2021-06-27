let precio = parseFloat(prompt("Ingrese un monto"));
let cuotas = parseFloat(prompt("Ingrese la cantidad de cuotas"));
let iva = 0.21

const precioFinal = (precio,iva) => (precio + (precio*iva));
const resultadoImpuestos = precioFinal(precio,iva)
console.log("Su resultado final es" + " " + resultadoImpuestos);

const calculoUno = (precio,cuotas) =>  precio/cuotas 
const resultado = calculoUno(precio,cuotas)
console.log("Resultado de cuotas sin IVA" + " " + resultado);



const impuestos = (resultado,iva) => (resultado +(resultado * iva));
const resultadoFinal = impuestos(resultado,iva);
console.log("Resultado de cuotas con IVA" + " " + resultadoFinal);
//document.write("Usted debe pagar" + " "+ precio + " " + "en" + " " + cuotas + " " + "cuotas" + " " + "." + "Debera pagar por mes"  + resultado + " " + "pesos");
