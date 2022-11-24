

//basic math functions

//add function
function add(a,b) {
    return a + b
}

//subtract function
function subtract(a,b){

    return a - b
}

//multiply function
function multiply(a,b) {
    return a * b
}

//divide function
function divide(a,b){
    return a/b
}

//operator function that takes and utilizes inputs
function operate(a,b,c) {
    if (c === '+') {
        return add (a,b)
    }

if (c === '-') {
    return subtract(a,b)

}
if (c === '*') {
    return multiply(a,b)
}
if (c === '/') {
    return a/b
}
}


//the array to hold values from the calculator
const mathHolder = [];
mathDigitOne = mathHolder[0];
mathDigitTwo = mathHolder[1];
