function createAdders() {
	adders = []
	for (let i = 0; i < 10; i++) {
		adders[i] = function (x) {
			return x + i;
		}
	}
	return adders
}

myAdders = createAdders()

console.log(myAdders[0](1))
console.log(myAdders[1](1))
console.log(myAdders[2](1))

// No, if we want to create closures using a loop, then we can enable block based scoping with the help of the 
// let keyword. this create different lexical scope in each iteration of the loop, so that the closures point to 
// different scope instances of the same variable "i". This will give us the result we expected. 
// 1
// 2
// 3

// There are other ways to create closures in a loop, this is the simplest one.
