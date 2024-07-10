let display = document.getElementById('display');

// Function to add characters to the display
function addToDisplay(value) {
    display.value += value;
}

// Function to evaluate and calculate the expression
function calculate() {
    try {
        let result = eval(display.value);
        display.value = parseFloat(result.toFixed(10)); // Limiting to 10 decimal places
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to toggle the sign of the number
function toggleSign() {
    display.value = -display.value;
}

// Function to calculate percentage
function percent() {
    display.value = display.value / 100;
}

// Function to calculate square of a number
function square() {
    display.value = Math.pow(display.value, 2);
}

// Function to calculate square root of a number
function squareRoot() {
    display.value = Math.sqrt(display.value);
}

// Function to calculate discount
function discount() {
    let amount = parseFloat(display.value);
    let discountPercentage = prompt('Enter discount percentage:');
    if (discountPercentage !== null) {
        let discountAmount = (amount * discountPercentage) / 100;
        display.value = amount - discountAmount;
    }
}

// Function to calculate area
function area() {
    let shape = prompt('Enter shape (rectangle, circle):');
    if (shape === 'rectangle') {
        let length = parseFloat(prompt('Enter length:'));
        let width = parseFloat(prompt('Enter width:'));
        display.value = length * width;
    } else if (shape === 'circle') {
        let radius = parseFloat(prompt('Enter radius:'));
        display.value = Math.PI * Math.pow(radius, 2);
    } else {
        display.value = 'Invalid shape!';
    }
}

// Function to perform currency conversion
function currency() {
    let amount = parseFloat(display.value);
    let fromCurrency = prompt('Enter from currency (e.g., USD):').toUpperCase();
    let toCurrency = prompt('Enter to currency (e.g., EUR):').toUpperCase();
    if (fromCurrency !== null && toCurrency !== null) {
        // Dummy conversion rates for example
        let conversionRates = {
            USD: 1,
            EUR: 0.85,
            GBP: 0.76,
            JPY: 110.10,
            INR: 74.50
        };
        if (conversionRates.hasOwnProperty(fromCurrency) && conversionRates.hasOwnProperty(toCurrency)) {
            let convertedAmount = (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
            display.value = convertedAmount.toFixed(2);
        } else {
            display.value = 'Invalid currencies!';
        }
    }
}
