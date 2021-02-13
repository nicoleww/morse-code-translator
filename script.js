// state variables

let translation = '';

// cached elements

let input1 = document.getElementById('input1');
let span1 = document.getElementById('span1');
let btn1 = document.getElementById('btn1');
// event listeners

btn1.addEventListener('click', function(){
    translation = translateMorse(input1.value);
    span1.innerHTML = translation;
})

//functions

function translateMorse(string) {
    let translated = '';
    for (let s of string) {
        if (s == 'a') {
            translated = translated + '.-';
        } else if (s == 'b') {
            translated = translated + '-...';
        } else if (s == 'c') {
            translated = translated + '-.-.';
        } else if (s == 'd') {
            translated = translated + '-..';
        } else if (s == 'e') {
            translated = translated + '.';
        } else if (s == 'f') {
            translated = translated + '..-.';
        } else if (s == 'g') {
            translated = translated + '--.';
        } else if (s == 'h') {
            translated = translated + '....';
        } else if (s == 'i') {
            translated = translated + '..';
        } else if (s == 'j') {
            translated = translated + '.---';
        } else if (s == 'k') {
            translated = translated + '-.-';
        } else if (s == 'l') {
            translated = translated + '.-..';
        } else if (s == 'm') {
            translated = translated + '--';
        } else if (s == 'n') {
            translated = translated + '-.';
        } else if (s == 'o') {
            translated = translated + '---';
        } else if (s == 'p') {
            translated = translated + '.--.';
        } else if (s == 'q') {
            translated = translated + '--.-';
        } else if (s == 'r') {
            translated = translated + '.-.';
        } else if (s == 's') {
            translated = translated + '...';
        } else if (s == 't') {
            translated = translated + '-';
        } else if (s == 'u') {
            translated = translated + '..-';
        } else if (s == 'v') {
            translated = translated + '...-';
        } else if (s == 'w') {
            translated = translated + '.--';
        } else if (s == 'x') {
            translated = translated + '-..-';
        } else if (s == 'y') {
            translated = translated + '-.--';
        } else if (s == 'z') {
            translated = translated + '--..';
        } else if (s == '0') {
            translated = translated + '-----';
        } else if (s == '1') {
            translated = translated + '.----';
        } else if (s == '2') {
            translated = translated + '..---';
        } else if (s == '3') {
            translated = translated + '...--';
        } else if (s == '4') {
            translated = translated + '....-';
        } else if (s == '5') {
            translated = translated + '.....';
        } else if (s == '6') {
            translated = translated + '-....';
        } else if (s == '7') {
            translated = translated + '--...';
        } else if (s == '8') {
            translated = translated + '---..';
        } else if (s == '9') {
            translated = translated + '----.';
        } else {
            alert('invalid character');
        }
        }
        return translated;
    }

