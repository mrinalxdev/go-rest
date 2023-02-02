const quizData = [
    {
        question : "",
        a : "",
        b : "", 
        c : "",
        correct : ""
    }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question') 
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text') 
const c_text = document.getElementById('c_text')
const submitEl = document.getElementById('submit')

let currentQuiz = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
    console.log(currentQuizData)
    quiestionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c

}

