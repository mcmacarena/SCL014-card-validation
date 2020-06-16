import validator from "./validator.js";
console.log(validator);

document.getElementById("btnCart").addEventListener("click",showScreen2);

function showScreen2(){
    document.getElementById("screen2").classList.remove("hide");
    document.getElementById("screen1").classList.add("hide");
    document.getElementById("btnBuy").disabled=true;
}

document.getElementById("btnBuy").addEventListener("click",showScreen3);

function showScreen3(){
    document.getElementById("screen3").classList.remove("hide");
    document.getElementById("screen2").classList.add("hide");
}

//Función que perita ingresar solo dígitos
document.getElementById("creditCardNumber").addEventListener("keypress", onlyNumbers);

function onlyNumbers(event){
    if (event.key!=0 && event.key!=1 && event.key!=2 && event.key!=3 && event.key!=4 && event.key!=5 && event.key!=6 && event.key!=7 && event.key!=8 && event.key!=9) {   
        event.preventDefault()
    }
}

document.getElementById("creditCardNumber").addEventListener("change",saveNumbers);

// LLAMANDO A FUNCIÓN : isValid
function saveNumbers(){
    let creditCard=document.getElementById("creditCardNumber").value;
    console.log(validator.isValid(creditCard));
    if (validator.isValid(creditCard)){
        document.getElementById("returnMessage").classList.remove("hide");
        document.getElementById("returnErrorMessage").classList.add("hide");
        document.getElementById("returnMessage").innerHTML = 'Tarjeta de Crédito Válida';
        document.getElementById("btnBuy").classList.remove("buttonHide");
        document.getElementById("btnBuy").classList.add("button");
        document.getElementById("btnBuy").disabled=false;

    } else {
        document.getElementById("returnErrorMessage").classList.remove("hide");
        document.getElementById("returnMessage").classList.add("hide");
        document.getElementById("returnErrorMessage").innerHTML = 'Asegúrese de ingresar un número de tarjeta válido';
    }
    document.getElementById("creditCardNumber").value=validator.maskify(creditCard);
}

// VOLVER A COMPRAR
document.getElementById("btnBuyAgain").addEventListener("click",reload);
function reload(){
    location.reload(true);
}
