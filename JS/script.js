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

const emailRequest = prompt("Inserisci la tua email");

// Utilizzo un ciclo for per verificare se il nome inserito è presente

for (let i = 0; i < guests.length; i++) {
  if (emailRequest.toLowerCase === guests[i].toLowerCase) {
    find = true;
  }
}

if (find) {
  console.log("benvenuto");
} else {
  console.log("non puoi entrare");
}
