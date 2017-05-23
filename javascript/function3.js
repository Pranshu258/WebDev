var myFunc = function printname() {
	console.log("John")
	printname()
}
console.log(myFunc.name)
myFunc()
printname()

