let quizCap;
let quizNum;
localStorage.setItem("quizNum", 5);
window.onload = function(){
    quizCap = document.getElementById("quizNumCaption");
    quizNum = document.getElementById("quizNum").value;
}

function quizNumChange(){
    quizNum = document.getElementById("quizNum").value;
    if(quizNum == 11){ 
        quizCap.innerHTML = "전부!";
    }else{
        quizCap.innerHTML = String(quizNum) + "개";
    }
    localStorage.setItem("quizNum", quizNum);
}