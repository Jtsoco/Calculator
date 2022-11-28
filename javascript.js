

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
    if (b == '0') {
        alert("Don't do that!");
        return screen.textContent = ''
    }
    return (+a)/(+b)

}

//operator function that takes and utilizes inputs
function operate(a,b,c) {
    if (c === '+') {
        return Math.round(add (a,b)*10000000000)/10000000000
    }

if (c === '-') {
    return Math.round(subtract(a,b)*10000000000)/10000000000

}
if (c === '*') {
    return Math.round(multiply(a,b)*10000000000)/10000000000
}
if (c === '/') {
    return Math.round(divide(a,b)*10000000000)/10000000000
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
    screenArray = [];
    decimalCheck = false;
    myOperator = '';
    equalUsed = false;
})


//the values for the numerical buttons
one = document.querySelector('.one')
one.addEventListener('click', function(){
    if (equalUsed == true){
        screen.textContent = '';
          
       }
        equalUsed = false;
    screen.textContent += '1'
});
two = document.querySelector('.two')
two.addEventListener('click', function(){
    if (equalUsed == true){
        screen.textContent = '';
          
       }
        equalUsed = false;
    screen.textContent += '2'
});
three = document.querySelector('.three')
three.addEventListener('click', function(){
    if (equalUsed == true){
        screen.textContent = '';
          
       }
        equalUsed = false;
    screen.textContent += '3'
});
four = document.querySelector('.four')
four.addEventListener('click', function(){
      if (equalUsed == true){
     screen.textContent = '';
       
    }
     equalUsed = false;
    screen.textContent += '4'
});
five = document.querySelector('.five')
five.addEventListener('click', function(){
    if (equalUsed == true){
        screen.textContent = '';
          
       }
        equalUsed = false;
    screen.textContent += '5'
});
six = document.querySelector('.six')
six.addEventListener('click', function(){
    if (equalUsed == true){
        screen.textContent = '';
          
       }
        equalUsed = false;
    screen.textContent += '6'
});
seven = document.querySelector('.seven')
seven.addEventListener('click', function(){
    if (equalUsed == true){
        screen.textContent = '';
          
       }
        equalUsed = false;
    screen.textContent += '7'
});
eight = document.querySelector('.eight')
eight.addEventListener('click', function(){
    if (equalUsed == true){
        screen.textContent = '';
          
       }
        equalUsed = false;
    screen.textContent += '8'
});
nine = document.querySelector('.nine')
nine.addEventListener('click', function(){
      if (equalUsed == true){
     screen.textContent = '';
       
    }
     equalUsed = false;
    screen.textContent += '9'
});

zero = document.querySelector('.zero')
zero.addEventListener('click', function(){
    if (equalUsed == true){
     screen.textContent = '';
       
    }
     equalUsed = false;
    screen.textContent += '0';
   
});

//non-numerical buttons

//for +/- button, set up a class
//or set up a boolean
//it will determine whether it adds a - or 
//whether it removes the - symbol


//the percent button, divide by 100 to get a percent
percent = document.querySelector('.percent')
percent.addEventListener('click', function(){
    if (screen.textContent.split(/\*|\/|(?<=[0-9])\+|(?<=[0-9])\-/).length !== 1) {
        return screen.textContent = screen.textContent

    }
    else {percentTemp = (+screen.textContent)/100;
    screen.textContent = percentTemp}
});

equalUsed = Boolean;
//for function buttons, add additional aspects that convert strings
//to an array, and will check for a true false boolean
//if arrays are already filled,
//they will do math and put the return value into first array,
//and make that the text content too
divideB = document.querySelector('.divideB')
divideB.addEventListener('click', function(){
    myOperator = '/'
    ///make a version for the others
    if (isNaN(screen.textContent.slice(-1)) === false ) {
        screen.textContent = equationChecker();
        equalUsed = false;
        preOperand = '/';
        return screen.textContent
    }
    else if (screen.textContent.slice(-1) === '.') {
        return screen.textContent
    }
    else {
    screen.textContent += '/';
    equalUsed = false;
    decimalCheck = false;
    preOperand = '/'}
   // return screen.textContent
});



multiplyB = document.querySelector('.multiplyB')
multiplyB.addEventListener('click', function(){
    //tests to make sure there isn't a stacking of operator signs
    myOperator = '*';
    if (isNaN(screen.textContent.slice(-1)) === false ) {
        screen.textContent = equationChecker();
        equalUsed = false;
        preOperand = '*';
        return screen.textContent}
    else if (screen.textContent.slice(-1) === '.') {
        return screen.textContent;

    }
    else {
    screen.textContent += '*';
    equalUsed = false;
    decimalCheck = false;
    preOperand = '*'}
});




