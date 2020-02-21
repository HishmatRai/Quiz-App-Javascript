//********Questions Array Of Object Hardcoded*********/

var questions = [{
    "question": "This set of Javascript Multiple Choice Questions",
    "option1": "String",
    "option2": "Object",
    "option3": "Serialized Object",
    "option4": "Serialized",
    "answer": "option4"
},
{
    "question": "The object has three object attributes namely",
    "option1": "Class, parameters, object’s extensible flag",
    "option2": "Prototype, class, object’s extensible flag",
    "option3": "Prototype, class, objects’ parameters",
    "option4": "class, objects’ parameters",
    "answer": "option2"
},
{
    "question": "In the above snippet, firstname and surname are",
    "option1": "properties",
    "option2": "property values",
    "option3": "property names",
    "option4": " property",
    "answer": "option1"
},
{
    "question": "A linkage of series of prototype objects is called as",
    "option1": "prototype stack",
    "option2": "prototype chain",
    "option3": "prototype class",
    "option4": "class",
    "answer": "option4"
},
{
    "question": "In the above syntax, the datatype within the square brackets must be",
    "option1": " A String",
    "option2": "An object",
    "option3": "An integer",
    "option4": "nteger",
    "answer": "option3"
},]

//********Get Questions And Option From Html *********/

var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var nextBtn = document.getElementById("nextBtn");
var count = 0;
var score = 0;
var right = 0;
var wrong = 0;
var currentOption;
var answer;
//********Call Load Question Function*********/

loadQuestion()

//********Load First Question When Page Refresh*********/

function loadQuestion() {
    question.innerHTML = questions[count].question;
    option1.innerHTML = questions[count].option1;
    option2.innerHTML = questions[count].option2;
    option3.innerHTML = questions[count].option3;
    option4.innerHTML = questions[count].option4;
}

//********Next Question Render Function*********/


function nextQuestion() {
    if (questions.length - 1 === count) {
        document.getElementById("card").style.display = "none";
        document.getElementById("result").style.display = "block";
    } else {
        document.getElementById("disabled").style.pointerEvents = "auto";
        var opt = document.getElementById(currentOption);
        nextBtn.disabled = true
        opt.previousSibling.previousSibling.checked = false
        opt.nextSibling.nextSibling.innerHTML = ""
        document.getElementById(questions[count].answer).nextSibling.nextSibling.innerHTML = "";
        count++
        question.innerHTML = questions[count].question;
        option1.innerHTML = questions[count].option1;
        option2.innerHTML = questions[count].option2;
        option3.innerHTML = questions[count].option3;
        option4.innerHTML = questions[count].option4;
    }
}

//********Slect Question And Check Result*********/
function select(option) {
    document.getElementById("disabled").style.pointerEvents = "none";
    currentOption = option;
    nextBtn.disabled = false
    var opt = document.getElementById(option);
    if (option === questions[count].answer) {
        score++
        console.log(score)
        document.getElementById("score").innerHTML = score * 10;
        opt.nextSibling.nextSibling.style.color = "green";
        opt.nextSibling.nextSibling.style.fontWeight = "bold";
        opt.nextSibling.nextSibling.innerHTML = "Correct ✓";
    } else {
        opt.nextSibling.nextSibling.style.color = "red";
        opt.nextSibling.nextSibling.style.fontWeight = "bold";
        opt.nextSibling.nextSibling.innerHTML = "Incorrect ❌";
        document.getElementById(questions[count].answer).nextSibling.nextSibling.style.color = "green";
        document.getElementById(questions[count].answer).nextSibling.nextSibling.style.fontWeight = "bold";
        document.getElementById(questions[count].answer).nextSibling.nextSibling.innerHTML = "Correct ✓";
    }
}