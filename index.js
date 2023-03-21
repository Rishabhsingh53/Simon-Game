colors = ["red","blue","green","yellow"];
gamepattern = []
userClickedPattern = []

function nextSeq() {
    var randomNum = Math.floor(Math.random() * 4) 
    var randomChoosenColor = colors[randomNum]
    gamepattern.push(randomChoosenColor)
    var x = document.querySelector("#"+randomChoosenColor)
    $("#" + randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // not working right now 
    var sound = new Audio("sounds/" + randomChoosenColor + ".mp3");
    sound.play()
}
nextSeq()