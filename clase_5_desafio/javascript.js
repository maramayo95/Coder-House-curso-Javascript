//Cree la clase para cada producto Anime que tenga la pagina
class anime {
    constructor (nombre, year, genero) {
    this.nombre = nombre;
    this.year = year;
    this.genero = genero;
    }
    
    //Mediante metodos determino que funciones se pueden realizar con el objeto a crear 
    // Se puede agregar al carrito , eliminar, Comprar u obtener información sobre cada objeto
    agregar(){
        console.log(`Has agregado al carrito el anime ${this.nombre}`)
    }

    eliminar(){
        console.log(`Has quitado de tu carrito de compras el anime ${this.nombre}`)
    }

    comprar(){
        console.log(`Has realizado la compra del anime ${this.nombre}`)
    }

    toString(){
        console.log(`Usted ha seleccionado el producto \n  Anime: ${this.nombre} \n  Año: ${this.year} \n  Genero: ${this.genero}`)
    }

}

const anime1 = new anime('Psycho Pass', 2017, 'Mechas');

anime1.toString();
anime1.agregar();
anime1.eliminar();
anime1.agregar();
anime1.comprar();

 
