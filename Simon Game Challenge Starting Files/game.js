var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;


$(document).on("keypress",function(){
    if(!started){
         $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
   
})


$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    // console.log(userClickedPattern);
    animatePress(userChosenColour);
});


function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);

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

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


// console.log(randomChosenColour);