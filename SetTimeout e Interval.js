/* SetTimeout e SetInterval
   O setTimeout é uma função que permite executar um código após um determinado período de tempo.
   Exemplo:
   setTimeout(() => {
       console.log("Executado após 2 segundos");
   }, 2000);

   O setInterval é uma função que permite executar um código repetidamente em intervalos de tempo fixos.
   Exemplo:
   setInterval(() => {
       console.log("Executado a cada 1 segundo");
   }, 1000);
*/
const delay = 2000; // 2 segundos

setTimeout(() => {
    console.log("Executado após 2 segundos");
}, delay);

setInterval(() => {
    console.log("Executado a cada 1 segundo");
}, 1000);
// Para parar o setInterval, você pode usar clearInterval
// const intervalId = setInterval(() => {
//     console.log("Executado a cada 1 segundo");
// }, 1000);

// Para parar o setInterval, você pode usar clearInterval
// clearInterval(intervalId);
// Para parar o setTimeout, você pode usar clearTimeout
// const timeoutId = setTimeout(() => {
//     console.log("Executado após 2 segundos");
// }, delay);

// Para parar o setTimeout, você pode usar clearTimeout
// clearTimeout(timeoutId);

