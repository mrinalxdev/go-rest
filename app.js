const quizData = [
    {
        question : 'Which is the Most used languages in history ?',
        a : 'Talokans',
        b : 'Persian',
        c : 'Afganisese',
        d : 'Hindi',
        correct : 'd'
    }, 
    {
        question : 'What are the most used language in Programming ?',
        a : 'Java',
        b : 'Ruby', 
        c : 'Javascript', 
        d : 'Golang',
        correct : 'c'
    },
    {
        question : 'What are the most used tools in programming ?',
        a : 'Vs-Code',
        b : 'Open AI',
        c : 'Power Shell',
        d : 'CLI',
        correct : 'c'
    }, 
    {
        question : 'Who is the President of BCCI ?',
        a : 'Narendra Modi', 
        b : 'Saurav Ganguly', 
        c : 'Mrinal Pramanick',
        d : 'Roger Binny',
        correct : 'd'
    },
    {
        question : 'Dagar brothers are associated with which genre of Hindustani classical music?',
        a : 'Khayal',
        b : 'Dhrupad', 
        c : 'Thumri', 
        d : 'Tappa',
        correct : 'b' 
    }, 
    {
        question : 'Which dance is performed at the edge of the Brass Plate ?',
        a : 'Bharatnatyam',
        b : 'Kuchipudi',
        c : 'Kathakali',
        d : 'Manipuri',
        correct : 'b'
    }, 
    {
        question : 'Why schools are teaching "Python" to students ?',
        a : 'Easy Syntax',
        b : 'Easiest Language to write on paper',
        c : 'No Complexity while solving questions', 
        d : 'Easy to understand by all the children and students',
        correct : 'd'
    }
]

const questionEl = document.getElementById('question') 
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text') 
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitEl = document.getElementById('submit')

let currentQuiz = 0 
loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

submitEl.addEventListener('click', () => {
    currentQuiz ++

    if (currentQuiz < quizData.length) {
        loadQuiz()
    }else {
        alert("You Finished")
    }

    loadQuiz()
})