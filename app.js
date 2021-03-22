var inputBox = document.querySelector(".input-box")
var translateButton = document.querySelector(".btn-translate")
var outputBox = document.querySelector(".output-box")
var testUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var url="https://api.funtranslations.com/translate/groot.json"

function urlToFetch(inputText){
    var toFetch = url + "?text="+ inputText;
    encoded = encodeURI(toFetch);
    return encoded
}


translateButton.addEventListener("click",translateText)

function translateText(){
    console.log("I m fired")
    var inputText = inputBox.value;
    console.log(decodeURI(urlToFetch(inputText)))
    fetch(decodeURI(urlToFetch(inputText)))
    .then(response => response.json())
    .then(json => outputBox.innerText = json.contents.translated)
}