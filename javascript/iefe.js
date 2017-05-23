// Grouping Operator
(function myFunc() {
	console.log("john")
}, function myFunc() {
	console.log("jane")
})();

// myFunc(); // this won't work because, the expression was evaluated between the parantheses
// and now it is lost

// The Parentheses (formally called the Grouping Operator) can surround only expressions, 
// and a function expression is evaluated.

// (function () {
// 	console.log("john")
// })();