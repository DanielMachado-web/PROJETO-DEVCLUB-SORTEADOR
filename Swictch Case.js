/* Switch Case
   A estrutura switch é utilizada para executar um bloco de código com base no valor de uma expressão.
   Ela é uma alternativa ao uso de múltiplas estruturas if-else.
   Exemplo:
   let fruta = "maçã";
   switch (fruta) {
       case "banana":
           console.log("A fruta é uma banana.");
           break;
       case "maçã":
           console.log("A fruta é uma maçã.");
           break;
       default:
           console.log("A fruta é desconhecida.");
   }
*/
const day = 3;

switch (day) {
    case 1:
        console.log("Hoje é domingo.");
        break;
    case 2:
        console.log("Hoje é segunda-feira.");
        break;
    case 3:
        console.log("Hoje é terça-feira.");
        break;
    case 4:
        console.log("Hoje é quarta-feira.");
        break;
    case 5:
        console.log("Hoje é quinta-feira.");
        break;
    case 6:
        console.log("Hoje é sexta-feira.");
        break;
    case 7:
        console.log("Hoje é sábado.");
        break;
    default:
        console.log("Dia inválido.");
}