//Creo array con lista di email
let listaEmail = ['Luke@gmail.com', 'Yoda@gmail.com', 'Chewbe@gmail.com','Leia@gmail.com', 'Han-Solo@gmail.com'];

//Chiedo all'utente con un prompt di inserire la sua email e gli assegno una variabile
let emailUtente = prompt("Inserisci la tua email");
 
//Creo un ciclo for per ciclare le email all'interno dell'array
for ( let i = 0; i<listaEmail.length; i++) {
    console.log(listaEmail[i]);

    //Se l'email dell'utente è uguale all'email della lista con indice "i" allora stampa ...
    if(emailUtente === listaEmail[i]) {

        console.log("Accesso consentito");
    }
    // Altrimenti stampa...
    else{
        console.log("Accesso non consentito");

    }

}




