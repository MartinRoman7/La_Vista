$(document).ready(function() {

    var canvas = document.getElementById("canvas-rombos");
    var context = canvas.getContext('2d');

    //Loading of the home test image - img1
    var img1 = new Image();

    //drawing of the test image - img1
    img1.onload = function() {
        //draw background image
        context.drawImage(img1, 0, 0)
            //draw a box over the top

    };

    img1.src = '../images/life_style.png';

});