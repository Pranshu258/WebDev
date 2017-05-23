var test = 1

// console.log(typeof myFunction)
// function declarations are hoisted, but the definition is conditional here, 
// so the function can not be called before it is defined in the if-else block

if (test) {
	function myFunction() {
		console.log("one one")
	}
} else {
	function myFunction() {
		console.log("zeroooo")
	}
}

myFunction()


// Functions can be conditionally declared, that is, a function statement can be nested within an if statement. 
// Most browsers other than Mozilla will treat such conditional declarations as an unconditional declaration and
// create the function whether the condition is true or not (not today, most major browsers have been updated to v6). 
// For this reason, conditional functional declarations should not be used 
// for conditional creation use function expressions instead. - MDN

// Declaring functions conditionally is non-standardized and varies across different environments. 
// You should never rely on functions being declared conditionally and use function expressions instead - MDN

// As of now, NodeJS v6, conditional declaration of functions is supported.
// v4 was first released in 2015
// v6 was first released in 2016

// MDN - Mozilla Developer Network

// FunctionDeclarations are only allowed to appear in Program or FunctionBody. 
// Syntactically, they can not appear in Block ({ ... }) — such as that of if, while or for statements. 
// This is because Blocks can only contain Statements, not SourceElements, which FunctionDeclaration is. 
// If we look at production rules carefully, we can see that the only way Expression is allowed directly within Block is when it is part of ExpressionStatement. 
// However, ExpressionStatement is explicitly defined to not begin with "function" keyword, and this is exactly why FunctionDeclaration cannot appear directly within a Statement or Block (note that Block is merely a list of Statements).

// Because of these restrictions, whenever function appears directly in a block (such as in the previous example) it should actually be considered a syntax error, not function declaration or expression. The problem is that almost none of the implementations I've seen parse these functions strictly per rules (exceptions are BESEN and DMDScript). They interpret them in proprietary ways instead.

// by kangax.github.io - reffered to by MDN