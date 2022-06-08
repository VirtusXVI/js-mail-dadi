// genero causalmente un numero per il computer e per l'utente
let userNumber = Math.floor(Math.random() * 6);
let computerNumber = Math.floor(Math.random() * 6);
let ouput = "";

if(userNumber > computerNumber){
    output = `il giocatore ha vinto!`
}else{
    output = `il computer ha vinto!`
}
console.log(output)
alert(output)