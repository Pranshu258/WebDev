var test = 1

if (test) {
	var myFunction = function () {
		console.log("one one")
	}
} else {
	var myFunction = function () {
		console.log("zeroooo")
	}
}

myFunction()

// function expressions can be used to conditionally create functions