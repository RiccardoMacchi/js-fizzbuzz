// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Stampa di numeri da 1 a 100

for (let i=1; i <=100; i++){
    
// verifica della condizione se sono divisivili per 3
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i, "divisibile per 3 e 5")
    } else if (i % 3 === 0){
        console.log(i, "divisibile per 3")
    } else if (i % 5 === 0){
        console.log(i, "divisibile per 5")
    } else {
        console.log(i, "non divisibili per 3 o 5")
    }
        


    
}