var btn = document.querySelector('.btn-translate');
var inputText;
var outputWindow = document.querySelector('.outputArea');
var errorArea = document.querySelector('.errorArea');
// var url = 'https://api.funtranslations.com/translate/ferb-latin.json';
// var url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';
var url = 'https://api.funtranslations.com/translate/minion.json';

function translateURL(text) {
    return url + '?' + 'text=' + text
}

function getinput() {
    inputText = document.querySelector('.inp-text').value;

}

function translateHandler() {
    getinput();
    fetch(translateURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputWindow.innerHTML = translatedText;
            // console.log(json.contents.text);
        })
        .catch(errorHandler)
}

function errorHandler(error) {
    errorArea.innerHTML = (" Looks like there's an issue, please visit us back again after an hour");
    errorArea.style.color = "red";
    setTimeout( function(){
      errorArea.innerHTML = '';
    }, 5000);
}

btn.addEventListener('click', translateHandler);
