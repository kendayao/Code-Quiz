var questions = [
    {   question: "<h3>Commonly used data types DO NOT include:</h3>",
        answer1: "<button>a. strings</button>",
        answer2: "<button>b. booleans</button>",
        answer3: "<button>c. alerts</button>",
        answer4: "<button>d. numbers</button>",
        correct: "c. alerts"
    },

      {question: "<h3>The condition in an if/else statement is enclosed within ___.",
        answer1: "<button>a. quotes</button>",
        answer2: "<button>b. curly brackets</button>",
        answer3: "<button>c. parentheses</button>",
        answer4: "<button>d. square brackets</button>",
        correct: "b. curly brackets"
    },

        {question: "<h3>Arrays in Javascript can be used to store ___</h3>",
        answer1: "<button>a. numbers and strings</button>",
        answer2: "<button>b. other arrays</button>",
        answer3: "<button>c. booleans</button>",
        answer4: "<button>d. all of the above</button>",
        correct: "d. all of the above"
    },
        {   question: "<h3>Commonly used data types DO NOT include:</h3>",
        answer1: "<button>a. strings</button>",
        answer2: "<button>b. booleans</button>",
        answer3: "<button>c. alerts</button>",
        answer4: "<button>d. numbers</button>",
        correct: "c. alerts"
    },

    {   question: "<h3>Arrays in Javascript can be used to store ___</h3>",
        answer1: "<button>a. numbers and strings</button>",
        answer2: "<button>b. other arrays</button>",
        answer3: "<button>c. booleans</button>",
        answer4: "<button>d. all of the above</button>",
        correct: "d. all of the above"
    }]
    

    var timer = 75;
    var questionAnswer=document.body.querySelector("#question-container");
    var startButton=document.body.querySelector(".start-button");
    var timeInterval;
    var quizScore = 0
   

  startButton.addEventListener("click", function(){

    startTimer();
    

    indexOfQuestion = 0;
    showQuestion(indexOfQuestion);
});

    function showQuestion(a){
    questionAnswer.innerHTML= questions[a].question;
    var oLEl = document.createElement("ol");
    questionAnswer.appendChild(oLEl);
    oLEl.setAttribute("style", "list-style-type: none;")
    oLEl.innerHTML ="";
    var liEL1 = document.createElement("li")
    liEL1.innerHTML = questions[a].answer1;
    oLEl.appendChild(liEL1);
    var liEL2 = document.createElement("li")
    liEL2.innerHTML = questions[a].answer2;
    oLEl.appendChild(liEL2);
    var liEL3 = document.createElement("li")
    liEL3.innerHTML = questions[a].answer3;
    oLEl.appendChild(liEL3);
    var liEL4 = document.createElement("li")
    liEL4.innerHTML = questions[a].answer4;
    oLEl.appendChild(liEL4);

       
   
    oLEl.addEventListener("click",function(event){
        checkAnswer();

        if(indexOfQuestion ===questions.length-1){
            clearInterval(timeInterval);
            endQuiz();
            
           
        }
       else{
        indexOfQuestion++;
       showQuestion(indexOfQuestion);
       }
      
    });
}

var oneSecond
function checkAnswer(){
    var oneSecond = setInterval(setTimer, 3000)
    if(event.target.innerHTML===questions[indexOfQuestion].correct){
        document.body.querySelector("#correct").setAttribute("style", "display: box");
        quizScore++;
    } else {
        document.body.querySelector("#incorrect").setAttribute("style", "display: box");
        timer=timer-10;
           
    }
}

function setTimer() {
    var internalTimer = 1
    document.body.querySelector("#correct").setAttribute("style", "display: none");
    document.body.querySelector("#incorrect").setAttribute("style", "display: none");
     clearInterval(oneSecond)
    if(internalTimer === 0) {
       
        clearInterval(oneSecond)    
    
    }
}





function endQuiz(){
   
questionAnswer.innerHTML = "";
var h2El = document.createElement("h2")
var pEl1 = document.createElement("p")
var pEl2 = document.createElement("p")
var inputEl = document.createElement("input")
var buttonEl= document.createElement("button")

h2El.innerHTML = "All done!"
pEl1.innerHTML ="You score is " + ((quizScore/questions.length)*100)
pEl2.innerHTML ="Enter Initials:"
buttonEl.innerHTML = "Submit"
questionAnswer.appendChild(h2El)
questionAnswer.appendChild(pEl1)
questionAnswer.appendChild(pEl2)
pEl2.setAttribute("style", "margin-bottom: 5px; color: #035AA6; font-size: 18px;" )
questionAnswer.appendChild(inputEl)
inputEl.setAttribute("style", "margin-right: 5px;")
questionAnswer.appendChild(buttonEl)
}


function startTimer (){
    var timeInterval = setInterval(function(){
        timer--;
        document.body.querySelector("#timeclock").textContent= timer;
        if(timer <= 0) {
            document.body.querySelector("#timeclock").textContent="",
            clearInterval(timeInterval);
            endQuiz();
            }
    }, 1000);

}



    



























// var timeInterval = setInterval(function(){
//     timer--;
//     document.body.querySelector("#timeclock").textContent= timer;


    // if(timer === 0) {
    //     clearInterval(timeInterval);
    //     endQuiz();
        
    //   }
// }, 1000);


    


