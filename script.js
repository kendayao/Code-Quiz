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
        answer2: "<button>b.curly brackets</button>",
        answer3: "<button>c. parentheses</button>",
        answer4: "<button>d.square brackets</button>",
        correct: "b. parenetheses",
    },

        {question: "<h3>Arrays in Javascript can be used to store ___</h3>",
        answer1: "<button>a. numbers and strings</button>",
        answer2: "<button>b. other arrays</button>",
        answer3: "<button>c. booleans</button>",
        answer4: "<button>d. all of the above</button>",
        correct: "d. all of the above",
    }]

    var timer = 75;
    var questionAnswer=document.body.querySelector("#question-container");
    var startButton=document.body.querySelector(".start-button");

  startButton.addEventListener("click", function(){

    setInterval(function(){
        timer--;
        document.body.querySelector("#timeclock").textContent= timer;
    }, 1000);
    
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
    
    oLEl.addEventListener("click",function(){
        questionAnswer.innerHTML= "";
        questionAnswer.innerHTML= questions[1].question;
        
        questionAnswer.appendChild(oLEl);
        oLEl.setAttribute("style", "list-style-type: none")
        oLEl.innerHTML ="";
        var liEL1 = document.createElement("li")
        liEL1.innerHTML = questions[1].answer1;
        oLEl. appendChild(liEL1);
        var liEL2 = document.createElement("li")
        liEL2.innerHTML = questions[1].answer2;
        oLEl. appendChild(liEL2);
        var liEL3 = document.createElement("li")
        liEL3.innerHTML = questions[1].answer3;
        oLEl. appendChild(liEL3);
        var liEL4 = document.createElement("li")
        liEL4.innerHTML = questions[1].answer4;
        oLEl. appendChild(liEL4);

        oLEl.addEventListener("click",function(){
            questionAnswer.innerHTML= "";
            questionAnswer.innerHTML= questions[2].question;
            
            questionAnswer.appendChild(oLEl);
            oLEl.setAttribute("style", "list-style-type: none")
            oLEl.innerHTML ="";
            var liEL1 = document.createElement("li")
            liEL1.innerHTML = questions[2].answer1;
            oLEl. appendChild(liEL1);
            var liEL2 = document.createElement("li")
            liEL2.innerHTML = questions[2].answer2;
            oLEl. appendChild(liEL2);
            var liEL3 = document.createElement("li")
            liEL3.innerHTML = questions[2].answer3;
            oLEl. appendChild(liEL3);
            var liEL4 = document.createElement("li")
            liEL4.innerHTML = questions[2].answer4;
            oLEl. appendChild(liEL4);
        });
    });
});


