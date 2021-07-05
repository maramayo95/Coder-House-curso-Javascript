//Cree la clase para cada producto Anime que tenga la pagina
class anime {
    constructor (nombre, year, genero) {
    this.nombre = nombre;
    this.year = year;
    this.genero = genero;
    }
    
    //Mediante metodos determino que funciones se pueden realizar con el objeto a crear 
    // Se puede agregar al carrito , eliminar, Comprar u obtener información sobre cada objeto

    toString(){
        console.log(`Usted ha seleccionado el producto \n  Anime: ${this.nombre} \n  Año: ${this.year} \n  Genero: ${this.genero}`)
    }

}

 

const anime1 = new anime('Psycho Pass', 2017, 'Mechas');
const anime2 = new anime('Ghost in the Shell',1995,'Mechas');
const anime3 = new anime('Akira',1988,'Mechas');


let counter = 0;
let productos = parseInt(prompt("Cuantos productos desea llevar?"));
const carrito = [];



while(counter < productos) {
    const peticionCliente = prompt(`Ingrese un producto que desea comprar puede elegir los siguientes anime: \n Psycho Pass \n Ghost in the Shell \n Akira`)
    
}

console.log(peticionCliente);


 
