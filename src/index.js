const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const expression = expr.split('');
    const exprArr = [];
    for (let i = 0; i < expression.length; i += 10) {
        exprArr.push(expression.slice(i, i + 10).join(''));
    }

    const clearArr = [];
    for (let char of exprArr) {
        const numArr = char.split('');
        for (let i = 0; i < 10; i += 1) {
            if (numArr[i] !== '0') {
                clearArr.push(numArr.slice(i).join(''));
                break;
            }
        }
    }

    const morseArr =[];
    for (let char of clearArr) {
        const morseCharArr = [];
        for (let i = 0; i < char.length; i += 2) {
            let morseSymbol = (char.split('').slice(i, i + 2).join(''));
            if (morseSymbol ===  '10') {
                morseCharArr.push('.');
            } else if (morseSymbol ===  '11') {
                morseCharArr.push('-');
            }
        }
        morseArr.push(MORSE_TABLE[morseCharArr.join('')] || ' ');
    }
   
    return morseArr.join('');
}

module.exports = {
    decode
}
