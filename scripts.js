/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ';
const code = 3;

/**
 * Byrja forrit.
 */
function start() {
  alert('Halló!')
  let question = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu kóða eða afkóða');
  spurja(question);
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
    for (let i =0; 1 < str.length; i++) {
        // console.log(str.charAt(i));
        let index = LETTERS.indexOf(str.charAt(i));
        encode_string += (LETTERS.length + (index + n)) % LETTERS.length;

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
    for (let i =0; 1 < str.length; i++) {
        // console.log(str.charAt(i));
        let index = LETTERS.indexOf(str.charAt(i));
        decode_string += (LETTERS.length + (index - n)) % LETTERS.length;


  return decode_string;
}

function spurja() {
    if (question === 'Kóða') {
        let un = prompt('Hver er strengurinn?: ');
        if (tungumal(un) === "") {
            spurjatvo(un, 0);
        } else {
            let x = prompt("Þú gafst upp staf sem ekki hægt að "+ question +":" tungumal(un) +".Reyndu aftur.");
            spurja(x);
        }
    } if else (question === 'Afkóða') {
        let deux = prompt('Hver er strengurinn?: ');
        if (tungumal(deux) === "") {
            askertvo(deux, 1);
        }
        let y = prompt("Þú gafst upp staf sem ekki hægt að "+ question +":" tungumal(un) +".Reyndu aftur.");
            spurja(y);
    } else {
        let trois = prompt("Veit ekki hvaða aðgerð "+ question +" er. Reyndu aftur. : ");
        spurja(trois);

    }
}

    function spurjatvo(newquestion, codemaster) {
        let d = Number.parseInt(prompt("Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]"));
        if ((0 < Number.isInteger(n)) && (Number.isInteger(n) > 32)) {
            if (codemaster = 0) {
                encode(toLocalUpperCase(newquestion), d);
            } else if (codemaster - 1) {
                decode(toLocalUpperCase(newquestion), d);
            } 
        }
        else {
            let e = prompt("Ekki rétt tala? Reyndu aftur");
            spurjatvo(e); 
    }
}

function tungumal() {
    for (let i = 0; i < str.length; i++) {
        let focusString = "";
        if (LETTERS.indexOf(str.charAt(i)) == -1) {
            focusString += str.charAt(i) + " ";
        } 
         return focusString;
        }
    }
}
// console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
// console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
// console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
// console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
// console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
// console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');