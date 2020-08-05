window.onload = function () {
  // window.location.assign("https://www.w3schools.com")
  clicked()
// if(Qno > 1){
//   location.replace("https://www.w3schools.com")
// }


};

function start(){
  clicked()
  alert("Start")
}

var QScreen = document.getElementById("Question-screen");
var question = document.getElementById("question");
var list = document.getElementById("ul");
var score = 0;

var Questions = [
  {
    id: 1,
    question: " 2 + 2 = ?",
    answer: 4,
    option: ["2", "6", "9", "4"],
  },
  {
    id: 2,
    question: "2 + 7 = ?",
    answer: 9,
    option: ["9", "4", "6", "2"],
  },
  {
    id: 3,
    question: " 4 + 2 = ? ",
    answer: 6,
    option: ["6", "9", "4", "2"],
  },
  {
    id: 4,
    question: " 3 + 2 = ? ",
    answer: 5,
    option: ["3", "4", "5", "0"],
  },
];



var Qno = -1;
function clicked() {
  Qno++;
  
  question.innerHTML = Questions[Qno].question;
  ans1.innerHTML = Questions[Qno].option[0];
  ans2.innerHTML = Questions[Qno].option[1];
  ans3.innerHTML = Questions[Qno].option[2];
  ans4.innerHTML = Questions[Qno].option[3];
  
  ans1.setAttribute("Value",Questions[Qno].option[0])
  ans2.setAttribute("Value",Questions[Qno].option[1])
  ans3.setAttribute("Value",Questions[Qno].option[2])
  ans4.setAttribute("Value",Questions[Qno].option[3])
  
  
  
  var Qinfo = document.getElementById("Qno")
  Qinfo.innerHTML = "Question Number : " +  (Qno+1) + "/" + Questions.length;
}

var ans1 = document.createElement("li");
var ans2 = document.createElement("li");
var ans3 = document.createElement("li");
var ans4 = document.createElement("li");

list.appendChild(ans1);
list.appendChild(ans2);
list.appendChild(ans3);
list.appendChild(ans4);












ans1.setAttribute("onCLick","ook(this)")
ans2.setAttribute("onCLick","ook(this)")
ans3.setAttribute("onCLick","ook(this)")
ans4.setAttribute("onCLick","ook(this)")



function ook(e){
  var resultScreen = document.createElement("div");
  var tquest = document.createTextNode("Total Questions : " + Questions.length)
  
  var tdiv = document.createElement("p");
    var tdivt = document.createTextNode( "Score : " + ((Questions.length*10) + "%" ) + " out of " + (score*10) + "%");
    var tques = document.createElement("p")
    var canst = document.createTextNode("Right Answers : " + score)
    var cans = document.createElement("p")  
    var wans = document.createElement("p")
    var wanst = document.createTextNode("Wrong Attempts : " + ( Questions.length - score))
    var tryAgain = document.createElement("a")
    var tryAgaint = document.createTextNode("Try Again")
    console.log( "Question.length : " + Questions.length)
    
    tryAgain.appendChild(tryAgaint)
    tques.appendChild(tquest)
    wans.appendChild(wanst)
    tdiv.appendChild(tdivt);
    resultScreen.appendChild(tques);
    resultScreen.appendChild(wans);
    resultScreen.appendChild(tdiv);
    
    cans.appendChild(canst)
    resultScreen.appendChild(cans);
    console.log( "score : " + (score*10) + "%")
    
    resultScreen.appendChild(tryAgain)
    tryAgain.setAttribute("href","index.html")

  var b = e.getAttribute("value")
  if(b == Questions[Qno].answer){
    
    // changes required when you add question ------------------------------------------
    if (Qno < 3) {
      clicked()
      // changes required when you add question ------------------------------------------
    }else if (Qno >= 3) {
      QScreen.innerHTML = "";
      QScreen.appendChild(resultScreen)
    }
    
    ++score
    
    
    
    
    
    
    
  }else{
    // changes required when you add question ------------------------------------------
    if (Qno < 3) {
      clicked()
      // changes required when you add question ------------------------------------------
    }else if (Qno >= 3) {
      QScreen.innerHTML = "";
      QScreen.appendChild(resultScreen)
    }
  }
  
  
}







