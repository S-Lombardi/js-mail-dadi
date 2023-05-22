"use strict";

//Genero un numero random da 1 a 6 per i pc
let numeroPc = Math.ceil(Math.random() * 6);
console.log(numeroPc);

//Genero un numero random da 1 a 6 perl'utente
let numeroUtente = Math.ceil(Math.random() * 6);
console.log(numeroUtente);


if(numeroUtente === numeroPc) {
    console.log("Pareggio!");
}
else if( numeroUtente > numeroPc){
    console.log ("Ha vinto l'utente :)")
}
else{
    console.log("Ha vinto il pc :(")
}