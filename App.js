// Helper: validate binary string (only 0 or 1)
function isValidBinary(str) {
    return /^[01]+$/.test(str);
}

// Convert decimal to binary
function decimalToBinary(decimal) {
    const num = Number(decimal);
    if (!Number.isInteger(num) || num < 0) {
        return 'Please enter a valid non-negative integer.';
    }
    return num.toString(2);
}

// Convert binary to decimal
function binaryToDecimal(binary) {
    if (!isValidBinary(binary)) {
        return 'Please enter a valid binary number (0 and 1 only).';
    }
    return parseInt(binary, 2).toString(10);
}

// Perform binary arithmetic operations
function binaryArithmetic(bin1, bin2, operation) {
    if (!isValidBinary(bin1) || !isValidBinary(bin2)) {
        return 'Both inputs must be valid binary numbers.';
    }
    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);

    let resultNum;
    switch (operation) {
        case 'add':
            resultNum = num1 + num2;
            break;
        case 'subtract':
            resultNum = num1 - num2;
            if (resultNum < 0) return 'Result is negative. Please enter larger first number.';
            break;
        case 'multiply':
            resultNum = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) return 'Cannot divide by zero.';
            resultNum = Math.floor(num1 / num2);
            break;
        default:
            return 'Unsupported operation.';
    }
    return resultNum.toString(2);
}

// Event listeners setup on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    // Decimal to Binary
    const decToBinInput = document.getElementById('decimal-to-binary-input');
    const decToBinBtn = document.getElementById('dec-to-bin-btn');
    const decBinResult = document.getElementById('dec-bin-result');

    decToBinBtn.addEventListener('click', () => {
        const value = decToBinInput.value.trim();
        const result = decimalToBinary(value);
        decBinResult.value = result;
    });

    // Binary to Decimal
    const binToDecInput = document.getElementById('binary-to-decimal-input');
    const binToDecBtn = document.getElementById('bin-to-dec-btn');
    const binDecResult = document.getElementById('bin-dec-result');

    binToDecBtn.addEventListener('click', () => {
        const value = binToDecInput.value.trim();
        const result = binaryToDecimal(value);
        binDecResult.value = result;
    });

    // Binary arithmetic
    const binInput1 = document.getElementById('binary-input1');
    const binInput2 = document.getElementById('binary-input2');
    const operationSelect = document.getElementById('operation-select');
    const calcBtn = document.getElementById('calc-convert-btn');
    const arithResult = document.getElementById('arith-result');

    calcBtn.addEventListener('click', () => {
        const val1 = binInput1.value.trim();
        const val2 = binInput2.value.trim();
        const operation = operationSelect.value;

        const result = binaryArithmetic(val1, val2, operation);
        arithResult.value = result;
    });
});
