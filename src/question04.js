import leia from "readline-sync";
var qtdJogador = leia.questionInt("Informe a quantidade de jogadores: ")
var melhorNaPartida;
var maisPontos;

for(var i = 1;i <= qtdJogador; i++){
    var Pontos = 0;
    var nome = leia.question("Informe o nome do jogador: ");
    var qtdGols = leia.questionInt("Informe a quantidade de gols feitos: ");
    var pCertos = leia.questionInt("informe a quantidade de passes certos: ");
    var pErrados = leia.questionInt("Informe a quantidade de passes errados: ")
qtdGols = qtdGols * 50;
pCertos = pCertos * 10;
pErrados = pErrados * (-5);
Pontos = qtdGols + pCertos + pErrados
if(Pontos < 50){
    console.log("Pessima Partida!")
}else if(Pontos >= 50 && Pontos < 100){
    console.log("Partida Ruim!")
}else if(Pontos >= 100 && Pontos < 150){
    console.log("Fez o basico!")
}else if(Pontos >= 150 && Pontos < 200){
    console.log("Foi bem na partida!")
}else{
    console.log("Jogou Demais!")
}
if(maisPontos === undefined || maisPontos < Pontos){
    maisPontos = Pontos
    melhorNaPartida = nome
}
} 
console.log("O melhor jogador da partida foi " + melhorNaPartida + " com " + maisPontos + " pontos!")