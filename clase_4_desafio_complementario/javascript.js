let precio = parseFloat(prompt("Ingrese un monto"));
let cuotas = parseFloat(prompt("Ingrese la cantidad de cuotas"));
let iva = 0.21;

//Devuelve el precio con el iva incluido. Podría llamarse precioConIva
const precioFinal = (precio,iva) => (precio + (precio*iva));

// calculoUno podría tener un nombre más expresivo como cuotasSinIva
const calculoUno = (precio,cuotas) => precio/cuotas;

// Lo mismo impuestos podría llamar cuotasConIva
const impuestos = (resultado,iva) => (resultado +(resultado * iva));

// Resultado final podría resolverse llamando a la función cuotasConIva,
// que a su vez llame a como primer parámetro a la función cuotasSinIva, y como
// segundo parámetro a la variable iva
const resultadoFinal = impuestos(calculoUno(precio,cuotas), iva)
console.log("Resultado de cuotas con IVA" + " " + resultadoFinal);