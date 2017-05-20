// Function Level Scope

var a = function () {
	var x = 2;
	var b = function () {
		var y = 3;
	}
	console.log(y)
}

a();

// Javascript has a function based scoping. So, the variable x is visible inside both the functions a and b.
// while the variable y is visible only inside the function b
// so when we call the function a at line 11, an error is thrown 
/*
/media/pranshug/MyDrive/Projects/Web Development/Content/javascript/scope.js:8
	console.log(y)
	            ^

ReferenceError: y is not defined
    at a (/media/pranshug/MyDrive/Projects/Web Development/Content/javascript/scope.js:8:14)
    at Object.<anonymous> (/media/pranshug/MyDrive/Projects/Web Development/Content/javascript/scope.js:11:1)
    at Module._compile (module.js:410:26)
    at Object.Module._extensions..js (module.js:417:10)
    at Module.load (module.js:344:32)
    at Function.Module._load (module.js:301:12)
    at Function.Module.runMain (module.js:442:10)
    at startup (node.js:136:18)
    at node.js:966:3
*/
