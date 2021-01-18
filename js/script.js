// **********snack 1***************************************


// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.


// var palla = {
//   nome : palla,
//   peso : 10
// };
//
// var modifica = parseInt(prompt("inserisci il nuovo peso"));





// **********snack 2***************************************


// Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// arrayZucchine = [
//   {
//     varieta : bianca,
//     peso : 1,
//     lunghezza : 10
//   },
//   {
//     varieta : bianca,
//     peso : 1,
//     lunghezza : 10
//   },
//   {
//     varieta : bianca,
//     peso : 1,
//     lunghezza : 10
//   },
//   {
//     varieta : bianca,
//     peso : 1,
//     lunghezza : 10
//   },
//   {
//     varieta : bianca,
//     peso : 1,
//     lunghezza : 10
//   },
//   {
//     varieta : bianca,
//     peso : 1,
//     lunghezza : 10
//   },
//   {
//     varieta : bianca,
//     peso : 1,
//     lunghezza : 10
//   },
//   {
//     varieta : bianca,
//     peso : 1,
//     lunghezza : 10
//   },
//   {
//     varieta : bianca,
//     peso : 1,
//     lunghezza : 10
//   },
//   {
//     varieta : bianca,
//     peso : 1,
//     lunghezza : 10
//   },
// ];
//
// for (var i = 0; i < arrayZucchine.length; i++){
//   for (var k in )
// }



// **********snack 3***************************************

// Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


arrayZucchine = [
  {
    varieta : "bianca",
    peso : 1,
    lunghezza : 10
  },
  {
    varieta : "bianca",
    peso : 1,
    lunghezza : 12
  },
  {
    varieta : "bianca",
    peso : 1,
    lunghezza : 17
  },
  {
    varieta : "bianca",
    peso : 1,
    lunghezza : 15
  },
  {
    varieta : "bianca",
    peso : 1,
    lunghezza : 14
  },
  {
    varieta : "bianca",
    peso : 1,
    lunghezza : 18
  },
  {
    varieta : "bianca",
    peso : 1,
    lunghezza : 15
  },
  {
    varieta : "bianca",
    peso : 1,
    lunghezza : 11
  },
  {
    varieta : "bianca",
    peso : 1,
    lunghezza : 19
  },
  {
    varieta : "bianca",
    peso : 1,
    lunghezza : 17
  },
];

var arraySmall = [];
var arrayBig = [];


for (var i = 0; i < arrayZucchine.length; i++){
  if (arrayZucchine[i].lunghezza < 15){
    arraySmall.push(arrayZucchine[i])
  }

  if (arrayZucchine[i].lunghezza > 15){
    arrayBig.push(arrayZucchine[i])
  }
}

var pesoSmall = 0;

for (var i = 0; i < arraySmall.length; i++){
  arraySmall[i].peso + pesoSmall;
}

console.log(pesoSmall);












console.log(arrayZucchine);
console.log(arraySmall);
console.log(arrayBig);
