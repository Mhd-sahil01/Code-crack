import { randomQuotes } from "./data.js";

//random facts on the main page
let randomNum = Math.floor(Math.random() * 6);
window.addEventListener('load', function () {
    let footerText = document.querySelector(".footer-text");
    footerText.innerHTML = `<marquee>${randomQuotes[randomNum]}</marquee>`;
});

//wrap in a function
export function mainFunction(list) {
    let gameStart = false;
    let questionNum = 0;
    let score = 0;

    // load the game
    window.addEventListener("load", function () {
        if (gameStart === false) {
            gameStart = true;

            displayQuest(list)
        }
    });

    let question = document.querySelector(".question");
    let options = document.querySelector(".options");
    let goBackBtn = document.querySelector(".goBackBtn"); //go back button

    //display the questions and options
    function displayQuest() {
        if (questionNum < list.length) {
            goBackBtn.classList.add("display");
            question.innerHTML = `<h5>${list[questionNum].question}</h5>`
            options.innerHTML = `<ul>
                    <button class="opt1 btn"><li>${list[questionNum].options[0]}</li></button>
                    <button class="opt2 btn"><li>${list[questionNum].options[1]}</li></button>
                    <button class="opt3 btn"><li>${list[questionNum].options[2]}</li></button>
                    <button class="opt4 btn"><li>${list[questionNum].options[3]}</li></button>
                </ul>`

            //on clicking on the button
            let allBtn = document.querySelectorAll(".btn");
            for (const btn of allBtn) {
                btn.addEventListener("click", function () {
                    let answer = btn.innerHTML;
                    answer = answer.replace(/<\/?li>/g, "");
                    checkAnswer(answer, btn);
                })
            }

            //match the answer with the original answer
            function checkAnswer(answer, btn) {
                if (answer == list[questionNum].answer) {
                    console.log("corret");
                    greenFlash(btn);
                    nextQuestionTrue();
                } else {
                    console.log("wrong");
                    redFlash(btn);
                    nextQuestionFalse();
                }
            }
        } else {
            goBackBtn.classList.remove("display");
        }

        //green flash for correct answer
        function greenFlash(btn) {
            btn.classList.add("green");
            setTimeout(() => {
                btn.classList.remove("green");
            }, 500);
        }

        // red flash for wrong answer
        function redFlash(btn) {
            btn.classList.add("red");
            let correctAns = document.querySelector(".correct-ans");
            correctAns.classList.add("correctFlash");
            correctAns.innerHTML = `<b>correct answer: &nbsp;</b> ${list[questionNum].answer}`
            setTimeout(() => {
                btn.classList.remove("red");
                correctAns.innerHTML = "";
                correctAns.classList.remove("correctFlash");
            }, 500);
        }

        //move to the next question (if true)
        function nextQuestionTrue() {
            setTimeout(() => {
                score++;
                questionNum++;
                displayQuest(list);
            }, 1000);
        }

        //move to the next question (if false)
        function nextQuestionFalse() {
            setTimeout(() => {
                questionNum++;
                displayQuest(list);
            }, 1000);
        }

        //update the score
        let showScore = document.querySelector(".show-score");
        showScore.innerHTML = `your score is ${score} <i class="fa-solid fa-trophy" style="color: #FFD700; font-size: 1rem;"></i>`

    }
}