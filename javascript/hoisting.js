function printnames() {
	console.log(x)
	var x = "yay"
	console.log(x)
}

printnames()

// In Javascript variable declarations are hoisted, all the variables declared in a scope 
// are put at the top, so this code will be equivalent to the following

// function printnames() {
// 	var x
// 	console.log(x)
// 	x = "yay"
// 	console.log(x)
// }

// printnames()

// Output will be:
// undefined
// yay
// The first time undefined is printed and no error is thrown because the variable is declared but 
// it does not have a value