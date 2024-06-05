let quizName = localStorage.getItem("quizName");
let correctNum = localStorage.getItem("correctNum");
let quizNum = localStorage.getItem("quizNum")

window.onload = function(){
    document.getElementById("score").innerHTML = "정답률 : "+String(Math.floor(correctNum/quizNum*10000)/100) + "%";
}

function retry(){
    location.href = "./quiz.html";
}
// console.log(datas)
// for (let i = 0 ; i < window.localStorage.length ; i++){
//     var key = window.localStorage.key(i);
//     var value = window.localStorage.getItem(key);
//     console.log(key, value);
//     console.log(datas["correctNum"]);
// }
// let scoreData;
// scoreData = window.localStorage.getItem("correctNum");
// console.log(scoreData)