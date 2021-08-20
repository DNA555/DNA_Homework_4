const rootEl = $('#root');
const quest = $("#Exam"); // Grab the container that holds 
const q = $("#Q"); // Grab Question I.D. that'll hold the actual question
const nex = $("#nex");
const startB = $("#startb");
//const answerChoices = $("") 
let Qs = [
    {
        qs: "What is jQuery",
        ans: [

        ]
    }
];


// Create a function whereby when I "click" the 'Start' button
function start() {
    // Add the class with a hide attribute, "display: none;" so that the start button is hidden.
    $(startB).addClass("H");
    // Remove the hide attribute so that the proper items show.
    $(quest).removeClass("H");
    $(nex).removeClass("H");
    // After set up go on and call for the next question.
    next();
}

function next() {

}

function ans() {

}

$(startB).click(start);