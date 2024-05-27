let quizName = localStorage.getItem("quizName");
let correctNum = localStorage.getItem("correctNum");
let star = "⭐"
let unstar = "☆"

window.onload = function(){
    for (let i = 0 ; i < 5 ; i++){
        if (i < correctNum){
            document.getElementById("star").innerHTML += star;
        }
        else{
            document.getElementById("star").innerHTML += unstar;
        }
    }
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