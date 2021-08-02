const agregarCarritoBotones = document.querySelectorAll('.botonesCarrito');
const carritoCompras = document.querySelector('.carritoCompras')


agregarCarritoBotones.forEach(agregarAlCarritoBoton =>{agregarAlCarritoBoton.addEventListener('click', agregarAlCarritoClickeado)} )



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

}
    
