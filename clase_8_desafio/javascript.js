

//Objeto paciente

class Paciente {
    constructor (nombre,sexo,edad,email,historia){
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;
        this.email = email;
        this.historia = historia; 
    
    }
}
// Uniendo elementos de HTML con JS 
// Haciendo Llamado a los inputs
let nombre = document.querySelector("#nombre");
let sexo = document.querySelector("#sexo");
let edad = document.querySelector("#edad");
let email = document.querySelector("#email");
let historia = document.querySelector("#historial");

//Haciendo Llamado a los Botones

let guardar = document.querySelector("#botonGuardar");

// Haciendo llamado a las Alerts 
let refNombre = document.querySelector("#alertNombre");
let refSexo =  document.querySelector("#alertSexo");
let refEdad = document.querySelector("#alertEdad");
let refEmail = document.querySelector("#alertEmail");
let refHistoria = document.querySelector("#alertHistoria");

//funciones inputs

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

sexo.addEventListener("focus", mostrarRefSexo)
sexo.addEventListener("blur", ocultarRefSexo)

//


//Edad
function mostrarRefEdad(){
    refEdad.style.display = "block";
}
function ocultarRefEdad(){
    refEdad.style.display = "none";
}

edad.addEventListener("focus", mostrarRefEdad)
edad.addEventListener("blur", ocultarRefEdad)

//Email

function mostrarRefEmail(){
    refEmail.style.display = "block";
}
function ocultarRefEmail(){
    refEmail.style.display = "none";
}

email.addEventListener("focus", mostrarRefEmail)
email.addEventListener("blur", ocultarRefEmail)


//Historia 

function mostrarRefHistoria(){
    refHistoria.style.display = "block";
}
function ocultarRefHistoria(){
    refHistoria.style.display = "none";
}

historial.addEventListener("focus", mostrarRefHistoria)
historial.addEventListener("blur", ocultarRefHistoria)


//funciones botones 
function guardarDatos(){
    let nombreLocal = document.querySelector("#nombre").value;
    let sexoLocal = document.querySelector("#sexo").value ;
    let edadLocal  =document.querySelector("#edad").value ;
    let emailLocal = document.querySelector("#email").value;
    let historiaLocal = document.querySelector("#historial").value; 

    let paciente = new Paciente(nombreLocal, sexoLocal, edadLocal, emailLocal, historiaLocal)
    localStorage.setItem("paciente",JSON.stringify(paciente))
    
    
}

botonGuardar.addEventListener("click",guardarDatos);

// Accordeon 
let paciente = document.querySelector("#paciente");
//Ocultar campo del paciente 
paciente.style.display ="none";