subtractB = document.querySelector('.subtractB')
subtractB.addEventListener('click', function(){
    myOperator = '-'
    //subtraction gets special edition, so it can add negatives where ever.
    if (
        screen.textContent.slice(-2) === '--'|| screen.textContent.slice(0,3) ==='-'||screen.textContent.slice(-2) === '+-'||screen.textContent.slice(-2) === '/-'
        ||screen.textContent.slice(-2) === '*-'||screen.textContent.slice(-1) === '.')
        {return screen.textContent=screen.textContent   }
        else if  (screen.textContent.slice(-1) == '+' ||screen.textContent.slice(-1) == '*' || screen.textContent.slice(-1) == '/') {
            screen.textContent += '-';
             equalUsed = false;
            decimalCheck = false;
            return screen.textContent = screen.textContent

        }
        else if (isNaN(screen.textContent.slice(-1)) === false ) { screen.textContent = equationChecker();
            equalUsed = false;
            return screen.textContent

        }
    else { screen.textContent += '-';
    equalUsed = false;
    decimalCheck = false;
    preOperand = '-';
    }
   
});
addB = document.querySelector('.addB')
addB.addEventListener('click', function(){
    myOperator = "+"
    if (isNaN(screen.textContent.slice(-1)) === false ) {
        screen.textContent = equationChecker();
        equalUsed = false;
        preOperand = '+';
    }
    else if (screen.textContent.slice(-1) === '.') {
        return screen.textContent;

    }
    
    else {screen.textContent += '+';
    equalUsed = false;
    decimalCheck = false;
    preOperand = '+'}
});



//these buttons control positive, negative, and the decimal dot
//note: operands turn decimal check off so you can put one more in
decimalCheck = false
decimal = document.querySelector('.decimal')
decimal.addEventListener('click',function(){
    if (decimalCheck == false) {
        decimalCheck = true;
        screen.textContent += '.'

    }
    else {
        screen.textContent = screen.textContent
    }

})

//answer is what will hold the result
let answer
//equals, the most important function possibly?
//make sure it cuts the string up using the operands as division
//splits the values on either side into arrays
equals = document.querySelector('.equals')
equals.addEventListener('click', function(){
    operand = preOperand;
    if (preOperand === ''|| preOperand == undefined) {
        return screen.textContent=screen.textContent
    }
    

    else {screenArray = screen.textContent.split(/\*|\/|(?<=[0-9])\+|(?<=[0-9])\-/);
// Below is an earlier attempt at the regex, but had trouble with the plus sign
// so I couldn't actually have both sufficiently large numbers working and the plus sign working
// still, will keep code so i can look back and study it more
// for now, the present version works
// /[^0-9|\.|e]|(?<=[0-9])\+/

    if (screenArray[1] === ''){
        return screen.textContent = screen.textContent
    }
    //note, if I use '0' as a number, the screenArray[1] will be false
    //so test if it's undefined
    //as '0' is false, but not undefined
    else if (screenArray[1] == undefined) {
        return screen.textContent = screen.textContent
    }

    else {mathHolder[0] = screenArray[0];
        mathHolder[1] = screenArray[1];
        answer =  operate (mathHolder[0],mathHolder[1],operand)
        screen.textContent = answer
        //we have answer again, so that we can check if it becomes infinity
        mathHolder[0] = answer;
        if (answer == 'Infinity') {
            alert("Don't do that! No matter how many zeros you stack on, it won't work!");
            return screen.textContent = ''
        }
        preOperand = '';
        equalUsed = true;
        decimalCheck = false;
        return screen.textContent

    }



}



   
});

let preOperand
let operand
//negative button
//it puts a negative sign in front of first number
negative = document.querySelector('.negative');
negative.addEventListener('click',function(){
if (screen.textContent.substr(0,1) === "-") {
    return screen.textContent = screen.textContent.slice(1);
    
}
else {
    return screen.textContent = '-'+screen.textContent
}
})


//this is a function to check if you already have an equation in
//before you use other signs
function equationChecker() {
    operand = preOperand
    tempScreenArray = screen.textContent.split(/\*|\/|(?<=[0-9])\+|(?<=[0-9])\-/)
    if (tempScreenArray.length === 2) {mathHolder[0] = tempScreenArray[0];
        mathHolder[1] = tempScreenArray[1];
        answer =  operate (mathHolder[0],mathHolder[1],operand)
        screen.textContent = answer
        mathHolder[0] = answer;
        tempScreenArray = [];
        if (answer == 'Infinity' || answer == 'NaN') {
            alert("Don't do that! No matter how many zeros you stack on, it won't work!");
            return screen.textContent = ''
        }
        else {
            
    screen.textContent =  screen.textContent + myOperator;
    decimalCheck = false;
    return screen.textContent
    }

    } 
    else {
        preOperand = myOperator
        screen.textContent += myOperator;
        decimalCheck = false;
        return screen.textContent
    }
}


//make it look nicer,
//clean up redundant aspects


