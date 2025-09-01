let cpuNum = Math.random()* 1 * 6;
let playerNum = Math.random() * 6;


console.log("Tiri un dado, il risultato è: " + playerNum.toFixed(0));
console.log("Il tuo avversario tira un dado, il risultato è: " + cpuNum.toFixed(0));

if (playerNum > cpuNum) {
    console.log("Hai vinto!");
}else if (cpuNum > playerNum) {
    console.log("Hai perso!");
}else {
    console.log("Pareggio!")
}

