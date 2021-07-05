class producto{
    constructor(nombre, cantidad){
        this.nombre = nombre;
        this.cantidad = parseInt(cantidad);
    }
    toString(){
        return `Agregaste ${this.nombre} al carrito`;
    }
}

let contador = 0;
let cantidadProductos = parseInt(prompt("Indique cuantos productos distintos que desea comprar"));

const carrito = [];

while (isNaN(cantidadProductos)){
    cantidadProductos = parseInt(prompt("Ingrese un valor válido(Númerico)"))
}

while (contador < cantidadProductos){
    const titulo = prompt("Ingrese el título del anime que desea comprar")
    const cantidad = parseInt(prompt("Ingrese la cantidad de productos que desea llevar"))
    const pedidoActual = new producto(titulo,cantidad)
    carrito.push(pedidoActual)
    contador++
}

carrito.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);

console.log(carrito);