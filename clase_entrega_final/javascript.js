const agregarCarritoBotones = document.querySelectorAll('.botonesCarrito');

agregarCarritoBotones.forEach(agregarAlCarritoBoton =>{agregarAlCarritoBoton.addEventListener('click', agregarAlCarritoClickeado)} )



function agregarAlCarritoClickeado(event) {
    const button = event.target; 
    const elemento = button.closest('.elementoCarta');

    const elementoTitulo = elemento.querySelector('.elementoTitulo').textContent;
    const elementoPrecio = elemento.querySelector('.elementoPrecio').textContent; 

  
    
}