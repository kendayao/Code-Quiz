var questions = [
    {   question: "<h3>Commonly used data types DO NOT include:</h3>",
        answer1: "<button>a. strings</button>",
        answer2: "<button>b. booleans</button>",
        answer3: "<button>c. alerts</button>",
        answer4: "<button>d. numbers</button>",
        correct: "c. alerts"
    },

      {question: "<h3>he condition in an if/else statement is enclosed within ___.",
        answer1: "a. quotes",
        answer2: "b. curly brackets",
        answer3: "c. parentheses",
        answer4: "d. square brackets",
        correct: "b. parenetheses",
    },

        {question: "Arrays in Javascript can be used to store ___",
        answer1: "a. numbers and strings",
        answer2: "b. other arrays",
        answer3: "c. booleans",
        answer4: "d. all of the above",
        correct: "d. all of the above",
    }]


    var questionAnswer=document.body.querySelector("#question-container");
    var startButton=document.body.querySelector(".start-button");

  startButton.addEventListener("click", function(){
    
    questionAnswer.innerHTML= questions[0].question;
    var oLEl = document.createElement("ol");
    questionAnswer.appendChild(oLEl);
    oLEl.setAttribute("style", "list-style-type: none")
    var liEL1 = document.createElement("li")
    liEL1.innerHTML = questions[0].answer1;
    oLEl. appendChild(liEL1);
    var liEL2 = document.createElement("li")
    liEL2.innerHTML = questions[0].answer2;
    oLEl. appendChild(liEL2);
    var liEL3 = document.createElement("li")
    liEL3.innerHTML = questions[0].answer3;
    oLEl. appendChild(liEL3);
    var liEL4 = document.createElement("li")
    liEL4.innerHTML = questions[0].answer4;
    oLEl. appendChild(liEL4);
    
    
   
    oLEl.addEventListener("click",function(event){
        questionAnswer.innerHTML= questions[1].question;
         

    })




    // questionAnswer.innerHTML= questions[0].answer1;
    // questionAnswer.innerHTML=questions[0].answer2;
    // questionAnswer.innerHTML=questions[0].answer3;
    // questionAnswer.innerHTML=questions[0].answer4;


  });
