// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Stampa di numeri da 1 a 100
let displayNum;
let container = document.getElementById("container");
document.getElementById("click_fb").addEventListener("click",
    () => {

        for (let i = 1; i <= 100; i++) {

            // document.getElementById("container").innerHTML += `<div class="box"> <span> ${displayNum} </span> </div>`
            // Stampa in pagina dei box con i vari numeri
            // Creazione elemento div
            let myBox = document.createElement("div");
            // Inserito elemento div mybox all'interno di container
            container.append(myBox);
            // Aggiunta classe generale mybox
            myBox.className = "my_box";
            // Inserito contenuto i(fiz buzz fizzbuzz o numero) dentro container appena creato mybox
            // verifica della condizione se sono divisivili per 3 e 5
            if (i % 3 === 0 && i % 5 === 0) {
                displayNum = "FizzBuzz";
                // Aggiunta sua classe 
                myBox.classList.add("fizz_buzz");
                console.log(i, "divisibile per 3 e 5");
            } else if (i % 3 === 0) {
                displayNum = "Fizz";
                // Aggiunta sua classe
                myBox.classList.add("fizz");
                console.log(i, "divisibile per 3");
            } else if (i % 5 === 0) {
                displayNum = "Buzz";
                // Aggiunta sua classe
                myBox.classList.add("buzz");
                console.log(i, "divisibile per 5");
            } else {
                displayNum = i;
                console.log(i, "non divisibili per 3 o 5");
            }
            let contNum = document.createElement("span");
            myBox.append(contNum);
            contNum.append(displayNum);
            console.log(myBox);
            // document.getElementById("container").innerHTML += `<div class="box"> <span> ${displayNum} </span> </div>`
        }
    }
)