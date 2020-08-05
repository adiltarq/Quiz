var main = document.getElementById("main")
///////////////////////// start page ////////////////////////////
start()

function start() {
    var intro = document.createElement("h1")
    var introt = document.createTextNode("Quiz")
    var intro1 = document.createElement("ol")
    var intro1LI = document.createElement("li")
    var intro1LI1 = document.createElement("li")
    var cump = document.createElement("h3")
    var cumpt = document.createTextNode("NOTE ! All Questions Are Cumpolsury if you don't attemp any question result will not be appear")
    var introLIt = document.createTextNode("You Have 5 Questions")
    var introLIt1 = document.createTextNode("Each Question have 1 marks")
    var startQuiz = document.createElement("button")
    var startQuizt = document.createTextNode("START")

    main.appendChild(intro)
    intro.appendChild(introt)
    main.appendChild(intro1)
    intro1.appendChild(intro1LI)
    intro1.appendChild(intro1LI1)
    intro1LI.appendChild(introLIt)
    intro1LI1.appendChild(introLIt1)
    main.appendChild(cump)
    cump.appendChild(cumpt)
    main.appendChild(startQuiz)
    startQuiz.appendChild(startQuizt)
    startQuiz.setAttribute("onClick","lett()")
}

function lett() {
    // alert("ok")
    main.innerHTML = ""
    letStartQuiz();
}
///////////////////////// ------------ start page End ------------////////////////////////////


///////////////////////// Quiz page  ////////////////////////////

function letStartQuiz(){
  window.location.assign("Quizpage.html")
}


// ---------------------------------------------- question object ---------------------------------------------------
// var QuestionsObject = [
//     {
//       id: 1,
//       question: " 2 + 2 = ?",
//       answer: 4,
//       option: ["2", "6", "9", "4"],
//     },
//     {
//       id: 2,
//       question: "2 + 7 = ?",
//       answer: 4,
//       option: ["9", "4", "6", "2"],
//     },
//   ];

// // ---------------------------------------------- question object end---------------------------------------------------
// var Qno = 0;
// function QnoInc() {
//     // var inc = Qno++
//     Qno++
//     // return inc
//     // console.log(Qno)
// }


// function letStartQuiz() {
//     var Questions = document.createElement("h1")
//     var ques = QuestionsObject[Qno].question
//     var QuestionI = document.createTextNode(ques)
//     main.appendChild(Questions)
//     Questions.appendChild(QuestionI)
//     console.log(Qno)
    
// }

