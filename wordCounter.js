var count = document.getElementById('count');
var userInput = document.getElementById('inputBox');
var wordCounter = 0;
var MAX_WORDS = 3;

let eventObj = {
    handleEvent(event) {

        wordsEntered(event.target.value);

        if (wordCounter >= MAX_WORDS) {
            event.preventDefault();
            return alert("Oops, you can only create a username with three words total. Please rethink this major life decision. ");
        }
    }
};

userInput.addEventListener('keyup', eventObj);

function wordsEntered(text) {
    var wordCount = 0;
    for (var i = 0; i <= text.length; i++) {
        if (text.charAt(i) == ' ') {
            wordCount++;
        }
    }
    wordCounter = wordCount;
    count.innerText = wordCount;
}