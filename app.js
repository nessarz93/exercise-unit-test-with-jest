// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3));



// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}


const fromDollarToYen = function(valueInYen){
    let valueInDollar = valueInYen * 106.6;
    return valueInDollar;
}

const fromYenToPound = function(valueInPound){
    let valueInYen = valueInPound * 159.9;
    return valueInYen;
}



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
