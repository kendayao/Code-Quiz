var questions = [
    {   question: "<h3>Commonly used data types DO NOT include:</h3>",
        answer1: "<button>A. strings</button>",
        answer2: "<button>B. booleans</button>",
        answer3: "<button>C. alerts</button>",
        answer4: "<button>D. numbers</button>",
        correct: "C. alerts"
    },

      {question: "<h3>The condition in an if/else statement is enclosed within ___.",
        answer1: "<button>A. quotes</button>",
        answer2: "<button>B. curly brackets</button>",
        answer3: "<button>C. parentheses</button>",
        answer4: "<button>D. square brackets</button>",
        correct: "B. curly brackets"
    },

        {question: "<h3>Arrays in Javascript can be used to store ___</h3>",
        answer1: "<button>A. numbers and strings</button>",
        answer2: "<button>B. other arrays</button>",
        answer3: "<button>C. booleans</button>",
        answer4: "<button>D. all of the above</button>",
        correct: "D. all of the above"
    },
        {question: "<h3>Inside which HTML element do we put the JavaScript?</h3>",
        answer1: "<button>A. script</button>",
        answer2: "<button>B. javascript</button>",
        answer3: "<button>C. js</button>",
        answer4: "<button>D. scripting</button>",
        correct: "A. script"
    },

    {   question: "<h3>How do you write 'Hello World' in an alert box?</h3>",
        answer1: "<button>A. msgBox('Hello World')</button>",
        answer2: "<button>B. alert('Hello World')</button>",
        answer3: "<button>C. alertBox('Hello World')</button>",
        answer4: "<button>D. msg('Hello World')</button>",
        correct: "B. alert('Hello World')"
    },
    {   question: "<h3>How do you create a function in JavaScript?</h3>",
        answer1: "<button>A. function myFunction()</button>",
        answer2: "<button>B. function:myFunction</button>",
        answer3: "<button>C. function = myFunction()</button>",
        answer4: "<button>D. none of the above</button>",
        correct: "A. function myFunction()"
    },
    {   question: "<h3>How do you call a function named 'myFunction'?</h3>",
        answer1: "<button>A. call myFunction()</button>",
        answer2: "<button>B. call function myFunction()</button>",
        answer3: "<button>C. myFunction()</button>",
        answer4: "<button>D. My Function</button>",
        correct: "C. myFunction()"
    },
    {   question: "<h3>Which of the following is not a valid JavaScript variable name?</h3>",
        answer1: "<button>A. 2names</button>",
        answer2: "<button>B. _first_and_last_names</button>",
        answer3: "<button>C. FirstAndLast</button>",
        answer4: "<button>D. None of the above</button>",
        correct: "A. 2names"
    },
    {   question: "<h3>What is the correct way to write a JavaScript array?</h3>",
        answer1: "<button>A. var colors=1=('red'), 2=('green')</button>",
        answer2: "<button>B. var colors=['red','green','blue']</button>",
        answer3: "<button>C. var colors=(1. red, 2.green)</button>",
        answer4: "<button>D. var colors=red,green,blue</button>",
        correct: "B. var colors=['red','green','blue']"
    },
    {   question: "<h3>x=x+y is the same as...</h3>",
        answer1: "<button>A. x+=y</button>",
        answer2: "<button>B. x+x=x</button>",
        answer3: "<button>C. y+y=x</button>",
        answer4: "<button>D. y=x</button>",
        correct: "A. x+=y"
    }
]
    

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
        if (indexOfQuestion ===questions.length-1){
            endQuiz();
        }else{
       
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
var quizResult = ((quizScore/questions.length)*100)
h2El.innerHTML = "All done!"
pEl1.innerHTML ="You score is " + quizResult
pEl2.innerHTML ="Enter Initials:"
buttonEl.innerHTML = "Submit"
questionAnswer.appendChild(h2El)
questionAnswer.appendChild(pEl1)
questionAnswer.appendChild(pEl2)
pEl2.setAttribute("style", "margin-bottom: 5px; color: #035AA6; font-size: 18px;" )
questionAnswer.appendChild(inputEl)
inputEl.setAttribute("style", "margin-right: 5px;")
questionAnswer.appendChild(buttonEl)
buttonEl.setAttribute("class", "highscore")


submitButton= document.body.querySelector(".highscore")

submitButton.addEventListener("click",function(){

var initials = questionAnswer.querySelector("input").value
var score = quizResult
localStorage.setItem("initials", initials)
localStorage.setItem("score", score)

window.location.href = "highscore.html"

    });
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


    


