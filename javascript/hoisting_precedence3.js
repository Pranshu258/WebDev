var myName = 2
function myName () {
	console.log ("Pranshu")
}
console.log(myName)
console.log(typeof myName)

// Both function declaration and variable declarations are hoisted to the top of the containing scope. 
// And function declaration takes precedence over variable declarations - but not over variable assignment.
// That's why this script's output is
// 2
// number