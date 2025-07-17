var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];


$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    $("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(userChosenColour);
    console.log(userClickedPattern);
});


function nextSequence(){
    var n = Math.random();
    var randomNumber = Math.floor(n*4);
    // console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

// console.log(randomChosenColour);