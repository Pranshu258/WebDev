function Adder(x) {
	var toAdd = x
	// console.log("adder arguments: " + arguments[0])
	function addx(y) {
		// console.log("addx arguments: " + arguments[0])
		return {
			"result": toAdd + y,
			"changeToAdd": function setToAdd(z) {
				toAdd = z
			}
		}
	}
	return addx
}

var addOne = Adder(1)
var addTwo = Adder(2)
console.log(addOne(1).result)
console.log(addTwo(1).result)
addOne().changeToAdd(20)
console.log(addOne(1).result)
console.log(addTwo(1).result)

// In this example, the outer function is same as the previous one, but we have made some changes in the inner
// Here, the innner function returns an object with two members, one is the result of the addition
// the other is a function that can be used to change the value of "toAdd". 
// We change the value of toAdd using the member function from addOne closure. Note that because addOne and addTwo
// refer to different instances of "toAdd", only the value of toAdd for addOne will change and not for addTwo
// this is because closures point to the parent scope by reference and not by value

// Output:
// 2
// 3
// 21
// 3