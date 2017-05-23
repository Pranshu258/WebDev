function Adder(x) {
	var toAdd = x
	function addx(y) {
		return toAdd + y
	}
	return addx
}

var addOne = Adder(1)
var addTwo = Adder(2)
console.log(addOne(1))
console.log(addTwo(1))

// A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
// The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), 
// it has access to the outer function’s variables, and it has access to the global variables.

// Here we have created two closures addOne and addTwo, with the help of the outer function "Adder"
// Inside "Adder", we have defined the addx function which is returned (as a function) to the callee.
// The behavior of the addx function is determined by the value of "toAdd" variable which we send as an 
// argument when we call the "Adder" function

// In javascript, we can define functions inside functions and hence, we can use them to create new functions programmatically

// both the closures are defined on the basis of addx, however, they refer to different scope instances of Adder
// so, they behave differently (they refer to different instances of "toAdd" variable)

// Output:
// 2
// 3

// For more info:
// Go to this page - http://javascriptissexy.com/understand-javascript-closures-with-ease/
// Also: https://developer.mozilla.org/en/docs/Web/JavaScript/Closures
// Also: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36