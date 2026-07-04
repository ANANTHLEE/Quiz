


const quiz = [
    {
        question: "What is my fav thing in ME? ",
        answers: ["Smile", "Style", "Character", "Look"],
        correct: 2
    },
    {
        question: "What life style I like most?",
        answers: ["City", "Village", "Normal", "Rich"],
        correct: 3
    },
    {
        question: "What is my fav Food?",
        answers: [ "Biriyani", "Chicken Rice","Beef Rice","Nooddles"],
        correct: 1
    },
    {
        question: "Waht I like most?",
        answers: ["Nature","Animals","Birads","fishes" ],
        correct: 1
    },
    {
        question: "What make me happy ?",
        answers: [ "Your Voice", "Your Behaviour", "Your Thighs", "Your Smile"],
        correct: 3
    },
    {
        question: "What I can't control abt YOU?",
        answers: ["Hanger" , "Structure", "Smile", "Behaviour"],
        correct: 2
    },
    {
        question: "Which place I like most with YOU?",
        answers: ["Night", "Church", "Home", "Outing"],
        correct: 0
    },
    {
        question: "Which one I like to eat first?",
        answers: [ "Sweet", "Juice", "Hot", "Desert"],
        correct: 2
    },
    {
        question: "Where I like to build House?",
        answers: [ "Appartments", "City", "Secluded", "Village"],
        correct: 2
    },
    {
        question: "What I like to drive?",
        answers: [ "Bike", "Car", "Scooty", "Cycle"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const question = document.getElementById("question");
const buttons = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {

    answered = false;

    question.textContent = quiz[currentQuestion].question;

    buttons.forEach((button, index) => {

        button.textContent = quiz[currentQuestion].answers[index];

        button.disabled = false;

        button.style.background = "rgba(255,255,255,0.2)";
    });

}

buttons.forEach((button, index) => {

    button.addEventListener("click", function () {

        if (answered) return;

        answered = true;

        buttons.forEach(btn => btn.disabled = true);

        if (index === quiz[currentQuestion].correct) {

            button.style.background = "green";

            score++;

        } else {

            button.style.background = "red";

            buttons[quiz[currentQuestion].correct].style.background = "green";

        }

    });

});

nextBtn.addEventListener("click", function () {

    if (!answered) {

        alert("Please select an answer!");

        return;

    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {

        loadQuestion();

    } else {

        const wrong = quiz.length - score;

        document.querySelector(".quiz-box").innerHTML = `
            <div class="score-board">
                <h2>Quiz Completed!</h2>

                <h3>Your Score: ${score} / ${quiz.length}</h3>

                <p>Correct Answers: ${score}</p>

                <p> Wrong Answers: ${wrong}</p>

                <button id="continueBtn">Continue</button>
            </div>
        `;

       document.getElementById("continueBtn").addEventListener("click", startSurvey);

    }

});

loadQuestion();

// ================= SURVEY =================

const survey = [
    {
        question: "Which place do you like most?",
        answers: ["Canada","Germany","Switzerland","Jerusalem"]
    },
    {
        question: "What makes YOU fall with me recent days?",
        answers: ["Look","Charector","Smile","Kindness"]
    },
    {
        question: "What makes YOU happpy?",
        answers: ["Night Out","Food Date","Outing","Bike Ride"]
    },
    {
        question: "Where YOU want go  with ME?",
        answers: ["Iceland","World Trip","Night Out","Church"]
    },
    {
        question: "Why YOU love ME most?",
        answers: ["Kindness","Just For ME","For My Love","Behaviour"]
    },
    {
        question: "What is your fav Habby?",
        answers: ["Singing","Dancing","Play W Pets","Drawing"]
    },
    {
        question: "How was your day gone while met ME?",
        answers: ["GOOD","Unforgettable","Happy","Memory"]
    },
    {
        question: "What you love most?",
        answers: ["Animals","Brids","Fishes","Pets"]
    },
    {
        question: "How YOU imagine our marriage?",
        answers: ["Grant","Normal","Everyone Talk ABT","Like WE imagine"]
    },
    {
        question: "Where is our Honeymoon?",
        answers: ["Other country","Ooty","Iceland","Our new Home"]
    }
];

let surveyIndex = 0;
let surveyAnswers = [];
let selectedOption = -1;

function startSurvey(){

    document.querySelector(".quiz-box").innerHTML = `

    <h1 class="survey-title">Let Me Know ❤️</h1>

    <div id="surveyQuestion"></div>

    <div id="surveyAnswers">
        <button class="surveyBtn"></button>
        <button class="surveyBtn"></button>
        <button class="surveyBtn"></button>
        <button class="surveyBtn"></button>

        <input
            type="text"
            id="otherAnswer"
            placeholder=" Because..."
        >
    </div>

    <button id="surveyNext">Next</button>

`;
    loadSurvey();

}


document.getElementById("otherAnswer").value = "";

document.getElementById("otherAnswer").oninput = function(){

    selectedOption = -1;

    surveyBtns.forEach(btn=>{
        btn.style.background="rgba(255,255,255,.2)";
    });

};

function loadSurvey(){

    selectedOption = -1;

    document.getElementById("surveyQuestion").innerHTML =
        survey[surveyIndex].question;

    const surveyBtns = document.querySelectorAll(".surveyBtn");

    surveyBtns.forEach((btn,index)=>{

        btn.innerHTML = survey[surveyIndex].answers[index];

        btn.style.background = "rgba(255,255,255,.2)";

        btn.onclick = function(){

            selectedOption = index;

            surveyBtns.forEach(b=>{
                b.style.background="rgba(255,255,255,.2)";
            });

            btn.style.background="green";

        };

    });
    document.getElementById("otherAnswer").value = "";

    document.getElementById("surveyNext").onclick = nextSurvey;

}
function nextSurvey() {

    const otherInput = document.getElementById("otherAnswer").value.trim();

    // User typed a custom answer
  let answer = "";

if (selectedOption !== -1) {
    answer = survey[surveyIndex].answers[selectedOption];
}

if (otherInput !== "") {

    if (answer !== "") {
        answer += "<br><strong>Other:</strong> " + otherInput;
    } else {
        answer = otherInput;
    }

}

if (answer === "") {

    alert("Please choose an option or type!");

    return;

}

surveyAnswers.push(answer);

surveyIndex++;

if (surveyIndex < survey.length) {

    loadSurvey();

} 
    else {

        let html = `
        <div class="survey-result">

            <h2>❤️Thank You❤️</h2>
        `;

        surveyAnswers.forEach((ans, i) => {

            html += `
                <div class="result-card">
                    <span class="question-no">Q${i + 1}</span>
                    <span class="answer">${ans}</span>
                </div>
            `;

        });

        html += `
            <button id="playAgainBtn" onclick="location.reload()">
                Play Again
            </button>
        </div>
        `;

        document.querySelector(".quiz-box").innerHTML = html;

    }

}