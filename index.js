colors = ["red","blue","green","yellow"];
gamepattern = []
userClickedPattern = []

$(".btn").click(function () {
    var userClick = this.getAttribute("id")
    console.log(userClick);
    userClickedPattern.push(userClick)
    animatePress(userClick)
    playSound(userClick)

})

function nextSeq() {
    var randomNum = Math.floor(Math.random() * 4) 
    var randomChoosenColor = colors[randomNum]
    gamepattern.push(randomChoosenColor)
    $("#" + randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColor)
}

nextSeq()
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play()
}

function animatePress(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () {
        $("#"+color).removeClass("pressed")
    },100)
}
 