 // JQUERY 
// Agrego funcion Ready 
$( document ).ready(function() {
    console.log('El DOM esta listo');
});

window.addEventListener('load', function() {
    console.log( 'Todos los elementos de la ventana están cargados' );
});


// Agrego el evento click con la funcion para que me imprima en el div de HTML el elemento seleccionado 

$("#airayuuki").click(function(){
    $('.carritoJquery').append(" <p>Has escogido la pelicula Airayuuki su costo es de 300 $</p>");
});
$("#akira").click(function(){
    $('.carritoJquery').append(" <p>Has escogido la pelicula Akira su costo es de 300 $</p>");
});;
$("#codeGeas").click(function(){
    $('.carritoJquery').append(" <p>Has escogido la pelicula Code Geas su costo es de 300 $</p>");
});;
$("#dateAlive").click(function(){
    $('.carritoJquery').append(" <p>Has escogido la pelicula Date Alive su costo es de 300 $</p>");
});;
$("#evangelion").click(function(){
    $('.carritoJquery').append(" <p>Has escogido la pelicula Evangelion su costo es de 300 $</p>");
});;
$("#psychoPass").click(function(){
    $('.carritoJquery').append(" <p>Has escogido la pelicula Psycho Pass su costo es de 300 $</p>");
});;
$("#susei").click(function(){
    $('.carritoJquery').append(" <p>Has escogido la pelicula Susei su costo es de 300 $</p>");
});;
$("#eightySix").click(function(){
    $('.carritoJquery').append(" <p>Has escogido la pelicula Eighty Six su costo es de 300 $</p>");
});;

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

