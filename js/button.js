function sendForm(e){
     
    // получаем значение поля key
    var keyBox = document.search.key;
    var val = keyBox.value;
    if(val.length>5){
        alert("Недопустимая длина строки");
        e.preventDefault();
    }   
    else
        alert("Отправка разрешена");
}
 
var sendButton = document.search.send;
sendButton.addEventListener("click", sendForm);