colors = ["red","blue","green","yellow"];
gamepattern = []
userClickedPattern = []

$(".btn").click(function () {
    var userClick = this.getAttribute("id")
    console.log(userClick);
})

function nextSeq() {
    var randomNum = Math.floor(Math.random() * 4) 
    var randomChoosenColor = colors[randomNum]
    gamepattern.push(randomChoosenColor)
    $("#" + randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // not working right now 
    // var sound = new Audio("sounds/" + randomChoosenColor + ".mp3");
    // sound.play()
}
nextSeq()