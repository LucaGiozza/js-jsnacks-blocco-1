//  1 =L’utente inserisce due parole in successione, con due prompt.
//  Il software stampa prima la parola più corta,
//   poi la parola più lunga.
//  2=Il software deve chiedere per 5 volte all’utente di inserire
//  un numero. Il programma stampa la somma di tutti i numeri 
//    inseriti. Esegui questo programma in due versioni, con il
//    for e con il while.
//  3=Crea un array vuoto. Chiedi per 6 volte all’utente di 
// inserire un numero, se è dispari inseriscilo nell’array
//  4=In un array sono contenuti i nomi degli invitati alla festa
//  del grande Gatsby, chiedi all’utente il suo nome e
//   comunicagli se può partecipare o no alla festa.

// primo esercizio :


 var parola = prompt();
 var secondaParola = prompt();

 var first = parola.length;
 var second = secondaParola.length;

 if(first === second){
     document.getElementById("scritta").innerHTML = 'Sono ugiuali' + ' ' + parola + ' ' + secondaParola; 
    
     }else if(first < second) {
         document.getElementById("scritta").innerHTML = parola + ' ' + secondaParola  ;
     }else{
         document.getElementById('scritta').innerHTML = secondaParola + ' ' + parola;
     }
    