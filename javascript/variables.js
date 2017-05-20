// Variable Scopes

var name = "john"

function printname() {
	name = "jane"
	console.log(name)
}

console.log(name)
printname()
console.log(name)

// The variable "name" is declared and assigned a value at line 3. It is in the outermost scope,
// that is global, at line 10, the value of this variable is "john", but when the function printname is 
// called at line 11, the value of the variable gets modified to "jane". 
// This modification is available persists because the change was made by function to the global variable.
// Output is: 
// john
// jane
// jane
// However, if we write var name = "jane" at line 6, that will be a local variable visible only in the function. 
// This local variable is different from the global "name" variable. The global variable remains the same 
// throught "john". The output is
// john
// jane
// john