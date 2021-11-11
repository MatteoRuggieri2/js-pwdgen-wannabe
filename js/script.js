// CONSEGNA

// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21



// VARIABLES
// casualNumber-variable
let casualNumber = 21;
console.log('Casual Number: ' , casualNumber)


// INPUT
// Welcome Message
alert(`Benvenuto in "The Insicure Password!
Clicca "ok" o premi "invio" per continuare`);

// Name Request
const userName = prompt('Qual è il tuo nome?');
console.log('Name: ' , userName)

// Surname Request
const userSurname = prompt('Qual è il tuo cognome?');
console.log('Surname: ' , userSurname)

// Color Request
const color = prompt('Qual è il tuo colore preferito?');
console.log('Color: ' , color)

// LOGIC
// Create Password
// const password = userName + userSurname + color + casualNumber;
// console.log('New Password: ' , password)

const password = `${userName}${userSurname}${color}${casualNumber}`
console.log('New Password: ' , password)

// OUTPUT
document.getElementById('new-password').innerHTML = password;