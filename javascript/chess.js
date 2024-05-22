const Quiz = ["Caro-Kann Defence", "Dutch Defence", "French Defence", "Italian Game", "King's Gambit", "London System", "Queen's Gambit", "Ruy-Lopez Opening", "Scandinavian Defence", "Scotch Game", "Sicilian Defence", "Vienna Game"]

let chessboard;
let backboard;
let frontboard;
let A;
let correct;
// function ChessQuiz() {
//     A = document.getElementsByClassName("A");
//     for (i = 0;i<Quiz.length;i++){nums[i]=i;}
//     var randNum = Math.floor(Math.random() * (Quiz.length - 1));
//     var openingName = Quiz[nums[randNum]];
//     console.log(randNum);
//     console.log(nums[randNum]);
//     frontboard.src = backboard.src;
//     backboard.src = "../images/chess/"+Quiz[nums[randNum]]+".jpeg";
//     correct = Math.floor(Math.random() * 4);
//     A[correct].innerHTML = openingName;
//     nums.splice(randNum,1);
//     for(i = 0; i < 4;i++){
//         var randNums = Math.floor(Math.random() * Quiz.length - i - 1);
//         if (i == correct){
//             nums.splice(randNums,1);
//             continue;
//         }
//         A[i].innerHTML = Quiz[nums[randNums]];
//         console.log(nums[randNums]);
//         nums.splice(nums[randNums],1);
//         turning();
//     }
// }
function ChessQuiz() {
    A = document.getElementsByClassName("A");
    cloneQuiz = Quiz.slice();
    var randNum = Math.floor(Math.random() * Quiz.length);
    correct = Math.floor(Math.random() * 4);
    frontboard.src = backboard.src;
    backboard.src = "../images/chess/"+cloneQuiz[randNum]+".jpeg";
    A[correct].innerHTML = cloneQuiz[randNum]
    cloneQuiz.splice(randNum,1);
    for (i = 0;i < 4;i++){
        if (i == correct){
            continue;
        }
        else{
            randNum = Math.floor(Math.random() * (Quiz.length - i - 1));
            A[i].innerHTML = cloneQuiz[randNum];
            cloneQuiz.splice(randNum,1);
        }
    }
    turning();
}
let nextquiz = [
    {transform: "rotatey(0deg)"},
    {transform: "rotatey(180deg)"}
];
let nextquiz_options = {
    duration: 1000,
    easing: "ease-in",
    fill: "forwards"
};
function turning(){
    chessboard.animate(nextquiz,nextquiz_options);
}

window.onload = function(){
    backboard = document.getElementById("back");
    frontboard = document.getElementById("front");
    chessboard = document.getElementById("chessboardCase");
    A = document.getElementsByClassName("A");
    ChessQuiz();
}
function answer(A){
    if (correct == A - 1){
        console.log("correct!");
    }
    else{
        console.log("incorrect...");
    }
    ChessQuiz();
}

// function turnBoard(){
//     if (deg >= 360){deg = 0}
//     turn = setInterval(turning, 1000/60);
// }
// function turning(){
//     chessboard.style.transform = "rotateY("+deg+")"
//     deg++;
//     if (deg % 180 == 0){
//         clearInterval(turn)
//     }
// }