const validator = {
    isValid:(creditCard)=>{
        let creditCardNumbers = new Array(16);
        let sumCreditCardNumbers = 0;

        // guardando numero de tarjeta de credito en arrays
        for ( let i= 0; i < creditCardNumbers.length; i++ ) {
            creditCardNumbers[i] = creditCard.slice(i, i+1);
        }

        // multiplicando las casillas pares x 2
        for (let i = 0; i < creditCardNumbers.length ; i += 2 ) {
            creditCardNumbers[i] = (creditCardNumbers[i] *2).toString();
        }

        //dejando los numeros de las casillas en un solo digito
        for (let i = 0; i< creditCardNumbers.length; i++) {
            if ( creditCardNumbers[i] > 9 ) {
                creditCardNumbers[i] = parseInt(creditCardNumbers[i].charAt(0)) + parseInt(creditCardNumbers[i].charAt(1));
            } else {
                creditCardNumbers[i] = parseInt(creditCardNumbers[i]);
            }      
        }

        //for que suma todos los digitos del array
        for ( let i = 0; i < creditCardNumbers.length; i++ ) {
            sumCreditCardNumbers += creditCardNumbers[i]; 
        }
    
        //comprobando si cifra obtenida es divisible por 10
        if ( sumCreditCardNumbers % 10 === 0 ) {
            return true;
        } else {
            return false;
        }
    },

    maskify:(creditCard)=>{
        let newfirstNumbers=new String();
        let showedCreditCardNumbers;
        if(creditCard.length<4){
            creditCard=creditCard
        } else{
            let lastNumbers=creditCard.slice(-4);
            let firstNumbers=creditCard.slice(0,-4);
            for (let i = 0; i< firstNumbers.length; i++) {
                newfirstNumbers+="#"
            }
            showedCreditCardNumbers=newfirstNumbers+lastNumbers;
            return showedCreditCardNumbers;
        }
    }
}

export default validator;
