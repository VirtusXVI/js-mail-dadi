// genero causalmente un numero per il computer e per l'utente
let userNumber = Math.floor(Math.random() * 6);
let computerNumber = Math.floor(Math.random() * 6);
let ouput = "";
// controllo se ha vinto il computer o l'utente
if(userNumber > computerNumber){
    output = `il giocatore ha vinto!`;
}else{
    output = `il computer ha vinto!`;
};
// output
console.log(output);
alert(output);