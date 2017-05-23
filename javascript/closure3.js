function createAdders() {
	adders = []
	for (var i = 0; i < 10; i++) {
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

// In this example, "myAdders" is and ARRAY of FUNCTIONS (closures)
// All of these closures were created in a single call to the outer function
// that's why they refer to a single scope instance
// Now, because the closures point to parent scope by reference (pointers), so if we somehow change the 
// value of i for some closure, the behavior for that closure will change

// In this case, all the ten closures point to the same "i", because we have only one "i" in the outer function
// when the first closure is created, the value of i is 0, it becomes 1 for the creation of the second closure.
// but this changes the value of i for the first closure as well, because they share the same scope.
// so wen all the closures have been created, the for loop ends and the value of i is finally 10

// Now, when we call any of the closures (in line 13, 14, 15), we don't get the expected output because
// i is 10 for all of them, so the output is 11 for all the three calls

// See the following documentation: https://developer.mozilla.org/en/docs/Web/JavaScript/Closures#Creating_closures_in_loops_A_common_mistake