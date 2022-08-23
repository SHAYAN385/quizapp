var question = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language"
        ]
      },
        {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet"
        ]
      },
        {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
          "Hypertext Preprocessor",
          "Hypertext Programming",
          "Hypertext Preprogramming",
          "Hometext Preprocessor"
        ]
      },
        {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language"
        ]
      },
        {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
          "eXtensible Markup Language",
          "eXecutable Multiple Language",
          "eXTra Multi-Program Language",
          "eXamine Multiple Language"
        ]
      },
      // you can uncomment the below codes and make duplicate as more as you want to add question
      // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
    
      //   {
      //   numb: 6,
      //   question: "Your Question is Here",
      //   answer: "Correct answer of the question is here",
      //   options: [
      //     "Option 1",
      //     "option 2",
      //     "option 3",
      //     "option 4"
      //   ]
      // },
    ];
var question = document.getElementById("question");
var currentQuestion = document.getElementById("currentQuestion");
var totalQuestions = document.getElementById("totalQuestions");
var answerParent = document.getElementById("answerParent");
var indexNumber = 0;
var score = 0;

function startQuiz() {
question.innerHTML = question[indexNumber].question;
answerParent.innerHTML = "";
for (var i = 0; i < question[indexNumber].question.length; i++) {
    answerParent.innerHTML += `<div class="col-md-6 py-2">
        <button onclick="checkQuestion(this,${questions[indexNumber].correctAnswer}')" class="btn w-100 btn"></button>
    </div>`;
    
}
  totalQuestions.innerHTML = question.length;
  currentQuestion.innerHTML = indexNumber + 1;  
}
 startQuiz();

 function nextQuestion() {
    if (indexNumber = question.length - 1){
        alert=("Quiz Completed ");
    } else {
        indexNumber = indexNumber + 1;
        startQuiz();
    }
 }

 function checkQuestion(elem , correctOption) {
    var userOption = elem.innerHTML;
    if (userOption == correctOption){
        score = score + 1;
    }
    console.log(score);
    var allOptionBtns = answerParent.getElementsByTagName("BUTTON");
    for (i = 0; i < allOptionBtns.length; i++) {
        allOptionBtns[i].disabled = true;
        if (allOptionBtns[i].innerHTML == correctOption){
            allOptionBtns[i].className += "bg-success";

        }else {
            allOptionBtns[i].className += " bg-Danger";
        }
        
    }
 };