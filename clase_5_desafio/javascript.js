class anime {
    constructor (nombre, year, genero) {
    this.nombre = nombre;
    this.year = year;
    this.genero = genero;
    }
    
    agregar(){
        console.log("Has agregado al carrito el anime")
    }

    eliminar(){
        console.log("Has quitado de tu carrito de compras el anime")
    }

    comprar(){
        console.log("Has realizado la compra del anime")
    }

    toString(){
        console.log(`Usted ha seleccionado la pelicula: ${this.nombre} \n  Año: ${this.year} \n  Genero: ${this.genero}`)
    }

}

const pelicula1 = new pelicula('Psycho Pass', 2017, 'Mechas');
 
