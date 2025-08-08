function isValidBinary(str) {
    return /^[01]+$/.test(str);
}

// This function converts binary to decimal
function binaryToDecimal(binary) {
    if (!isValidBinary(binary)) {
        return 'Please enter a valid binary number (0 and 1 only).';
    }
    return parseInt(binary, 2).toString(10);
}

// This converts decimal to binary
function decimalToBinary(decimal) {
    const num = Number(decimal);
    if (!Number.isInteger(num) || num < 0) {
        return 'Please enter a valid non-negative integer.';
    }
    return num.toString(2);
}

// It performs binary arithmetic calculations
// Supports addition, subtraction, multiplication, and division
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

//From Decimal to Binary
document.addEventListener('DOMContentLoaded', () => {
    const decToBinInput = document.getElementById('decimal-to-binary-input');
    const decToBinBtn = document.getElementById('dec-to-bin-btn');
    const decBinResult = document.getElementById('dec-bin-result');

    decToBinBtn.addEventListener('click', () => {
        const value = decToBinInput.value.trim();
        const result = decimalToBinary(value);
        decBinResult.value = result;
    });

    window.onload = function () {
        populateAsciiTable();
        document.getElementById('ascii-section').style.display = 'none';
        document.getElementById('arithmetic').style.display = 'block';
        document.getElementById('binary').style.display = 'none';
        document.getElementById('decimal').style.display = 'none';
    }

    // From Binary to Decimal
    const binToDecInput = document.getElementById('binary-to-decimal-input');
    const binToDecBtn = document.getElementById('bin-to-dec-btn');
    const binDecResult = document.getElementById('bin-dec-result');

    binToDecBtn.addEventListener('click', () => {
        const value = binToDecInput.value.trim();
        const result = binaryToDecimal(value);
        binDecResult.value = result;
    });

    //For Binary arithmetic
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

// ASCII Data
const asciiData = [
    { symbol: '0', binary: '00110000', html: '&#48;', desc: 'Digit Zero' },
    { symbol: '1', binary: '00110001', html: '&#49;', desc: 'Digit One' },
    { symbol: '2', binary: '00110010', html: '&#50;', desc: 'Digit Two' },
    { symbol: '3', binary: '00110011', html: '&#51;', desc: 'Digit Three' },
    { symbol: '4', binary: '00110100', html: '&#52;', desc: 'Digit Four' },
    { symbol: '5', binary: '00110101', html: '&#53;', desc: 'Digit Five' },
    { symbol: '6', binary: '00110110', html: '&#54;', desc: 'Digit Six' },
    { symbol: '7', binary: '00110111', html: '&#55;', desc: 'Digit Seven' },
    { symbol: '8', binary: '00111000', html: '&#56;', desc: 'Digit Eight' },
    { symbol: '9', binary: '00111001', html: '&#57;', desc: 'Digit Nine' },
    { symbol: 'A', binary: '01000001', html: '&#65;', desc: 'Uppercase A' },
    { symbol: 'B', binary: '01000010', html: '&#66;', desc: 'Uppercase B' },
    { symbol: 'C', binary: '01000011', html: '&#67;', desc: 'Uppercase C' },
    { symbol: 'D', binary: '01000100', html: '&#68;', desc: 'Uppercase D' },
    { symbol: 'E', binary: '01000101', html: '&#69;', desc: 'Uppercase E' },
    { symbol: 'F', binary: '01000110', html: '&#70;', desc: 'Uppercase F' },
    { symbol: 'G', binary: '01000111', html: '&#71;', desc: 'Uppercase G' },
    { symbol: 'H', binary: '01001000', html: '&#72;', desc: 'Uppercase H' },
    { symbol: 'I', binary: '01001001', html: '&#73;', desc: 'Uppercase I' },
    { symbol: 'J', binary: '01001010', html: '&#74;', desc: 'Uppercase J' },
    { symbol: 'K', binary: '01001011', html: '&#75;', desc: 'Uppercase K' },
    { symbol: 'L', binary: '01001100', html: '&#76;', desc: 'Uppercase L' },
    { symbol: 'M', binary: '01001101', html: '&#77;', desc: 'Uppercase M' },
    { symbol: 'N', binary: '01001110', html: '&#78;', desc: 'Uppercase N' },
    { symbol: 'O', binary: '01001111', html: '&#79;', desc: 'Uppercase O' },
    { symbol: 'P', binary: '01010000', html: '&#80;', desc: 'Uppercase P' },
    { symbol: 'Q', binary: '01010001', html: '&#81;', desc: 'Uppercase Q' },
    { symbol: 'R', binary: '01010010', html: '&#82;', desc: 'Uppercase R' },
    { symbol: 'S', binary: '01010011', html: '&#83;', desc: 'Uppercase S' },
    { symbol: 'T', binary: '01010100', html: '&#84;', desc: 'Uppercase T' },
    { symbol: 'U', binary: '01010101', html: '&#85;', desc: 'Uppercase U' },
    { symbol: 'V', binary: '01010110', html: '&#86;', desc: 'Uppercase V' },
    { symbol: 'W', binary: '01010111', html: '&#87;', desc: 'Uppercase W' },
    { symbol: 'X', binary: '01011000', html: '&#88;', desc: 'Uppercase X' },
    { symbol: 'Y', binary: '01011001', html: '&#89;', desc: 'Uppercase Y' },
    { symbol: 'Z', binary: '01011010', html: '&#90;', desc: 'Uppercase Z' },
    { symbol: 'a', binary: '01100001', html: '&#97;', desc: 'Lowercase a' },
    { symbol: 'b', binary: '01100010', html: '&#98;', desc: 'Lowercase b' },
    { symbol: 'c', binary: '01100011', html: '&#99;', desc: 'Lowercase c' },
    { symbol: 'd', binary: '01100100', html: '&#100;', desc: 'Lowercase d' },
    { symbol: 'e', binary: '01100101', html: '&#101;', desc: 'Lowercase e' },
    { symbol: 'f', binary: '01100110', html: '&#102;', desc: 'Lowercase f' },
    { symbol: 'g', binary: '01100111', html: '&#103;', desc: 'Lowercase g' },
    { symbol: 'h', binary: '01101000', html: '&#104;', desc: 'Lowercase h' },
    { symbol: 'i', binary: '01101001', html: '&#105;', desc: 'Lowercase i' },
    { symbol: 'j', binary: '01101010', html: '&#106;', desc: 'Lowercase j' },
    { symbol: 'k', binary: '01101011', html: '&#107;', desc: 'Lowercase k' },
    { symbol: 'l', binary: '01101100', html: '&#108;', desc: 'Lowercase l' },
    { symbol: 'm', binary: '01101101', html: '&#109;', desc: 'Lowercase m' },
    { symbol: 'n', binary: '01101110', html: '&#110;', desc: 'Lowercase n' },
    { symbol: 'o', binary: '01101111', html: '&#111;', desc: 'Lowercase o' },
    { symbol: 'p', binary: '01110000', html: '&#112;', desc: 'Lowercase p' },
    { symbol: 'q', binary: '01110001', html: '&#113;', desc: 'Lowercase q' },
    { symbol: 'r', binary: '01110010', html: '&#114;', desc: 'Lowercase r' },
    { symbol: 's', binary: '01110011', html: '&#115;', desc: 'Lowercase s' },
    { symbol: 't', binary: '01110100', html: '&#116;', desc: 'Lowercase t' },
    { symbol: 'u', binary: '01110101', html: '&#117;', desc: 'Lowercase u' },
    { symbol: 'v', binary: '01110110', html: '&#118;', desc: 'Lowercase v' },
    { symbol: 'w', binary: '01110111', html: '&#119;', desc: 'Lowercase w' },
    { symbol: 'x', binary: '01111000', html: '&#120;', desc: 'Lowercase x' },
    { symbol: 'y', binary: '01111001', html: '&#121;', desc: 'Lowercase y' },
    { symbol: 'z', binary: '01111010', html: '&#122;', desc: 'Lowercase z' }
];

function populateAsciiTable() {
    const tbody = document.getElementById('ascii-table-body');
    tbody.innerHTML = '';
    asciiData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.symbol}</td>
            <td>${item.binary}</td>
            <td>${item.html}</td>
            <td>${item.desc}</td>
        `;
        tbody.appendChild(row);
    });
}

window.onload = function () {
    populateAsciiTable();
};

document.getElementById('ascii-btn').addEventListener('click', function () {
    document.getElementById('ascii-section').style.display = 'block';
    document.getElementById('arithmetic').style.display = 'none';
    document.getElementById('binary').style.display = 'none';
    document.getElementById('decimal').style.display = 'none';
});

document.getElementById('binary-btn').addEventListener('click', function () {
    document.getElementById('ascii-section').style.display = 'none';
    document.getElementById('arithmetic').style.display = 'none';
    document.getElementById('binary').style.display = 'block';
    document.getElementById('decimal').style.display = 'none';
});
document.getElementById('decimal-btn').addEventListener('click', function () {
    document.getElementById('ascii-section').style.display = 'none';
    document.getElementById('arithmetic').style.display = 'none';
    document.getElementById('binary').style.display = 'none';
    document.getElementById('decimal').style.display = 'block';
    populateAsciiTable(); // Make sure this function is defined as shown previously
});

document.getElementById('home-btn').addEventListener('click', function () {
    document.getElementById('ascii-section').style.display = 'none';
    document.getElementById('arithmetic').style.display = 'block';
    document.getElementById('binary').style.display = 'none';
    document.getElementById('decimal').style.display = 'none';
    populateAsciiTable(); // Make sure this function is defined as shown previously
});
