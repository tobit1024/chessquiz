const Question = {
    opening : ["Caro-Kann Defence", "Dutch Defence", "French Defence", "Italian Game", "King's Gambit", "London System", "Queen's Gambit", "Ruy-Lopez Opening", "Scandinavian Defence", "Scotch Game", "Sicilian Defence", "Vienna Game"],
    piece : ["bishop", "rook", "knight", "king", "queen", "pawn"],
    noob : ["among us","battle ground","dance of fire and ice","getting over it","grand theft auto","portal","stardew valley","tekken","terraria","yu gi oh master duel"],
    easy : ["binding of isaac","cookie clicker","counter strike","cuphead","dead by daylight","don't starve","dungreed","hand simulator","lethal company","project zomboid","rainbow six siege","rhythm doctor","spore","the forest"],
    normal : ["apex legend","astroneer","garry mod","goose goose duck","hollow knight","human fall flat","inscyption","monster hunter","pico park","raft"],
    hard : ["ark survival","baba is you","forager","house flipper","it takes two","poppy playtime","power wash simulator","scp secret laboratory","slay the spire","slime launcher","subnautica"],
    expert : ["cult of the lamb","escape simulator","lobotomy corporation","loop hero","melatonin","omori","oxygen not included","potion craft","prepassout","ultimate chicken hoprse","we were here"]
};
let quizName = localStorage.getItem("quizName");
//const quizName = location.href.split("/")[location.href.split("/").length - 1].split(".")[0];
const typename = {
    opening : ".jpeg",
    piece : ".png",
    noob : ".png",
    easy : ".png",
    normal : ".png",
    hard : ".png",
    expert : ".png"
};
let QQuiz = Question[quizName].slice();
let doSolve = true;
let T = 0;
let F = 0;


function Quiz() {
    A = document.getElementsByClassName("A");
    cloneQuiz = QQuiz.slice();
    var randNum = Math.floor(Math.random() * cloneQuiz.length);
    correct = Math.floor(Math.random() * 4);
    front.src = back.src;
    back.src = "../images/"+quizName+"/"+cloneQuiz[randNum]+typename[quizName];
    A[correct].innerHTML = cloneQuiz[randNum];
    QQuiz.splice(randNum,1);
    cloneQuiz = Question[quizName].slice();
    for (i = 0;i<cloneQuiz.length;i++){
        if(cloneQuiz[i] == A[correct].innerHTML){
            cloneQuiz.splice(i,1);
            break;
        }
    }
    for (i = 0;i < 4;i++){
        if (i != correct){
            randNum = Math.floor(Math.random() * (cloneQuiz.length - i));
            A[i].innerHTML = cloneQuiz[randNum];
            cloneQuiz.splice(randNum,1);
        }
    }
    doSolve = true;
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
    let Question_str = document.getElementById("question");
    if (quizName == "noob" || quizName == "easy" || quizName == "normal" || quizName == "hard" || quizName == "expert"){
        Question_str.innerHTML = "What game is this?"   
    }else{
        Question_str.innerHTML = "What "+quizName+" is this?"
    }
    back = document.getElementById("back");
    front = document.getElementById("front");
    imgCase = document.getElementById("imgCase");
    A = document.getElementsByClassName("A");
    Qboard = document.getElementById("Qboard");
    Quiz();
}
function answer(k){
    if (doSolve){
        doSolve = false;
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
            var correctNum = String(T);
            setTimeout(() => {
                A[k-1].style.backgroundColor = "transparent";
            }, 500);
            setTimeout(() => {
                localStorage.setItem("quizName", quizName);
                localStorage.setItem("correctNum", correctNum);
                location.href = "../html/end.html";
            }, 1000);
        }
        else{
            setTimeout(() => {
                A[k-1].style.backgroundColor = "transparent";
            }, 500);
            setTimeout(() => {
                Quiz();
            }, 1000);
        }
    }
}