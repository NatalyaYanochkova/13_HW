/*
Create function calc() which gets values from “#first_value” and “#second_value”
inputs and type of operation form “#operator” select and print to span “#res_calc”
result of calculation.*/
const firstValue = document.getElementById('first_value');
const secondValue = document.getElementById('second_value');
const operator = document.getElementById('operator');
const textSpan = document.getElementById('res_calc');

function isNumber(x) {
    if (x === '') {
        return false;
    }
    const numX = +x;
    if (isNaN(numX)) {
        return false;
    } else {
        return true;
    }
}

let res_calc = 0;

function calc() {
    isNumber(firstValue.value);
    isNumber(secondValue.value);

    switch (operator.value) {
        case "+": {
            res_calc = +firstValue.value + +secondValue.value;
            break;
        }
        case "-": {
            res_calc = firstValue.value - secondValue.value;
            break;
        }
        case "*": {
            res_calc = firstValue.value * secondValue.value;
            break;
        }
        case "/": {
            res_calc = firstValue.value / secondValue.value;
            break;
        }
    }
    textSpan.textContent = res_calc;
}

/*
Create function addItem() which gets from input “#item_input” number, and puts it
to array. After that, function should print to span “#sum_item” summary number for
    current array and print the whole array to span “#array_result” with JSON.stringify().
*/

const itemInput = document.getElementById('item_input');
const sum = document.getElementById('sum_item');
const result = document.getElementById('array_result');

const arr = [];

function addItem() {
    isNumber(itemInput.value);
    arr.push(+itemInput.value);
    result.textContent = JSON.stringify(arr);
    let res = 0;
    for (let arrElement of arr) {
        if (arrElement) {
            res += arrElement;
        }
        sum.textContent = res;
    }
}

/*Create function reverseNumber() which gets number from input “#number_input”
and prints reversed number to span “#reverse_result”.*/
const number = document.getElementById('number_input');
const res = document.getElementById('reverse_result');

function reverseNumber() {
    //Option 1 only methods
    isNumber(number.value);
    let arr = number.value.split("");
    let reverseArr = arr.reverse();
    let joinArr = reverseArr.join("");
    res.textContent = joinArr;
    //Option 2 methods + for
    /*let arr = number.value.split("");
    for (let i = arr.length - 1, j = 0; i >= j; i--, j++) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let joinArr = arr.join("");
    res.textContent = joinArr;*/
}

