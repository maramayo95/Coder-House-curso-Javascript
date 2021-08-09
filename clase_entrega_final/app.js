 // Creamos la clase Anime para que tome como datos el título  y el precio
class Anime {
    constructor (nombre, precio, id ){
        this.nombre = nombre;
        this.precio = precio;
        this.id = id; 
    }
}

// Creamos los objetos de mechas correspondientes 

const animeAirayuuki = new Anime ('Airayuuki', 300, 'airayuuki' )
const animeAkira = new Anime ('Akira', 300, 'akira');
const animeCodeGeas = new Anime ('Code Geas' , 300, 'codeGeas');
const animeDateAlive = new Anime ('Date Alive', 300, 'dateAlive');
const animeGhost = new Anime ('Ghost', 300, 'ghost');
const animeEvangelion = new Anime ('Evangelion' , 300, 'evangelion');
const animePsychoPass = new Anime ('Psycho Pass',300, 'psychoPass');
const animeSusei = new Anime ('Susei',300, 'susei');
const anime86 = new Anime ('Eighty Six',300, 'eightySix'); 

// Creamos un array de Objetos
const animes = [animeAirayuuki, animeAkira, animeCodeGeas, animeDateAlive, animeGhost, animeEvangelion, animePsychoPass, animeSusei, anime86 ];

const lista = document.querySelector('#carritoCompras');

// Creamos selectores de html
const addToCart = document.querySelectorAll('.addToCart');

//Almacenamiento en Local Storage
let carrito ;
if(localStorage.getItem("carrito") != null){
   carrito = JSON.parse(localStorage.getItem("carrito"))
} else {
    carrito = [];
}


//Evento para agregar el carrito 
for(let i = 0 ; i < addToCart.length; i++){
    addToCart[i].addEventListener("click", (e)=>{
        e.preventDefault()
        const seleccionado = addToCart[i].getAttribute("data-nombre");
        const busqueda =  animes.find(anime => anime.id == seleccionado);
        if (busqueda){
            carrito.push(busqueda)
        } else{
            alert("No se encontró el producto seleccionado")
        }
        localStorage.setItem("carrito", JSON.stringify(carrito))
        mostrarCarrito();
    })
    
}


// Funcion para inyectar HTML 
const mostrarCarrito = () => {
        const carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
        
        carritoGuardado.forEach(item => {
            const cartItem = document.createElement("li")
            cartItem.textContent = `${item.nombre} $ ${item.precio}`;
            lista.prepend(cartItem);
        } )

    }






    // Funcion para hacer la suma de productos
/* const sumaProductos = () => {
    
    const total = JSON.parse(localStorage.getItem());
    console.log(total);
}
 */



// bucle para recorrer localStorage
/* for(var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)));
  }
 */

// funcion para sumar todo el carrito
const mostrarCarritoTotal = ()  => {
const objetoCarrito = JSON.parse(localStorage.getItem("carrito"));
console.log(objetoCarrito);


const sumaTotal = objetoCarrito.reduce((acumulado, item) => {
    return acumulado + item.precio;
  }, 0)

  console.log(sumaTotal);
}

mostrarCarritoTotal();
  