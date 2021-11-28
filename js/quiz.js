const questions = [
    {
        question: "How many types of microstructures can be found among the cast iron specimens?",
        optionA: "1",
        optionB: "3",
        optionC: "4",
        optionD: "5",
        correctOption: "optionD"
    },
    {
        question: "In case of white iron microstructure analysis how are the arrangements of the pearlite appear when viewed through the microscope?",
        optionA: "Non-linear",
        optionB: "Zig-Zag",
        optionC: "Linear",
        optionD: "Compacted",
        correctOption: "optionC"
    },
    {
        question: "What are the method that uses lengths of the dispersed phase as a reference to determine the distribution of the microstructures of the cast iron samples?",
        optionA: "ASTM Method",
        optionB: "Lineal method",
        optionC: "Point coint method",
        optionD: "None of the above",
        correctOption: "optionB"
    },
    {
        question: "Most standard microscopic checks of cast irons are done with a magnification of:",
        optionA: "20x",
        optionB: "50x",
        optionC: "100x",
        optionD: "200x",
        correctOption: "optionC"
    },
    {
        question: "For cutting cast irons with graphite, it is recommended to select an aluminium oxide wheel using what physical parameters of the cast iron?",
        optionA: "Hardness",
        optionB: "Arrangement of the graphite",
        optionC: "Both",
        optionD: "None of the above",
        correctOption: "optionA"
    },
    {
        question: "Which method uses the pre-observed and recorded pictorial data of the microstructures of the cast iron specimens to determine the type and distribution of the graphite phase?",
        optionA: "Point count method",
        optionB: "Linear intecept method",
        optionC: "ASTM method",
        optionD: "None of the above",
        correctOption: "optionB"
    },
    {
        question: "What is the actual color appearance of the graphite phase when viewed under 200x magnification?",
        optionA: "Black",
        optionB: "Blue",
        optionC: "Grey",
        optionD: "Brown",
        correctOption: "optionC"
    },
    {
        question: "What is the shape of the graphite that appears in the malleable iron specimen?",
        optionA: "Nodular",
        optionB: "Spheroidal",
        optionC: "Vermicular",
        optionD: "Undefinable",
        correctOption: "optionB"
    },
    {
        question: "Why are cast irons containing graphite nodules difficult to etch by an electrolytic etching method?",
        optionA: "The graphite gets washed away with the electrolytes.",
        optionB: "The etching method has no effect what so ever.",
        optionC: "Cannot say",
        optionD: "Has a volatile reaction.",
        correctOption: "optionA"
    },
    {
        question: "Ferrous materials with a lower carbon content than _____ are referred to as steels and ferrous materials over _____ as cast iron.",
        optionA: "5%",
        optionB: "3%",
        optionC: "2.06%",
        optionD: "10%",
        correctOption: "optionC"
    },
    {
        question: "What is the color of the graphite when viewed under 100x magnification ( improper etching)",
        optionA: "Brown",
        optionB: "Blue",
        optionC: "Green",
        optionD: "Black",
        correctOption: "optionD"
    },
    {
        question: "Which etchant is used for cast iron microstructural analysis    ",
        optionA: "2% nital solution",
        optionB: "1% nital solution",
        optionC: "5-8% picric acid mix",
        optionD: "None",
        correctOption: "optionA"
    }
]

let displayQuestions = []
while(displayQuestions.length<=4) {
    const random = questions[Math.floor(Math.random() * questions.length)]
    if(!displayQuestions.includes(random))
    {
        displayQuestions.push(random)
    }
}

let index = 1;
for(let i=0; i<displayQuestions.length; i++) {
    document.getElementById("number" + index).innerHTML = index;
    document.getElementById("question" + index).innerHTML = displayQuestions[i].question;
    document.getElementById("displayA" + index).innerHTML = displayQuestions[i].optionA;
    document.getElementById("displayB" + index).innerHTML = displayQuestions[i].optionB;
    document.getElementById("displayC" + index).innerHTML = displayQuestions[i].optionC;
    document.getElementById("displayD" + index).innerHTML = displayQuestions[i].optionD;
    document.getElementById("correctAnswer" + index).innerHTML = displayQuestions[i].correctOption;
    index++;
}

function showCorrectOption() {
    for(let i=1; i<=5; i++) {
        document.getElementById("show" + i).style.display = "block";
    }
    document.getElementById("result").style.display = "block";
}

let marks = 0;
function question1(selected) {
    var select = selected;
    var choosen = displayQuestions[0].correctOption;
    if(select === choosen) {
        marks = marks + 1;
    }
    document.getElementById("score").innerHTML = marks;
}
function question2(selected) {
    var select = selected;
    var choosen = displayQuestions[1].correctOption;
    if(select === choosen) {
        marks = marks + 1;
    }
    document.getElementById("score").innerHTML = marks;
}
function question3(selected) {
    var select = selected;
    var choosen = displayQuestions[2].correctOption;
    if(select === choosen) {
        marks = marks + 1;
    }
    document.getElementById("score").innerHTML = marks;
}
function question4(selected) {
    var select = selected;
    var choosen = displayQuestions[3].correctOption;
    if(select === choosen) {
        marks = marks + 1;
    }
    document.getElementById("score").innerHTML = marks;
}
function question5(selected) {
    var select = selected;
    var choosen = displayQuestions[4].correctOption;
    if(select === choosen) {
        marks = marks + 1;
    }
    document.getElementById("score").innerHTML = marks;
}