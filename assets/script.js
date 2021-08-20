const ex = $("#Exam"); // Grab the container that holds the Exam 
const q = $("#Q"); // Grab Question I.D. that'll hold the actual question
const nex = $("#nex"); // Grab the container that holds the Next button
const startB = $("#startb");
//const answerChoices = $("") 
let Qs = [
    {
        qs: "What is jQuery",
        ans: [
            "A seperate language",
            "A library for the J programming language",
            ""

        ]
    }
];


// Create a function whereby when I "click" the 'Start' button
function start() {
    $(ex).show(); // Has class H therefore will be hidden on load
    $(q).show(); // Has class H therefore will be hidden on load
    $(nex).show(); // Has class H therefore will be hidden on load
    $(startB).hide()
    
    // After set up go on and call for the next question.
    next();
}



function next() {

}

function ans() {

}
$(startB).click(start);