let num1 = +prompt("Enter your first number: ");
let operator = prompt("Enter your desire operator(Ex: +, -, *, /): ");
let num2 = +prompt("Enter your second number: ");



if (operator === '+') {
    let result = num1 + num2;
    alert(num1 + ' + ' + num2 + ' = ' + result);
}

else if (operator === '-') {
    let result = num1 - num2;
    alert(num1 + ' - ' + num2 + ' = ' + result);
}

else if (operator === '*') {
    let result = num1 * num2;
    alert(num1 + ' * ' + num2 + ' = ' + result);
}

else if (operator === '/') {
    let result = num1 / num2;
    alert(num1 + ' / ' + num2 + ' = ' + result);
}
 else {
    alert("Please try again!!!");
}