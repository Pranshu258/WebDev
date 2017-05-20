printname1()

var printname1 = function () {
	console.log("Jane")
}

printname1()


// Here we have created a function using FUNCTION EXPRESSION
// printname is defined from the point of assignment and not before
// The error we get is:
/*
TypeError: printname1 is not a function
    at Object.<anonymous> (/media/pranshug/MyDrive/Projects/Web Development/Content/javascript/function1.js:1:63)
    at Module._compile (module.js:410:26)
    at Object.Module._extensions..js (module.js:417:10)
    at Module.load (module.js:344:32)
    at Function.Module._load (module.js:301:12)
    at Function.Module.runMain (module.js:442:10)
    at startup (node.js:136:18)
    at node.js:966:3
*/

// printname1 gets its definition as function at run time (step by step execution), 
// so only after line 5, we are able to call the function, you see that by commmenting out line 1