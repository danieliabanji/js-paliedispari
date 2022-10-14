"use strict";

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const parolaUtente = document.getElementById('parola');
const btn = document.getElementById('controllaParola');
const risultatoParola = document.getElementById('risultatoParola');


btn.addEventListener('click', function(){
    const parola = parolaUtente.value;
    let parolaInversa = invertiParola(parola);
    console.log(parolaInversa)
    if(parola == parolaInversa){
        risultatoParola.innerHTML = 'La parola che hai inserito è palindroma';
    } else {
        risultatoParola.innerHTML = 'La parola che hai inserito non è palindroma';
    }
});



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const selection = document.getElementsByTagName('select')[0];
const numero = document.getElementById('numero');
const numeroPc = document.getElementById('numeroPc');
const risultatoNumero = document.getElementById('risultatoNumero');
const gioca = document.getElementById('gioca');




gioca.addEventListener('click', function() {
    let numeroInserito = parseInt(numero.value);
    let scieltaUtente = selection.value;
    console.log(scieltaUtente,numeroInserito);

    let numeroComputer = randomNumber(1,5);
    numeroPc.innerHTML = numeroComputer;

    console.log(numeroComputer); 

    let somma = numeroInserito + numeroComputer;
    console.log(numeroInserito + ' + ' + numeroComputer + ' = ' + somma)

  if((isEven(somma) && scieltaUtente === 'pari') || (isEven(!somma) && scieltaUtente === 'dispari')) {
    console.log('hai vinto');
    risultatoNumero.innerHTML = '<span class="text-bg-success">hai vinto</span>';
  } else {
    console.log('hai perso');
    risultatoNumero.innerHTML = '<span class="text-bg-danger">hai perso</span>';

  }

})





