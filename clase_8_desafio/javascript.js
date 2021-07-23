

// Uniendo elementos de HTML con JS 
// Haciendo Llamado a los inputs
let nombre = document.querySelector("#nombre");
let sexo = document.querySelector("#sexo");
let edad = document.querySelector("#edad");
let email = document.querySelector("#email");
let historia = document.querySelector("#historia");

// Haciendo llamado a las Alerts 
let refNombre = document.querySelector("#alertNombre");
let refSexo =  document.querySelector("#alertSexo");
let refEdad = document.querySelector("#alertEdad");
let refEmail = document.querySelector("#alertEmail");
let refHistoria = document.querySelector("#alertHistoria");

//funciones

refNombre.style.display = "none";
refSexo.style.display = "none";
refEdad.style.display = "none";
refEmail.style.display = "none";
refHistoria.style.display = "none";

//Nombre
function mostrarRefNombre(){
    refNombre.style.display = "block";
}
function ocultarRefNombre(){
    refNombre.style.display = "none";
}


nombre.addEventListener("focus", mostrarRefNombre)
nombre.addEventListener("blur", ocultarRefNombre)

//Sexo
function mostrarRefSexo(){
    refSexo.style.display = "block";
}
function ocultarRefSexo(){
    refSexo.style.display = "none";
}

nombre.addEventListener("focus", mostrarRefSexo)
nombre.addEventListener("blur", ocultarRefSexo)

//


//Edad
function mostrarRefEdad(){
    refEdad.style.display = "block";
}
function ocultarRefEdad(){
    refEdad.style.display = "none";
}

nombre.addEventListener("focus", mostrarRefEdad)
nombre.addEventListener("blur", ocultarRefEdad)

//Email

function mostrarRefEmail(){
    refEmail.style.display = "block";
}
function ocultarRefEmail(){
    refEmail.style.display = "none";
}

nombre.addEventListener("focus", mostrarRefEmail)
nombre.addEventListener("blur", ocultarRefEmail)


//Historia 

function mostrarRefHistoria(){
    refHistoria.style.display = "block";
}
function ocultarRefHistoria(){
    refHistoria.style.display = "none";
}

nombre.addEventListener("focus", mostrarRefHistoria)
nombre.addEventListener("blur", ocultarRefHistoria)
