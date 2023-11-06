let question = document.getElementById("question");
let answersButton = document.getElementById("answer-buttons");

let arr = ["Who is the larget mammal", "Name of the largest cricket stadium", "2", "3"];
let ans = [["Elephant", "girraf", "blue whale", "Rahino"], ["naredra modi stadium", "facher stadium", "7", "8"], ["9", "10", "11", "12"], ["13", "14", "15", "16"]];

var conut = 0;
var target = 1;
function nextQuestion() {
    for (var index = 0; index < target; index++) {
        for (let k = 0; k < 4; k++) {
            answersButton.children[k].innerText = ans[index][k];
            // answersButton.children[index].innerText
            // console.log(ans[index][k]);
        }
    }
    target++;
    question.innerText = arr[conut];
    conut++;
    
    dhmaka();

}
var hasi ;
answersButton.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        console.log(e.target);
        hasi = e.target;
        e.target.style.backgroundColor = "red";
        answersButton.children[3].style.backgroundColor = "green";
        answersButton.style.pointerEvents = "none";
    }
    document.getElementById("next-btn").style.display = "block";
});


function dhmaka(){
        hasi.style.backgroundColor = "white";
        // e.target.style.backgroundColor = "white";
        answersButton.children[3].style.backgroundColor = "white";
        answersButton.style.pointerEvents = "all";

    document.getElementById("next-btn").style.display = "none";
}
