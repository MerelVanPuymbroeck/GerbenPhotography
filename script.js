var i = 0;
var images = [];
var time = 3000;

images [0] = "Beelden/coffee.png";
images [1] = "Beelden/koppelfoto.jpg";
images [2] = "Beelden/groepsfoto.jpg";

function changeImg (){
    document.slide.src = images[i];

    if (i < images.length -1 ) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
