/* Descrizione esercizio:
1. Chiedi all’utente il suo nome,
2. poi chiedi il suo cognome,
3. poi chiedi il suo colore preferito
4. Infine scrivi sulla pagina nomecognomecolorepreferito21
Copiate questa descrizione nel vostro file js come commento.*/

let name = prompt ('Inserisci il tuo Nome');
let surname = prompt ('Inserisci il tuo Cognome');
let color = prompt('Inserisci il tuo colore preferito');
const number = '21';

// Visualizzazione nella Console
console.log( 
    `
    ${name}${surname}${color}${number}
    `
);
// Visualizzazione in Pagina
document.writeln(name + surname + color + number);
