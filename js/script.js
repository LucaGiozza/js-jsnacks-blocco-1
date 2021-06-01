//  1 =L’utente inserisce due parole in successione, con due prompt.
//  Il software stampa prima la parola più corta,
//   poi la parola più lunga.
// 



//  primo esercizio :


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






    