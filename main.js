//Breana K. Merriweather
//Door Dash Code
//01-19-2021

alert(`It's working so far!`)

// Part 1
console.log("Hello hungry friend! Welcome to Doordish, where the pizza comes to you!")
let option = prompt("Is your order takeout or delivery?")
let qty = prompt("How many pizzas would you like?")
let bigCheese = prompt("Would you like extra cheese?")



// Part 2 - Tipping
const pizza = 15.0
const extraCheese = 2.0
const deliveryFee = 3.0
let driverTip = 0.0


if (option == "delivery"){
    let driverTip = prompt("How much do you want to tip the driver?")
    console.log("We are preparing your " + qty + " pizzas \
    " + "with "+ bigCheese + " to be " + option + "Thanks for tipping " + "$" + driverTip)
}else{
    console.log("We are preparing your " + qty + " pizzas \
    " + "with "+ bigCheese + " to be " + option)
}



// Part 3 - Extra Cheese

if (bigCheese == "yes"){
    console.log("That big cheese will cost you an additional $" + extraCheese * qty)
}


// Part 4 - Itemized receipt

if (bigCheese == "yes"){
    let bigCheeseNew = extraCheese * qty)
}else{
    bigCheeseNew = qty
}

if (option == "delivery"){
    let driverTipNew = driverTip + deliveryFee
}else{
    driverTipNew = 0
}

let total = ((qty * pizza) + driverTip + (extraCheese * qty))

console.log("We are preparing your " + qty + " pizzas with " + bigCheese + " extra cheese to be " + option + "." + " With a " $5 tip\
and a delivery fee, your total comes to" + "$" + total)