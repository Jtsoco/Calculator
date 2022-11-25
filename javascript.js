

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

//buttonValue is what will change when buttons are pressed
buttonValue = 


//the screen with the display value is edited by this code
screen = document.querySelector('.inner-screen');
screen.textContent = "I'm the display!"
//put this part into event listener functions
screen.textContent += buttonValue

//the clear button
clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    screen.textContent = ''
})

//the values for the numerical buttons
one = document.querySelector('.one')
one.addEventListener('click', function(){
    screen.textContent += '1'
});

