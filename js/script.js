var oneButton = document.getElementById("1");
var twoButton = document.getElementById("2");
var threeButton = document.getElementById("3");
var fourButton = document.getElementById("4");
var fiveButton = document.getElementById("5");
var sixButton = document.getElementById("6");
var sevenButton = document.getElementById("7");
var eightButton = document.getElementById("8");
var nineButton = document.getElementById("9");
var zeroButton = document.getElementById("0");

var decimalButton = document.getElementById('decimal');
var clearButton = document.getElementById('clear');
var backspaceButton = document.getElementById('backspace');
var diplayValElement = document.getElementById('outputValue');

var calcNumButton = document.getElementsByClassName('number');
var calcOperatorButton = document.getElementsByClassName('operator');

var displayVal = 0;
var pendingVal;
var evalStringArray = [];

var updateDisplyVal = (clickObj) => {
    var btnText = clickObj.target.innerText;
    if (displayVal == '0')
        displayVal = '';
    displayVal += btnText;
    diplayValElement.innerText = displayVal;
}
var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;
    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            diplayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            diplayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case '×':
            pendingVal = displayVal;
            displayVal = '0';
            diplayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            diplayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;

        case '=':
            evalStringArray.push(displayVal);
            var evautation = eval(evalStringArray.join(''));
            displayVal = evautation + '';
            diplayValElement.innerText = displayVal;
            evalStringArray = [];

        default:
            break;
    }
}
for (let i = 0; i < calcNumButton.length; i++) {
    calcNumButton[i].addEventListener('click', updateDisplyVal, false);
}
for (let i = 0; i < calcOperatorButton.length; i++) {
    calcOperatorButton[i].addEventListener('click', performOperation, false);
}

clearButton.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    diplayValElement.innerHTML = displayVal;
}
backspaceButton.onclick = () => {
    let lengthOfDiplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDiplayVal - 1);
    if (displayVal === '')
        displayVal = '0';
    diplayValElement.innerText = displayVal;
}
decimalButton.onclick = () => {
    if (!displayVal.includes('.'))
        displayVal += '.';
    diplayValElement.innerText = displayVal;
}