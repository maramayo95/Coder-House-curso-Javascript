 // Creamos la clase Anime para que tome como datos el título  y el precio
class Anime {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Creamos los objetos de mechas correspondientes 

const animeAirayuuki = new Anime ('Airayuuki', 300)
const animeAkira = new Anime ('Akira', 300);
const animeCodeGeas = new Anime ('Code Geas' , 300);
const animeDateAlive = new Anime ('Date Alive', 300);
const animeGhost = new Anime ('Ghost', 300);
const animeEvangelion = new Anime ('Evangelion' , 300);
const animePsychoPass = new Anime ('Psycho Pass',300);
const animeSusei = new Anime ('Susei',300);
const anime86 = new Anime ('Eighty Six',300); 

// Creamos un array de Objetos
const animes = [animeAirayuuki, animeAkira, animeCodeGeas, animeDateAlive, animeGhost, animeEvangelion, animePsychoPass, animeSusei, anime86 ];








