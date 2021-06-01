// secondo esercizio:
 //2=Il software deve chiedere per 5 volte all’utente di inserire
 // un numero. Il programma stampa la somma di tutti i numeri 
 // inseriti. Esegui questo programma in due versioni, con il
 // for e con il while.

//  con for:

var somma = 0;

for ( var i = 0 ; i < 5; i++){
   numero = parseInt(prompt('inserisci il numero'));
   console.log(numero);
   somma  = somma + numero ;
}

document.getElementById('calcolo').innerHTML = somma;
console.log(somma)

