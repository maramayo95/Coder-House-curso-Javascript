
// Creamos la clase Anime para que tome como datos el título  y el precio
class Anime {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Creamos los objetos de mechas correspondientes 
let animeAirayuuki = new Anime ('Airayuuki', 300)
let animeAkira = new Anime ('Akira', 300);
let animeCodeGeas = new Anime ('Code Geas' , 300);
let animeDateAlive = new Anime ('Date Alive', 300);
let animeGhost = new Anime ('Ghost', 300);
let animeEvangelion = new Anime ('Evangelion' , 300);
let animePsychoPass = new Anime ('Psycho Pass',300);
let animeSusei = new Anime ('Susei',300);
let anime86 = new Anime ('Eighty Six',300);


//  Creamos el array Carrito  
let carrito = []; 

//Enlace con html de botones
/* 
let airayuuki = document.querySelector('#button1');
let akira = document.querySelector('#button2');
let codeGeas = document.querySelector('#button3');
let dateAlive = document.querySelector('#button4');
let ghost = document.querySelector('#button5');
let evangelion = document.querySelector('#button6');
let psychoPass = document.querySelector('#button7');
let susei = document.querySelector('#button8');
let eightySix = document.querySelector('#button9');
 */
let botonCompra = document.querySelectorAll('.btn');

// Enlace con html de la seccion carrito
let carritoHtml = document.querySelector('.carritoCompras');


// carritoHtml.style.display = "none";


//Funciones
function ocultarCarrito(){
    carritoHtml.style.display = "none"; 
}

function mostrarCarrito(){
    carritoHtml.style.display = "block";
}


// Eventos 





