console.log("ciao")

//1.

function numeriInteri(a,b){
    if(a === 50 || b === 50){
        return true
    } else if(a+b === 50){
        return true
    } else {
        return false
    }
}

console.log(numeriInteri(25,25))

//2.

function rimuoviCarattere(string, carattereDaTogliere){
    let stringaModificata = string.split(carattereDaTogliere).join('');
    return stringaModificata
}

console.log(rimuoviCarattere("ciao", "o"))

function rimuoviCaratterePosizionePrecisa(string, position){
    //slice() extracts a part of a string and returns the extracted part in a new string.
    //slice(0, position): This gets the part of the string before the specified position.
    //slice(position + 1): This gets the part of the string after the character you want to remove.
    let stringaModificata = string.slice(0, position) + string.slice(position + 1);
    return stringaModificata
}

console.log(rimuoviCaratterePosizionePrecisa("ciao", 1))

//3.

function controllaNumeri(a, b){
    if(a,b >= 40 || a,b <= 60 || a,b >= 70 || a,b <= 100){
        return true
    } else {
        return false
    }
}

console.log(controllaNumeri(59, 99))

//4.

function nomeCittà(nome){
    if(nome.startsWith("New") || nome.startsWith("Los")){
        return true
    } else {
        return false
    }
}

console.log(nomeCittà("New Orleans"))

//5.

const numeri = [1,2,3,4,5,6];

function sommaArray(array){
    //the reduce() method iterates over the array and accumulates the sum of its elements
    //accumulator is the running total
    //currentValue is the current element in the array
    //0 is the initial value of the accumulator (starting from 0)
    let somma = numeri.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return somma;
}

console.log(sommaArray(numeri))

//6.

const numeri2 = [7,8,9,10]

function checkNumeri(array){
    if (!array.includes(1) || !array.includes(3)){
        return true
    } else{
        return false
    }
}

console.log(checkNumeri(numeri))

//7.

function angolo(gradi){
    if(gradi < 90){
        console.log("ANGOLO ACUTO")
    } else if(gradi > 90 || gradi < 180){
        console.log("ANGOLO OTTUSO")
    } else if(gradi === 90){
        console.log("ANGOLO RETTO")
    } else if (gradi === 180) { //non funziona
        console.log("ANGOLO PIATTO")
    }
 
}

console.log(angolo(88))

//8.

const frase = "Fabbrica Italiana Automobili Torino"

function acronimo(stringa){
    const parole = frase.split(" "); //dividere stringa in singole parole
    const primaLettera = parole.map (parola => parola.charAt(0)); //prendere la prima lettera di ciascuna parola
    return primaLettera.join(""); //unire le prime lettere delle singole parole
}

const risultato = acronimo() //contenitore per il risultato

console.log(risultato)