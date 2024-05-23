const Question = ["bishop", "rook", "knight", "king", "queen", "pawn"];
let QQuiz = Question.slice();
let imgCase;
let back;
let front;
let A;
let correct;
let T = 0;
let F = 0;


function Quiz() {
    A = document.getElementsByClassName("A");
    cloneQuiz = QQuiz.slice();
    var randNum = Math.floor(Math.random() * QQuiz.length);
    correct = Math.floor(Math.random() * 4);
    front.src = back.src;
    back.src = "../images/chess/opening/"+cloneQuiz[randNum]+".jpeg";
    A[correct].innerHTML = cloneQuiz[randNum];
    cloneQuiz.splice(randNum,1);
    QQuiz.splice(randNum,1);
    for (i = 0;i < 4;i++){
        if (i == correct){
            continue;
        }
        else{
            randNum = Math.floor(Math.random() * (QQuiz.length - i - 1));
            A[i].innerHTML = cloneQuiz[randNum];
            cloneQuiz.splice(randNum,1);
        }
    }
    nextquiz();
}
let nextquiz_ani = [
    {transform: "rotatey(0deg)"},
    {transform: "rotatey(180deg)"}
];
let nextquiz_ani_options = {
    duration: 800,
    easing: "ease-in-out",
    fill: "forwards"
};
function nextquiz(){
    imgCase.animate(nextquiz_ani,nextquiz_ani_options);
}

window.onload = function(){
    back = document.getElementById("back");
    front = document.getElementById("front");
    imgCase = document.getElementById("imgCase");
    A = document.getElementsByClassName("A");
    Quiz();
}
function answer(k){
    if (correct == k - 1){
        console.log("correct!");
        T++;
        A[k-1].style.backgroundColor = "rgb(200,255,200)";
    }
    else{
        console.log("incorrect...");
        F++;
        A[k-1].style.backgroundColor = "rgb(255,200,200)";
    }
    if (T + F == 5){
        setTimeout(() => {
            A[k-1].style.color = "black"
            A[k-1].style.backgroundColor = "transparent";
        }, 500);
        var data = {
            "correctNum" : String(T),
            "returnHtml" : location.href
        };
        setTimeout(() => {
            window.localStorage.clear();
            localStorage.setItem("data", JSON.stringify(data))
            location.href = "../html/end.html";
        }, 1000);
    }
    else{
        setTimeout(() => {
            A[k-1].style.color = "black"
            A[k-1].style.backgroundColor = "transparent";
        }, 500);
        setTimeout(() => {
            Quiz()
        }, 1000);
    }
}