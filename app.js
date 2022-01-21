let bill = Number(prompt("please enter bill total: "));

let tax = bill * .07;
let taxedPrice = tax + bill;
//test
//document.body.innerHTML = taxedPrice;

let tip = taxedPrice * .05;
let totalPrice = tip + taxedPrice
document.body.innerHTML = "your total cost with tax and tip is: " + totalPrice;

