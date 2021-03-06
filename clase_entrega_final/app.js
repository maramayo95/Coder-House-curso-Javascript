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
function obtenerCarrito() {
let carrito ;
if(localStorage.getItem("carrito") != null){
   carrito = JSON.parse(localStorage.getItem("carrito"))
} else {
    carrito = [];
}

return carrito

}




//Evento para agregar el carrito 
for(let i = 0 ; i < addToCart.length; i++){
    addToCart[i].addEventListener("click", (e)=>{
        e.preventDefault()
        //Obtengo la ultima version de carrito en este scope
        const carrito = obtenerCarrito();
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
            lista.querySelectorAll(".listaEliminar").forEach((item) => item.remove())
            carritoGuardado.forEach(item => {
                
                const cartItem = document.createElement("li")
                cartItem.setAttribute("class","listaEliminar")
                cartItem.textContent = `${item.nombre} $ ${item.precio}`;
                lista.prepend(cartItem);
                const button= document.createElement('button');
                button.setAttribute("class","botonEliminar btn btn-danger ");
                button.appendChild(document.createTextNode('X'));
                cartItem.appendChild(button);
      
                // Boton para Eliminar un elemento en un carrito de compras

                const eliminarItem = document.querySelector('.botonEliminar');
                const listaHtml = document.querySelector('.listaEliminar'); 
                    //CREAR FUNCION PARA ELIMINAR ELEMENTOS HTML Y ELIMINARLO DIRECTAMENTE DEL JSON 
                eliminarItem.addEventListener("click",eliminarElemento);
                function eliminarElemento(){
                    //Shadowing
                    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
                    const elementoEliminado = carritoCompras.removeChild(listaHtml);
                    const nuevoCarrito = [];
                    let encontrado = false;
                    // Iteramos todos los elementos en carrito guardado y eliminamos uno solo que matche con el item que estamos
                    // eliminando 
                    for (let index = 0; index < carritoGuardado.length; index++) {
                        const producto = carritoGuardado[index];
                       if (producto.id == item.id && encontrado == false ){
                           encontrado = true;
                       } else {
                           nuevoCarrito.push(producto);
                       }
                    }
                    
                    //Reemplazo antiguo carrito por nuevo carrito
                    localStorage.setItem("carrito",JSON.stringify(nuevoCarrito))
                    mostrarCarritoTotal()
                }
        } )
        
    }



// Funcion para sumar todos los productos del carrito utilizando el método .reduce 

const mostrarCarritoTotal = () => {
   // const objetoCarrito = obtenerCarrito();
   const objetoCarrito = JSON.parse(localStorage.getItem("carrito"));
    const sumaTotal = objetoCarrito.reduce((acumulado, item) => {
        return acumulado + item.precio;
    }, 0)
    const totalCompra = document.querySelector('.totalCompra');
    totalCompra.textContent = `Total $ ${sumaTotal}`;
    
}




// Boton para confirmar compra

/* const confirmarCompra = document.querySelector("#confirmarCompra");

confirmarCompra.addEventListener("click",mensaje);

    function mensaje (){
        alert("Su compra ha sido realizada con éxito");
    }
 */

    mostrarCarritoTotal()



