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
    {question: "<h3>Arrays in Javascript can be used to store ___</h3>",
    answer1: "<button>a. numbers and strings</button>",
    answer2: "<button>b. other arrays</button>",
    answer3: "<button>c. booleans</button>",
    answer4: "<button>d. all of the above</button>",
    correct: "d. all of the above"
    }]
    

    var timer = 75;
    var questionAnswer=document.body.querySelector("#question-container");
    var startButton=document.body.querySelector(".start-button");

    
   

  startButton.addEventListener("click", function(){

    timerSet ();
    
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

        console.log(indexOfQuestion)
        console.log(questions.length)
       
        if(indexOfQuestion ===questions.length-1){
            document.body.querySelector("#timeclock").textContent= 0
            
            endQuiz();
            
        }
       
       else{
       
        indexOfQuestion++;
       showQuestion(indexOfQuestion);
       
       }
    });
}


function checkAnswer(){
    if(event.target.innerHTML===questions[indexOfQuestion].correct){
        document.body.querySelector("#answerStatus").innerHTML = "<h3>Correct!</h3>"
    } else {
        document.body.querySelector("#answerStatus").innerHTML = "<h3>Incorrect!</h3>"
        
        timer=timer-10;
    }

}


function timerSet (){
var timeInterval = setInterval(function(event){
    timer--;
    document.body.querySelector("#timeclock").textContent= timer;
    if(timer === 0) {
        clearInterval(timeInterval);
        endQuiz();
        
      }
}, 1000);
}

function endQuiz(){
    
questionAnswer.innerHTML = "";
var h2El = document.createElement("h2")
var pEl = document.createElement("p")
var inputEl1 = document.createElement("input")
var inputEl2= document.createElement("input")

h2El.innerHTML = "All done!"
pEl.innerHTML ="You score is 55"
inputEl1.innerHTML = "<input>"

questionAnswer.appendChild(h2El)
questionAnswer.appendChild(pEl)
questionAnswer.appendChild(inputEl1)
questionAnswer.appendChild(inputEl2)




}






    

    





























    
//     questionAnswer.innerHTML= questions[0].question;
//     var oLEl = document.createElement("ol");
//     questionAnswer.appendChild(oLEl);
//     oLEl.setAttribute("style", "list-style-type: none")
//     var liEL1 = document.createElement("li")
//     liEL1.innerHTML = questions[0].answer1;
//     oLEl.appendChild(liEL1);
//     var liEL2 = document.createElement("li")
//     liEL2.innerHTML = questions[0].answer2;
//     oLEl.appendChild(liEL2);
//     var liEL3 = document.createElement("li")
//     liEL3.innerHTML = questions[0].answer3;
//     oLEl.appendChild(liEL3);
//     var liEL4 = document.createElement("li")
//     liEL4.innerHTML = questions[0].answer4;
//     oLEl.appendChild(liEL4);
    
    
//     oLEl.addEventListener("click",function(event){
        
//         questionAnswer.innerHTML= questions[1].question;
//         questionAnswer.appendChild(oLEl);
//         oLEl.setAttribute("style", "list-style-type: none")
//         oLEl.innerHTML ="";
//         var liEL1 = document.createElement("li")
//         liEL1.innerHTML = questions[1].answer1;
//         oLEl.appendChild(liEL1);
//         var liEL2 = document.createElement("li")
//         liEL2.innerHTML = questions[1].answer2;
//         oLEl.appendChild(liEL2);
//         var liEL3 = document.createElement("li")
//         liEL3.innerHTML = questions[1].answer3;
//         oLEl.appendChild(liEL3);
//         var liEL4 = document.createElement("li")
//         liEL4.innerHTML = questions[1].answer4;
//         oLEl.appendChild(liEL4);


//         oLEl.addEventListener("click",function(event){
           
//             questionAnswer.innerHTML= questions[2].question;
//             questionAnswer.appendChild(oLEl);
//             oLEl.setAttribute("style", "list-style-type: none")
//             oLEl.innerHTML ="";
//             var liEL1 = document.createElement("li")
//             liEL1.innerHTML = questions[2].answer1;
//             oLEl.appendChild(liEL1);
//             var liEL2 = document.createElement("li")
//             liEL2.innerHTML = questions[2].answer2;
//             oLEl.appendChild(liEL2);
//             var liEL3 = document.createElement("li")
//             liEL3.innerHTML = questions[2].answer3;
//             oLEl.appendChild(liEL3);
//             var liEL4 = document.createElement("li")
//             liEL4.innerHTML = questions[2].answer4;
//             oLEl.appendChild(liEL4);

    
//          });
        
         
//     });


// });

  
// if (event.target.innerHTML === questions[0].correct){
//     var h5El = document.createElement("h5");
//     h5El.innerHTML ="Correct";
//     questionAnswer.appendChild(h5El);
//    }else {
//     var h5El = document.createElement("h5");
//     h5El.innerHTML ="Incorrect";
//     questionAnswer.appendChild(h5El);
//    }


