

//basic math functions

//add function
function add(a,b) {
    return +a + +b
}

//subtract function
function subtract(a,b){

    return (+a) - (+b)
}

//multiply function
function multiply(a,b) {
    return (+a) * (+b)
}

//divide function
function divide(a,b){
    return (+a)/(+b)
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
let mathHolder = [];
mathDigitOne = mathHolder[0];
mathDigitTwo = mathHolder[1];
let mathHolderString

//buttonValue is what will change when buttons are pressed
buttonValue = 
//


//the screen with the display value is edited by this code
screen = document.querySelector('.inner-screen');
screen.textContent = ""
//put this part into event listener functions
//screen.textContent += buttonValue

//the clear button
clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    screen.textContent = '';
    operand = '';
    preOperand = '';
    mathHolder = [];
    screenArray = []
})


//the values for the numerical buttons
one = document.querySelector('.one')
one.addEventListener('click', function(){
    screen.textContent += '1'
});
two = document.querySelector('.two')
two.addEventListener('click', function(){
    screen.textContent += '2'
});
three = document.querySelector('.three')
three.addEventListener('click', function(){
    screen.textContent += '3'
});
four = document.querySelector('.four')
four.addEventListener('click', function(){
    screen.textContent += '4'
});
five = document.querySelector('.five')
five.addEventListener('click', function(){
    screen.textContent += '5'
});
six = document.querySelector('.six')
six.addEventListener('click', function(){
    screen.textContent += '6'
});
seven = document.querySelector('.seven')
seven.addEventListener('click', function(){
    screen.textContent += '7'
});
eight = document.querySelector('.eight')
eight.addEventListener('click', function(){
    screen.textContent += '8'
});
nine = document.querySelector('.nine')
nine.addEventListener('click', function(){
    screen.textContent += '9'
});

zero = document.querySelector('.zero')
zero.addEventListener('click', function(){
    screen.textContent += '0'
});

//non-numerical buttons

//for +/- button, set up a class
//or set up a boolean
//it will determine whether it adds a - or 
//whether it removes the - symbol


//the percent button, divide by 100 to get a percent
percent = document.querySelector('.percent')
percent.addEventListener('click', function(){
    percentTemp = (+screen.textContent)/100;
    screen.textContent = percentTemp
});


//for function buttons, add additional aspects that convert strings
//to an array, and will check for a true false boolean
//if arrays are already filled,
//they will do math and put the return value into first array,
//and make that the text content too
divideB = document.querySelector('.divideB')
divideB.addEventListener('click', function(){
    screen.textContent += '/'
    preOperand = '/'
});
multiplyB = document.querySelector('.multiplyB')
multiplyB.addEventListener('click', function(){
    screen.textContent += '*'
    preOperand = '*'
});
subtractB = document.querySelector('.subtractB')
subtractB.addEventListener('click', function(){
    screen.textContent += '-'
    preOperand = '-'
});
addB = document.querySelector('.addB')
addB.addEventListener('click', function(){
    screen.textContent += '+'
    preOperand = '+'
});

//answer is what will hold the result
let answer
//equals, the most important function possibly?
//make sure it cuts the string up using the operands as division
//splits the values on either side into arrays
equals = document.querySelector('.equals')
equals.addEventListener('click', function(){
    operand = preOperand;
    if (mathHolder[0] == false || mathHolder[1] == false) {
        return 
    }

    else { screenArray = screen.textContent.split(/[^0-9|.]/);
    mathHolder[0] = screenArray[0];
    mathHolder[1] = screenArray[1];
    answer =  operate (mathHolder[0],mathHolder[1],operand)
    screen.textContent = answer
    return screen.textContent
    }
    



   
});

let preOperand
let operand

//the split function, will ignore decimals and numbers splitting along function lines
//turn this into function
//call this function when equals sign is pressed
screenArray = screen.textContent.split(/[^0-9|.]/)