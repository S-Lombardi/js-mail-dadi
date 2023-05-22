"use strict";

const pulsanteDadi = document.getElementById("pulsante-gioco");

pulsanteDadi.addEventListener('click', function() {

    //Genero un numero random da 1 a 6 per il pc
    let numeroPc = Math.ceil(Math.random() * 6);
    console.log(numeroPc);
    
    //Genero un numero random da 1 a 6 per l'utente
    let numeroUtente = Math.ceil(Math.random() * 6);
    console.log(numeroUtente);
    
    //creo una variabile per il messaggio da visualizzare
    let risultato;

    //condizioni per giocare
    if(numeroUtente === numeroPc) {
        risultato = "Pareggio!";
    }
    else if( numeroUtente > numeroPc){
        risultato = "Hai vinto tu :)";
    }
    else{
        risultato = "Ha vinto il computer :(";
    }
    
    //visualizzo i numeri che sono capitati ai due giocatori
    document.getElementById("pc").innerHTML = `numero pc: ${numeroPc}`;
    document.getElementById("utente").innerHTML = `il tuo numero: ${numeroUtente}`;

    //visualizzo il risultato
    document.getElementById("vincitore").innerHTML= risultato;
})
