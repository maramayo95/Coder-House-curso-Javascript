/* Al crear un querySelectorAll genero un array de objetos que incluye 
a todos los botones que figuran en html como "Agregar al Carrito" */
const agregarCarritoBotones = document.querySelectorAll('.botonesCarrito');

//Selecciono el div carritoCompras para luego inyectar html 
const carritoCompras = document.querySelector('.carritoCompras')

//Dado que cree un array de objetos empleo el bucle forEach para poder ahorrar código  y no ponerle a cada uno el evento 'click'
agregarCarritoBotones.forEach(agregarAlCarritoBoton =>{agregarAlCarritoBoton.addEventListener('click', agregarAlCarritoClickeado)} )


// creo la función para que detecte cual boton fue clickeado  y a su vez recopile los datos del nombre y el precio
function agregarAlCarritoClickeado(event) {
    const button = event.target; 
    const elemento = button.closest('.elementoCarta');
    const elementoTitulo = elemento.querySelector('.elementoTitulo').textContent;
    const elementoPrecio = elemento.querySelector('.elementoPrecio').textContent; 
 agregarElementosAlCarrito(elementoTitulo,elementoPrecio);
}

const carritoSeccion = document.querySelector('.carritoSeccion')
/* cuando pueda saber como colocar el condicional dejo este codigo
 carritoSeccion.style.display = "none"*/ 

//inyecto html  desde javascript
function agregarElementosAlCarrito (elementoTitulo,elementoPrecio){
  const filaCarritoShopping =   document.createElement('div');
  const contenidoCarritoShopping = `
  <div class="carritoCompras">
  <div class="row filaUno py-3">
  <div class="col-3"><p>${elementoTitulo}</p> </div>
  <div class="col-3"><p>Cantidad</p></div>
  <div class="col-3"><input type="number"></div>
  <div class="col-2"><p>${elementoPrecio}</p></div>
  <div class="col-1"><button class="borrar btn btn-danger">X</button></div>
  </div>

</div>`

filaCarritoShopping.innerHTML = contenidoCarritoShopping 
carritoCompras.append(filaCarritoShopping);
actualizarTotalCarrito ()
}
    
function actualizarTotalCarrito () {
  let total = 0;
  const shoppingCarritoTotal = document.querySelector('.shoppingCarritoTotal');
  const carritoComprasSuma = document.querySelectorAll('.carritoCompras')

}


