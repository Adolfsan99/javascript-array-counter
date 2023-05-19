//INITIAL VARIABLES
let answer = null;
const array = [];

alert('Hello, lets make a list of numbers');

answer = Number (prompt('Enter a number from 1 to 50'));

while (answer<=0 || answer>=51) {
    answer = prompt('The number you entered is out of range, please enter a number from 1 to 50');
}

for (let i = 0; i <= 50; i++) {
    if (answer >= i){
    array.push(i);
    } else {
    i = 51;
    }
}

alert('We count your number with the following arrangement ['+array+'] and your number is '+ answer);