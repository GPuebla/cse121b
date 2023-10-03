/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2){
    return number1 + number2;
}

function addNumbers(){

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1,addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1,number2){
    return number1 - number2;
}

function subtractNumbers(){

    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1,subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */

let multiply = (number1,number2) => number1 * number2;

let multiplyNumbers = () => {

    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1,multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);


/* Open Function Use - Divide Numbers */

let divide = (number1,number2) => number1 / number2;

let divideNumbers = () => {

    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').textContent = multiply(divideNumber1,divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
