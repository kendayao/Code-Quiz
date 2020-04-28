var highScoreContainer = document.body.querySelector("#highscore-container")

render();

function render(){

var storedInitials = localStorage.getItem("initials")   
h3El=document.createElement("h3")
h3El.textContent=storedInitials
highScoreContainer.appendChild(h3El)
}

