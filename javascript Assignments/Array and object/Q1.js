// 1. In the following shopping cart add, remove, and edit iters
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', '$one>'#
//  a"" 'Meat' in the beginning of >our shopping cart if it has not been alrea"> a""e!
// a"" Sugar at the en" of >ou shopping cart if it has not been alrea"> a""e!
// remove '$one>' if >ou are allergic to hone=
//  modify"if> Tea to 'Green Tea'



const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// 01 
shoppingCart.unshift("Meat")
console.log(shoppingCart)

// 02 
shoppingCart.push("Sugar")
console.log(shoppingCart)

// 03 
shoppingCart.splice(4,1)
console.log(shoppingCart)

// 04 
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)