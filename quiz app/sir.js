const questions = [{

    question: "Which is larget animal in the world?",
    answers: [
        { text: "Blue whale", correct: true },
        { text: "Shark", correct: false },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },]
},
{
    question: "Which is the smallest country in the world?",
    answers: [
        { text: "Bhutan", correct: false },
        { text: "Vatican City", correct: true },
        { text: "Nepal", correct: false },
        { text: "Shri Lanka", correct: false }
    ]
}, {
    question: "Which is smallest state in the india?",
    answers: [
        { text: "rajasthan", correct: false },
        { text: "facher", correct: false },
        { text: "Goa", correct: true },
        { text: "unkhriya", correct: false },]
}, {
    question: "Which is smallest bird in the world?",
    answers: [
        { text: "hen", correct: false },
        { text: "peacock", correct: false },
        { text: "peagon", correct: false },
        { text: "humming", correct: true },]
}

]


const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");




var saver;
var saver2;
var hasi = 1;
var index = 0;
answersButton.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        saver = e.target;
        e.target.style.backgroundColor = "red";
        for (index; index < hasi; index++) {
            for (let k = 0; k < 4; k++) {
                if (questions[index].answers[k].correct === true) {
                    answersButton.children[k].style.backgroundColor = "green";
                    saver2 = answersButton.children[k];

                }
            }

        }

        answersButton.style.pointerEvents = "none";
        document.getElementById("next-btn").style.display = "block";
    }

});


function nextQuestion() {
    for (let i = 0; i < hasi; i++) {
        questionElement.innerText = questions[i].question;
    }
    answersButton.style.pointerEvents = "auto";
    document.getElementById("next-btn").style.display = "none";
    saver.style.backgroundColor = "white";
    saver2.style.backgroundColor = "white";
    console.log(index-1);
    // hasi++;
    console.log(hasi);
    let kalu = index-1;
    console.log(kalu);
    for (kalu; kalu< hasi; kalu++) {
        for (let k = 0; k < 4; k++) {
            console.log(answersButton.children[k].innerText); 
            answersButton.children[k].innerText = questions[index].answers[k].text;
            console.log(questions[index].answers[k].text);
            console.log("cool");
        }
    }
    hasi++;
}