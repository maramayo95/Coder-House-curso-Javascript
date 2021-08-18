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

//Declaramos la url que vamos a usar para el GET
const URLGET ="https://www.dolarsi.com/api/api.php?type=valoresprincipales"


// AGREGAMOS UN BOTON CON JQUERY 


// ESCUCHAMOS EL EVENTO CLICK DEL BOTON AGREGADO


