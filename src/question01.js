import leia from "readline-sync"

var texto = leia.question("Informe um texto ou palavra: ")
texto = texto.toLowerCase()
var cont = 0;
for(var i = 0 ; i < texto.length ; i++){
if (texto[i] === "a" || texto[i] === "e" || texto[i] === "i" || texto[i] === "o" || texto[i] === "u" ){
cont++
}
}
console.log("Esse texto ou palavra possue: " + cont + " vogais.");