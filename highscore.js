// Declared Variables
var highScoreContainer = document.body.querySelector("#highscore-container")
var displayScore = document.body.querySelector("#displayScore")
var goBackButton = document.body.querySelector("#goBack")
var clearButton = document.body.querySelector("#clear")

// Display Score Function
function renderScore(){
var storedhighscore= JSON.parse(localStorage.getItem("highscore"));
for (var i = 0; i <storedhighscore.length; i++){

    nameScore = storedhighscore[i]
    h3El=document.createElement("h3")
    h3El.textContent= nameScore.initials + "-" + nameScore.score
    displayScore.appendChild(h3El)
    }
}

// Go back to mainPafe
goBackButton.addEventListener("click", function(){
    window.location.href = "index.html"
});

// clear high score 
clearButton.addEventListener("click", function(){
    localStorage.removeItem('highscore')
    displayScore.textContent="";
});

renderScore();
