//Funcion para que cuando cargue la pagina y este lista muestre el carrito con JQUERY 
$(document).ready(function() {
    mostrarCarrito();
});

$(".card-body").on("mouseover", function(){
    $(this).css("background-color", "rgba(19, 17, 17, 0.815)");
})


$(".card-body").on("mouseleave", function(){
    $(this).css("background-color", "rgba(19, 17, 17, 0.63)");
  
    
})

$(".elementoCarta").on("mouseover", function(){
    $(this).css("box-shadow", "2px 5px 5px 2px #EB341B");
   
    
  
})


$(".elementoCarta").on("mouseleave", function(){
    $(this).css("box-shadow", "none");
    
})


// API DOLAR

/******************** API del dólar  *********************/

const urlDolar = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
/** Agregamos un botón con jQuery **/
$("#cotizacion").append(`<button id="btnCotizador" class="col-2 fs-6 text-light btn btn-danger m-2">Cotizador</button>`);
/** Escuchamos el evento click del botón agregado **/
$("#btnCotizador").click(()=>{
    
    $.get(urlDolar, function(respuesta, estado) {
        if (estado === "success") {
            // console.log(respuesta);
            respuesta.forEach(element => {
                console.log(element.casa);
                $("#respuestaCotizacion").append(`
                <div class="col-12 bg-dark text-white text-center m-2">
                    <h2>${element.casa.nombre}</h2>
                    <p class="text-danger">${element.casa.compra}</p>
                    <p class="text-primary">${element.casa.venta}</p>
                </div>`);
                /*  console.log(element.casa.nombre);
                 console.log(element.casa.compra);
                 console.log(element.casa.venta); */
            })
        }
    })
});

