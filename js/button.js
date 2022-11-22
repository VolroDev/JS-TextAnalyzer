const numbers = "1234567890";
const characters = "йцукенгшщзхїфівапролджєячсмитьбю";
const specialCharacters = "~`!@#№$%^&*()-_=+[{]};:',<.>/?" + '"\|';
let wordsCount;
let numbersCount;
let charactersCount;
let specialCharactersCount;

function sendForm() {

    wordsCount = 0;
    numbersCount = 0;
    charactersCount = 0;
    specialCharactersCount = 0;

    let keyBox = document.getElementById("InputText").value;

    if (keyBox.length > 0) {

        let words = keyBox.split(' ');
        wordsCount = words.length;

        for (index = 0; index < words.length; ++index) {
            wordAnalysis(words[index]);
        }

    }
    else {

    }

    let resultText = "Кількість слів " + wordsCount + "\n";
    resultText = resultText + "Кількість чисел " + numbersCount + "\n";
    resultText = resultText + "Кількість звичайних символів " + charactersCount + "\n";
    resultText = resultText + "Кількість спеціальних символів " + specialCharactersCount + "\n";

    document.getElementById("OutputText").value = resultText;

    //alert(1);

}

function symbolAnalysis(element) {
    if (characters.indexOf(element) > 0) {
        charactersCount++;
    }
    else if (specialCharacters.indexOf(element) > 0) {
        specialCharactersCount++;
    }
    else if (numbers.indexOf(element) > 0) {
        specialCharactersCount++;
    }
    else {

    }
}

function wordAnalysis(word) {
    let array = word.split('');
    for (let index = 0; index < array.length; index++) {
        symbolAnalysis(array[index]);
    }
}