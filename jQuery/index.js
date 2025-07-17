// $("h1").css("color","red");
// $("h1").text("Bye")
// $("button").html("<em>Don't click</em>")

$("h1").addClass("big-title margin-50");

// $(document).keypress(function(event){
//     $("h1").text(event.key)
// })


// $("h1").on("mouseover", function(){
//     $("h1").css("color","purple");
// });

// alert("Working");

// document.querySelector(".btn").addEventListener("click", function(){
//     alert("First button pressed.");
// })

$("button").on("click", function(){
    $("h1").animate({opacity:0.5, margin:10});
})