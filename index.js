const spy  ="chai";

function receivesAFunction(callback) {
    callback();
}
console.log(receivesAFunction(spy));

function returnsANamedFunction() {
    // Define and return a named function
    return function namedFunction() {
        console.log("This is a named function!");
    };
}


function returnsAnAnonymousFunction() {
    return  function() {
    };
}
console.log(returnsAnAnonymousFunction("function"));




