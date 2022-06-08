// email che hanno il permesso di accesso
let emails = [ "ciao1@ciao.it" , "ciao2@ciao.it" , "ciao3@ciao.it"];
let button = document.querySelector("button");
let output = document.querySelector("h1")
// evento on click
button.addEventListener( "click" , function(){
    let userEmail = document.getElementById("email").value;
    let finalOutput = "";
    console.log(userEmail);
    // controllo che la mail sia presente tra quelle con permesso
    for(let i = 0 ; i < emails.length ; i++){
        if(userEmail === emails[i]){
            // output positivo
            finalOutput = `<h1 class="">La tua email è presente e quindi puoi accedere</h1>`
            console.log(output);
            break;
        }else if(userEmail != emails[i] && i === emails.length - 1){
            // output negativo
            finalOutput = `<h1 class="">email non presente</h1>`
            console.log(output);
            break;
        }
    }
    document.getElementById("output").innerHTML = finalOutput
}
);