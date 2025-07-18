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
   
});


$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // level++;
    // $("#level-title").text("Level " + level);
    playSound(userChosenColour);
    // console.log(userClickedPattern);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    }
    else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");

        setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);

         $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }

}


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

function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
  userClickedPattern = []; 
}


// console.log(randomChosenColour);