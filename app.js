
let cash = 20
let price = 50
let difference = cash - price

if (cash > price) {
   
    console.log (`you paid extra - here's ${difference} dollars back`)
}

else if ( cash === price ) {
    console.log ("you paid the exact amount, have a nice day")
}

else { 
    console.log (`not enouh money - you still owe ${difference * -1} dollars`)
}