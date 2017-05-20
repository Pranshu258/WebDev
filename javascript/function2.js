printname2()

function printname2 () {
	console.log("John")
}

printname2()

// here we have created a function using FUNCTION DECLARATION
// A function declaration is processed as soon as execution enters the context in which it appears, (hoisting)
// before any step-by-step code is executed. The function it creates is given a proper name 
// (printname2 in the example above), and that name is 
// put in the scope in which the declaration appears (here global).
// that is why we are able to call it in line 1

// output will be:
// John
// John