/* Operadores Lógicos
&& (E lógico) - Retorna verdadeiro se ambos os operandos forem verdadeiros.
|| (OU lógico) - Retorna verdadeiro se pelo menos um dos operandos for verdadeiro.  
! (NÃO lógico) - Inverte o valor lógico do operando, retornando verdadeiro se o operando for falso e vice-versa.    
TRUE - Representa um valor lógico verdadeiro.
FALSE - Representa um valor lógico falso.
EXEMPLO:
let a = true;
let b = false;

let c = a && b; // false
let d = a || b; // true
let e = !a;    // false

Negação lógica é uma operação que inverte o valor lógico de uma expressão.
Se a expressão for verdadeira, a negação lógica a torna falsa, e vice-versa.
// Exemplo de negação lógica:
let isTrue = true;
let isFalse = false;

let notIsTrue = !isTrue;   // false
let notIsFalse = !isFalse; // true

*/

const firstNumber = 10;
const secondNumber = 5;

if (firstNumber > secondNumber) {
    console.log("O primeiro número é maior que o segundo.");
} else if (firstNumber < secondNumber) {
    console.log("O primeiro número é menor que o segundo.");
} else {
    console.log("Os números são iguais.");
}