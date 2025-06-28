function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo.");
      
    } else{
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(result);    
    }


   console.log(randomNumber);





    console.log(randomNumber);

    console.log(min, max);

    alert(`O número sorteado é: ${randomNumber}`);
    

}


