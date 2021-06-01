//  4=In un array sono contenuti i nomi degli invitati alla festa
//  del grande Gatsby, chiedi all’utente il suo nome e
//   comunicagli se può partecipare o no alla festa.

    // var trovato = false
    // var array = ['Luca', 'Marco', 'Paolo', 'Giorgio', 'Simone'];

    // var nome = prompt('Inserire nome')

    // if( nome == array ){
    //    document.getElementById('quarto').innerHTML = 'Invitato'
    // }else{
    //     document.getElementById('quarto').innerHTML = ' Non invitato'  
    // }


    var trovato = false;

    var inserire = prompt('Inserisci il tuo nome');
    var nomi = ['luca', 'matteo', 'simone', 'chiara' ];

      for (var i = 0; i < nomi.length; i++){
       if(inserire == nomi[i]){
         trovato = true;
       }
     }

     if(trovato){
    //    console.log('Nome accettato')
    document.getElementById('quarto').innerHTML = 'Puoi partecipare alla festa'
     }else{
       document.getElementById('quarto').innerHTML = 'Non puoi partecipare alla festa'
     }