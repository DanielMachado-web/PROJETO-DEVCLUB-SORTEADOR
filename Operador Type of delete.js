/* IF
   A estrutura condicional IF é utilizada para executar um bloco de código com base em uma condição.
   Se a condição for verdadeira, o código dentro do bloco IF será executado.
   Caso contrário, o código será ignorado.

   Exemplo:
   let idade = 18;
   if (idade >= 18) {
       console.log("Você é maior de idade.");
   }


   ELSE
   A estrutura condicional ELSE é utilizada para executar um bloco de código quando a condição do IF é falsa.
    Se a condição do IF for falsa, o código dentro do bloco ELSE será executado.
    Exemplo:
    let idade = 16;
   if (idade >= 18) {
       console.log("Você é maior de idade.");
   } else {
       console.log("Você é menor de idade.");
   }            

   eLSE IF
   A estrutura condicional ELSE IF é utilizada para testar múltiplas condições. 
    Se a condição do IF for falsa, o código dentro do bloco ELSE IF será executado se a condição for verdadeira.
    Exemplo:
   let idade = 20;
   if (idade >= 18) {
       console.log("Você é maior de idade.");
   } else if (idade >= 12) {
       console.log("Você é um adolescente.");
   } else {
       console.log("Você é uma criança.");
   }
*/

    const temperature = -10;

   if (temperature === 1) {
       console.log("Está quente.");
   } else if (temperature < 15 && temperature > 0) {
       console.log("Está frio.");
   } else {
       console.log("Está agradável.");
       console.log("A temperatura é " + temperature + " graus.");
   }    

/*---------------------------------------------------------------------------------------*/
   /* Operadores Typeof e delete
   O operador typeof é utilizado para verificar o tipo de uma variável ou expressão.    
    Ele retorna uma string que representa o tipo do operando.
    Exemplo:
    let nome = "João";
    console.log(typeof nome); // Saída: "string"

    let idade = 30;
    console.log(typeof idade); // Saída: "number"

    let ativo = true;
    console.log(typeof ativo); // Saída: "boolean"

   O operador delete é utilizado para remover uma propriedade de um objeto.
   Ele pode ser útil para liberar memória ou para evitar que uma propriedade seja acessada.
   Exemplo:
   let pessoa = {
       nome: "Maria",
       idade: 25
   };
   delete pessoa.idade;
   console.log(pessoa); // Saída: { nome: "Maria" } 
    
   */

   const myObject = {
       name: "Daniel",
       age: 25,
       city: "São Paulo",
       address: "Rua Exemplo, 123",
   };


    delete myObject.address; // Remove a propriedade 'address' do objeto
    console.log(myObject); 