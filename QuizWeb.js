const quiz = [
    {
        question: "Q1: Who developed Javascript Language?",
        a: "Daniel Eich",
        b: "Guido van Rossum",
        c: "Brendan Eich",
        d: "Brad van Rossum",
        ans: "ans3"
    },
    {
        question: "Q2: What is the full form of HTML?",
        a: "Hyper Technical Markup Language",
        b: "Hyper Text Markup Language",
        c: "Head Tag Method Library",
        d: "Header Text Markup Library",
        ans: "ans2"
    },
    {
        question: "Q3: What is the full form of CSS?",
        a: "Color Styling Scripts",
        b: "Cascade and Style Sheets",
        c: "Color and Style Sheets",
        d: "Cascading Style Sheets",
        ans: "ans4"
    },
    {
        question: "Q4: Which tag is used to create a check box?",
        a: "<checkbox>",
        b: '<Input type="checkbox">',
        c: '<type="checkbox">',
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q5: Which is not valid data type in Javascript?",
        a: "Undefined",
        b: "Number",
        c: "Boolean",
        d: "float",
        ans: "ans4"
    },
    {
        question: "Q6: Which of the following is the correct syntax for referring the external style sheet?",
        a: "<style src = example.css>",
        b: '<style src = "example.css">',
        c: "<stylesheet> example.css </stylesheet>",
        d: '<link rel="stylesheet" type="text/css" href="example.css">',
        ans: "ans4"
    },
    {
        question: "Q7: HTML is subset of which of the following?",
        a: "GHL",
        b: "SGHL",
        c: "SGML",
        d: "SHL",
        ans: "ans3"
    },
    {
        question: "Q8: Which tag is used to write the javascript code?",
        a: "<javascript>",
        b: "<js>",
        c: "<script>",
        d: "<input type='js'>",
        ans: "ans3"
    },
    {
        question: "Q9: What is the property in CSS used to change the background color of an element?",
        a: "color",
        b: "background-color",
        c: "bgcolor",
        d: "backgroundcolor",
        ans: "ans2"
    },
    {
        question: "Q10: Which type of language is Javascript?",
        a: "Scripting",
        b: "Programming",
        c: "Markup",
        d: "Styling",
        ans: "ans1"
    }
];
const question = document.getElementById('question');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');
const submit = document.getElementById('submit');
const answers = document.getElementsByClassName('answer');
const result = document.getElementById('score');

let count = 0;
let score = 0;

function loading(){
    const quizList = quiz[count];
    question.innerText = quizList.question;
    opt1.innerText = quizList.a;
    opt2.innerText = quizList.b;
    opt3.innerText = quizList.c;
    opt4.innerText = quizList.d;
}
loading();

const ans = Array.from(answers);

function checkAnswer() {
    let answer;
    ans.forEach(element => {
        if(element.checked){
            answer = element.id;
        }
    });
    return answer;
};

function deselect() {
    ans.forEach(element => {
        element.checked = false;
    });
}

submit.addEventListener('click', ()=> {
    const check = checkAnswer();
    if(check == quiz[count].ans) {
        score++;
    };
    count++;
    deselect();
    if(count < quiz.length) {
        loading();
    }
    else {

        document.getElementById("inner-div2").style.display = "block";
        if(score >= 8) {
            result.textContent = "Score : "+ score +". You did Great !! Keep it up !!";
        }
        else {
            result.textContent = "Score : "+ score +". You need to improve !!";
        }
    }
})



