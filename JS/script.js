// Creo un aggancio con il DOM

const hookHtml = document.querySelector(".hook");

// Dichiaro un Array composto dagli invitati della lista

const guests = [
  "fabrizio.fornone@hotmail.it",
  "federico.peppini@gmail.com",
  "marcus.fenix@gears.com",
  "armando.maradona@foot.com",
];

// Dichiaro una costante che mi permetta di verificare se una informazione è valida

let find = false;

// Chiedo tramite un pormpt all'utente la sua mail

let emailRequest = prompt("Inserisci la tua email");

// Utilizzo un ciclo for per verificare se il nome inserito è presente

for (let i = 0; i < guests.length; i++) {
  if (emailRequest.toLowerCase() === guests[i].toLowerCase()) {
    find = true;
  }
}

console.log(find);

// Se è 'find' allora stampa il messaggio di benvenuto, altrimenti sbattilo fuori

if (find) {
  hookHtml.innerHTML = `Bene, la sua email <strong> ${emailRequest} </strong> fa parte della lista, benvenuto`;
} else {
  hookHtml.innerHTML = `Hei, la sua email <strong> ${emailRequest} </strong> non è presente nella lista, non faccia il furbo!`;
}

/* 
------
------
*/

// Genero randomicamente un numero da 1 a 6 per il Player e per il Computer

const playerNum = Math.floor((Math.random() * 6) + 1);

const computerNum = Math.floor((Math.random() * 6) + 1);





