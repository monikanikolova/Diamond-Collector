//Set global variables
var randomNumber = 0;
var win = 0;
var loss = 0;
var sum = 0;
previous = 0;

//Create 4 diamonds and random result
var beginNewGame = function () {
    $(".diamonds").empty();
    randomNumber = Math.floor(Math.random() * 101) + 19;

    
    $("#random-number").html("Random Number: " + randomNumber);
    //Random numbers on each diamond
    for (var i = 0; i < 4; i++) {

        var randomNumberDiamond = Math.floor(Math.random() * 10) + 1;

        var diamond = $("<div>");
        diamond.attr({
            "class": 'diamond',
            "random-data": randomNumberDiamond

        });

        $(".diamonds").append(diamond);
    }
    $(".total-score").html("Your score: " + previous);

}
beginNewGame();
//Create a function when click on diamond to add to previous number 

 

$(document).on('click', ".diamond", function () {

    var number = parseInt($(this).attr("random-data"));
    previous += number;
    $(".total-score").html("Your score: " + previous);

    if (previous > randomNumber) {
        loss++;
        previous = 0;
        $("#loss").html("Loss: " + loss);
        beginNewGame ();

    } else if (previous === randomNumber) {
        win++;
        previous = 0;
        $("#win").html("Win: " + win);
        beginNewGame();

    }

}); 