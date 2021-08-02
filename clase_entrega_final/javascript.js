const agregarCarritoBotones = document.querySelectorAll('.botonesCarrito');

agregarCarritoBotones.forEach(agregarAlCarritoBoton =>{agregarAlCarritoBoton.addEventListener('click', agregarAlCarritoClickeado)} )



function agregarAlCarritoClickeado(event) {
    const button = event.target; 
    const item = button.closest('.elementoCarta');
    console.log(item);
}