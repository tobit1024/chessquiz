let quizName = sessionStorage.getItem("quizName");
let correctNum = sessionStorage.getItem("correctNum");
let quizNum = sessionStorage.getItem("quizNum")

window.onload = function(){
    document.getElementById("score").innerHTML = "정답률 : "+String(Math.floor(correctNum/quizNum*10000)/100) + "%";
}

function retry(){
    location.href = "./quiz.html";
}
// console.log(datas)
// for (let i = 0 ; i < window.sessionStorage.length ; i++){
//     var key = window.sessionStorage.key(i);
//     var value = window.sessionStorage.getItem(key);
//     console.log(key, value);
//     console.log(datas["correctNum"]);
// }
// let scoreData;
// scoreData = window.sessionStorage.getItem("correctNum");
// console.log(scoreData)