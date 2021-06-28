let usuario = prompt("Elija si quiere : piedra , papel o tijera");
console.log(usuario);

// Piedra = 1 , Papel = 2 , Tijera = 3 
let computadora = Math.floor(Math.random()*3) + 1;
console.log(computadora);

if ((computadora == 1) && (usuario == "piedra")){
    alert("La computadora eligió piedra y vos tambien. Hay empate")
} else if  ((computadora == 1) && (usuario =="papel")) {
    alert ("La computadora eligió piedra y vos elegiste papel. Has ganado")
} else if ((computadora == 1)&& (usuario =="tijera")) {
    alert ("La computadora eligió piedra y vos tijera. Has perdido ")
} else if ((computadora == 2)&& (usuario == "piedra")){
    alert ("La computadora eligió papel y vos piedra. Has perdido")
} else if ((computadora == 2)&& (usuario == "papel")){
    alert ("La computadora eligió papel y vos has elegido papel. Hay empate")
} else if ((computadora == 2)&& (usuario == "tijera")){
    alert("La computadora eligió papel y vos tijera. Has ganado")
} else if ((computadora == 3) && (usuario == "piedra")){
    alert ("La computadora eligió tijera y piedra. Has ganado ")
} else if ((computadora == 3)&& (usuario == "papel")){
    alert("La computadora eligió tijera y vos papel. Has perdido")
} else if ((computadora == 3) && (usuario == "tijera")){
    alert("La computadora eligió tijera y vos también. Han empatado")
} else {
    alert ("Escribi piedra papel o tijera. ")
}




