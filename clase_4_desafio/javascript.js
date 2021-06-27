let peso = parseFloat(prompt("Ingrese su peso en Kg"));
let estatura = parseFloat(prompt("Ingrese su altura en Metros"));

let imc = peso/(Math.pow(estatura,2));

  if  (imc <=18.5) {
    alert(imc + " " + "El indice de masa corporal indica que tu peso es bajo");
} else if ((imc>=18.5) && (imc<=24.4)) {
    alert(imc + " " + "El indice de masa corporal indica que tu peso es ideal")
} else if ((imc>25) && (imc<=29.9)){
    alert(imc + " " + "El indice de masa corporal indica que estas en sobrepeso")
} else if ((imc>=30) && (imc<=34.9)){
    alert(imc + " " + "El indice de masa corporal indica que estas en Obesidad I")
} else if ((imc>=35)&& (imc<=39.9)){
    alert(imc + " "+ "El indice de masa corporal indica que estas en Obesidad II")
} else if ((imc >=40)) {
    alert (imc + " " + "El indice de masa corporal indica que estas en Obesidad III") 
}







