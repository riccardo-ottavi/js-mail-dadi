let mailList = ["mariorossi@gmail.it", "carloverdi@gmail.com", "giuliobianchi@gmail.com"];
let userMail = prompt("Inserisci qui la tua mail");


let allowLogin = false;
for (let i = 0 ; i < mailList.length; i++){
    if (mailList[i] === userMail){
        allowLogin = true;
    }else {
        allowLogin = false;       
    }
}

if (allowLogin === true) {
    console.log("Benvenuto!");
}else {
    console.log("Accesso negato!");
}