var highScoreContainer = document.body.querySelector("#highscore-container")
var goBackButton = document.body.querySelector("#goBack")
var clearButton = document.body.querySelector("#clear")


function render(){
var storedhighscore= JSON.parse(localStorage.getItem("highscore"));

// var storedInitials = localStorage.getItem("initials")
// var storedScore = localStorage.getItem("score")   
h3El=document.createElement("h3")
h3El.textContent=storedhighscore.initials + "-" + storedhighscore.score
highScoreContainer.appendChild(h3El)
}


goBackButton.addEventListener("click", function(){
    window.location.href = "index.html"
});

clearButton.addEventListener("click", function(){
    localStorage.removeItem('highscore')
    // localStorage.removeItem('initials')
    // localStorage.removeItem('score')

    h3El.textContent=""
});

render();