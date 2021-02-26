var text = "Alanıma Hoşgeldiniz...";
var field = document.getElementById("field");
var i = 0;

var type = () => {
    if (i < text.length) {
        field.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}

type();