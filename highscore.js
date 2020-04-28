var highScoreContainer = document.body.querySelector("#highscore-container")
var displayScore = document.body.querySelector("#displayScore")
var goBackButton = document.body.querySelector("#goBack")
var clearButton = document.body.querySelector("#clear")


function render(){
var storedhighscore= JSON.parse(localStorage.getItem("highscore"));
console.log(storedhighscore)
// var storedInitials = localStorage.getItem("initials")
// var storedScore = localStorage.getItem("score") 
for (var i = 0; i <storedhighscore.length; i++){

    result1 = storedhighscore[i]
console.log(result1)
h3El=document.createElement("h3")
h3El.textContent= result1.initials + "-" + result1.score
displayScore.appendChild(h3El)
}

}
goBackButton.addEventListener("click", function(){
    window.location.href = "index.html"
});

clearButton.addEventListener("click", function(){
    localStorage.removeItem('highscore')
    // localStorage.removeItem('initials')
    // localStorage.removeItem('score')

    displayScore.textContent="";
});

render();



// h3El=document.createElement("h3")
// h3El.textContent=storedhighscore
// highScoreContainer.appendChild(h3El)