const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
var first = document.getElementById("first")
var second = document.getElementById("second")

function randompass(){
    var password1 = ""
    var password2 = ""
    for(var i = 0; i<15 ; i++){
        var ran = Math.floor(Math.random()*characters.length)
        password1 = password1 + characters[ran]
    }
    for(var i = 0; i<15 ; i++){
        var ran = Math.floor(Math.random()*characters.length)
        password2 = password2 + characters[ran]
    }
   first.innerHTML = password1;
   second.innerHTML = password2;
}

