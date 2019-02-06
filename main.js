var entrada1
var entrada2
var entrada3
var entrada4
var entrada5
var randomNumber

let done1 = document.getElementById("done1");
let done2 = document.getElementById("done2");
let done3 = document.getElementById("done3");
let done4 = document.getElementById("done2");
let done5 = document.getElementById("done3");

var check1
var check2
var check3
var check4
var check5

function confirmAge (){
    let confirmAge = prompt("Please enter your age");
    let ageMin = 18;
    if (confirmAge >= ageMin) {
    alert ("Start playing!");
    } else {
    alert ("Please, come back in " + (ageMin - confirmAge) + " years!");
    }
}

confirmAge();

function bingo(){

    //función de crear números aleatorios
    function randomNumber() {
        varRandomNumber=Math.floor(Math.random() * 20) + 1;
        document.getElementById("saidNumber").innerHTML= "Said number: " + varRandomNumber;
        }

    //llamamos a la función de crear números aleatorios
    randomNumber();

    //función de comprobar el número
    function checkingNumber(){
        //Coleccion de inputs que recogen los numeros
        let entrada1 = document.getElementById("entrada1").valueAsNumber;
        let entrada2 = document.getElementById("entrada2").valueAsNumber;
        let entrada3 = document.getElementById("entrada3").valueAsNumber;
        let entrada4 = document.getElementById("entrada4").valueAsNumber;
        let entrada5 = document.getElementById("entrada5").valueAsNumber;
        //Coleccion de checkbox que se ticaran cuando el numero salga
        let check1 =document.getElementById("check1");
        let check2 =document.getElementById("check2");
        let check3 =document.getElementById("check3");
        let check4 =document.getElementById("check4");
        let check5 =document.getElementById("check5");

        //Comprobamos si el numero random es igual a alguna de las entradas
        if(varRandomNumber==entrada1){
            check1.checked=true;
        } else if (varRandomNumber==entrada2){
            check2.checked = true;
        } else if (varRandomNumber==entrada3){
            check3.checked = true;
        } else if (varRandomNumber==entrada4){
            check4.checked = true;
        } else if (varRandomNumber==entrada5){
            check5.checked = true;
        } else {
            document.getElementById("saidNumberMessage").innerHTML= "Just a bit more!"
        }
        //Si los cinco checkbox están ticados "has ganado"
        //Si no, sigue intentandolo
        if (check1.checked && check2.checked && check3.checked && check4.checked && check5.checked){
            document.getElementById("gotIt").innerHTML = "Congratulations! You got it right!"          
        } else {
            document.getElementById("gotIt").innerHTML = "Keep trying mate! You are almost there! ;)"
        }
        
    }
    //llamamos a la función de comprobar el número 
    checkingNumber();
}



// OR ANOTHER FUNCTION???
//     function checkingAll(){

       
        
//         if (check1.checked && check2.checked && check3.checked){
//             document.getElementById("gotIt").innerHTML = 'Congratulations! You got it right!';
            
//         } else {
//             console.log("SIGUE PELANDO");
//         }
//     }

//     //llamamos a la función de comprobar el cartón
//     checkingAll();
// }




