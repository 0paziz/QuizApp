const NerdQuiz = [
    {
      question: "Who developed the theory of general relativity?",
      options: [
        { text: "A) Isaac Newton", correct: false },
        { text: "B) Abdiaziz Einstein", correct: true },
        { text: "C) Nikola Tesla", correct: false },
        { text: "D) Stephen Hawking", correct: false }
      ]
    },
    {
      question: "What is the capital of France?",
      options: [
        { text: "A) Paris", correct: true },
        { text: "B) London", correct: false },
        { text: "C) Rome", correct: false },
        { text: "D) Berlin", correct: false }
      ]
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        { text: "A) Vincent van Gogh", correct: false },
        { text: "B) Pablo Picasso", correct: false },
        { text: "C) Leonardo da Aziz", correct: true },
        { text: "D) Claude Monet", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for water?",
      options: [
        { text: "A) H2O", correct: true },
        { text: "B) O2", correct: false },
        { text: "C) CO2", correct: false },
        { text: "D) NaCl", correct: false }
      ]
    },
    {
      question: "Who discovered gravity?",
      options: [
        { text: "A) Galileo Galilei", correct: false },
        { text: "B) Aziz Newton", correct: true },
        { text: "C) Albert Einstein", correct: false },
        { text: "D) Johannes Kepler", correct: false }
      ]
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: [
        { text: "A) Gold", correct: false },
        { text: "B) Iron", correct: false },
        { text: "C) Diamond", correct: true },
        { text: "D) Silver", correct: false }
      ]
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        { text: "A) Charles Dickens", correct: false },
        { text: "B) J.K. Rowling", correct: false },
        { text: "C) Abdiaziz ):", correct: true },
        { text: "D) Mark Twain", correct: false }
      ]
    },
    {
      question: "What is the largest planet in our solar system?",
      options: [
        { text: "A) Earth", correct: false },
        { text: "B) Jupiter", correct: true },
        { text: "c) Saturn", correct: false },
        { text: "D) Mars", correct: false }
      ]
    }
  ];
  

  
  


const landingPage=document.getElementById("landing");
const   Quizarticle= document.getElementById("Quiz-article")
const TrickyQuizbtn= document.getElementById("TrickyQuizbtn");
const NerdQuizbtn= document.getElementById("NerdQuizbtn");

const currentNoQ= document.getElementById("current-q")
const questionID=document.getElementById("Quiz-question");
const answercontainer= document.getElementById("answer-options");
const Next= document.getElementById("Sumbit");



TrickyQuizbtn.addEventListener("click", ()=>{
    landingPage.style.display="none"
    document.querySelector(".underDevelopment").style.display="block";

});

NerdQuizbtn.addEventListener("click", ()=>{
      landingPage.style.display="none"
      NerdyQuiz();
})



function NerdyQuiz(){
  
  Quizarticle.style.display="block"
  return
}

let CurrentQuestionIndex=0;
let score=0;


function StartQuiz(){
    CurrentQuestionIndex=0;
    score=0;
    ShowQuestion();
}



function ShowQuestion(){
    reState();
    let CurrentQuestion= NerdQuiz[CurrentQuestionIndex];
    let questionNo=CurrentQuestionIndex +1;
    questionID.innerHTML= questionNo + "." +" "+ CurrentQuestion.question;
    currentNoQ.textContent=questionNo;
    CurrentQuestion.options.forEach(option =>{
        const button= document.createElement("button");
        button.innerHTML= option.text;
        button.classList.add("options");
        answercontainer.appendChild(button);
        if(option.correct){
            button.dataset.correct=option.correct;
        }

        button.addEventListener("click", slectedOption)

    });




}

function slectedOption(e){
    const Slectedbtn= e.target;
    const Iscorrect= Slectedbtn.dataset.correct==="true";
if(Iscorrect){
    Slectedbtn.classList.add("correct");
    score++;
} else{  Slectedbtn.classList.add("invalid");}

Array.from(answercontainer.children).forEach(button=>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled=true;
    
});
Next.style.display="block";
}

function showScore(){
  reState();
  questionID.innerHTML=`You Scored:${score} out of ${NerdQuiz.length}`
  Next.innerHTML="play again"
  Next.style.display="block";
}

function handleNextbtn(){
    CurrentQuestionIndex++;
    if(CurrentQuestionIndex < NerdQuiz.length){
        ShowQuestion();
    }
    else{
        showScore();
    }
}

Next.addEventListener("click",()=>{
    if(CurrentQuestionIndex < NerdQuiz.length){
        handleNextbtn();
    }
    else{
        StartQuiz();
    }
})

function reState(){
    Next.style.display="none";
    while(answercontainer.firstChild){
        answercontainer.removeChild(answercontainer.firstChild);
    }
}

StartQuiz();

