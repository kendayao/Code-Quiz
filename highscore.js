var highScoreContainer = document.body.querySelector("#highscore-container")
var goBackButton = document.body.querySelector("#goBack")
var clearButton = document.body.querySelector("#clear")
render();

function render(){

var storedInitials = localStorage.getItem("initials")   
h3El=document.createElement("h3")
h3El.textContent=storedInitials
highScoreContainer.appendChild(h3El)
}


goBackButton.addEventListener("click", function(){
    window.location.href = "index.html"
});

clearButton.addEventListener("click", function(){
    h3El.textContent="";
});