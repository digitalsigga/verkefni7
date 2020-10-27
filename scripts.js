/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ';
const code = 3;

function start() {
  let question = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu kóða eða afkóða');
  asker(question);
}


// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n) {
    let encode_string = "";
    for (let i = 0; i < str.length; i++) {
        let index = LETTERS.indexOf(str.charAt(i));
        encode_string += (LETTERS.charAt((LETTERS.length + (index + n)) % LETTERS.length));
    }
    return encode_string;
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
    let decode_string = "";
    for (let i =0; i < str.length; i++) {
        let index = LETTERS.indexOf(str.charAt(i));
        decode_string += (LETTERS.charAt((LETTERS.length + (index - n)) % LETTERS.length));
    }
    return decode_string;
}

/**
 * @param {String} question Spyr hver strengurinn sé
 */

function asker(question) {
    if (question === 'Kóða') {
        let koda = prompt('Hver er strengurinn?: ');
        if (tungumal(koda) == "") {
            askertwo(koda, 0);
        } else {
            let villa = prompt("Þú gafst upp staf sem ekki er hægt að "+ question +": "+ tungumal(koda) +".Reyndu aftur.");
            asker(villa);
        }
    } if (question === 'Afkóða') {
        let afkoda = prompt('Hver er strengurinn?: ');
        if (tungumal(afkoda) == "") {
            askertwo(afkoda, 1);
        } else {
        let villa2 = prompt("Þú gafst upp staf sem ekki er hægt að "+ question +": "+ tungumal(afkoda) +".Reyndu aftur.");
            asker(villa2);
        }
    } else {
        let fail = prompt("Veit ekki hvaða aðgerð "+ question +" er. Reyndu aftur. : ");
        asker(fail);
    }
}

    function askertwo(newquestion, codemaster) {
        let n = Number.parseInt(prompt("Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]: "));
        if ((Number.isInteger(n)) && (0 < n) && (n < 32)) {
            if (codemaster = 0) {
                confirm("Kóðaður: "+ encode(newquestion.toLocalUpperCase(), n));
            } else if (codemaster = 1) {
                confirm("Afkóðaður: "+ decode(newquestion.toLocalUpperCase(), n));
            } 
        }
        else {
            let wrong = prompt("Ekki rétt tala. Reyndu aftur");
            askertwo(wrong); 
    }
}

function tungumal(str) {
    for (let i = 0; i < str.length; i++) {
        let focusString = "";
        if (LETTERS.indexOf(str.charAt(i)) == -1) {
            focusString += str.charAt(i) + " ";
        } 
         return focusString;
        }
    }

console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');