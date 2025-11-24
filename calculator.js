// ---------------------------------------------
// Simple JavaScript Calculator
// ---------------------------------------------
// This calculator can add, subtract, multiply,
// divide, and keep track of calculation history.
// ---------------------------------------------

// Array to store history of calculations
let history = [];

/**
 * Adds two numbers
 */
function add(a, b) {
    const result = a + b;
    storeHistory(a, b, "+", result);
    return result;
}

/**
 * Subtracts second number from the first
 */
function subtract(a, b) {
    const result = a - b;
    storeHistory(a, b, "-", result);
    return result;
}

/**
 * Multiplies two numbers
 */
function multiply(a, b) {
    const result = a * b;
    storeHistory(a, b, "*", result);
    return result;
}

/**
 * Divides first number by second
 */
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Cannot divide by zero.");
        return null;
    }
    const result = a / b;
    storeHistory(a, b, "/", result);
    return result;
}

/**
 * Stores calculation details in the history array
 */
function storeHistory(a, b, operator, result) {
    history.push({
        operand1: a,
        operand2: b,
        operator: operator,
        result: result,
        timestamp: new Date().toLocaleString()
    });
}

/**
 * Displays all calculations performed
 */
function displayHistory() {
    console.log("----- Calculation History -----");

    if (history.length === 0) {
        console.log("No calculations yet.");
        return;
    }

    history.forEach((entry, index) => {
        console.log(
            `${index + 1}. ${entry.operand1} ${entry.operator} ${entry.operand2} = ${entry.result} (${entry.timestamp})`
        );
    });
}

// ---------------------------------------------
// Example usage (you can remove this section
// when committing to GitHub if not needed)
// ---------------------------------------------

console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(6, 7));
console.log(divide(20, 5));

displayHistory();
