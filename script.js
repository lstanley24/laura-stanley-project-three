// Document ready !
$(document).ready(function() {
    
    // Set up an event listener on the form's submit button which, once clicked (aka a submit event), it will set off a series of instructions. 
    $("form").on("submit", function (event) {

        // prevent default so the page doesn't reload automatically when the form is submitted 

        event.preventDefault();

        // store the value of the user's choices in variables. In HTML, each radio button is assigned a different value: "1", "2", "3". 

        const questionOneSelection = $("input[name=fashion]:checked").val();
        const questionTwoSelection = $("input[name=genre]:checked").val();
        const questionThreeSelection = $("input[name=movie]:checked").val();

        const sixtiesDolly = []
        const seventiesDolly = []
        const eightiesDolly = []

        if (questionOneSelection === "1") {
            sixtiesDolly.push(questionOneSelection)
        } else if (questionOneSelection === "2") {
            seventiesDolly.push(questionOneSelection)
        } else if (questionOneSelection === "3") {
        eightiesDolly.push(questionOneSelection)
        }

        if (questionTwoSelection === "1") {
            sixtiesDolly.push(questionTwoSelection)           
        } else if (questionTwoSelection === "2") {
            seventiesDolly.push(questionTwoSelection)
        } else if (questionTwoSelection === "3") {
            eightiesDolly.push(questionTwoSelection)
        }

        if (questionThreeSelection === "1") {
            sixtiesDolly.push(questionThreeSelection)
        } else if (questionThreeSelection === "2") {
            seventiesDolly.push(questionThreeSelection)
        } else if (questionThreeSelection === "3") {
            eightiesDolly.push(questionThreeSelection)  
        }

        // console.log(sixtiesDolly)
        // console.log(seventiesDolly)
        // console.log(eightiesDolly)

        if (sixtiesDolly.length >= 2) {
            console.log("SIXTIES!")
        
        } else if (seventiesDolly.length >= 2) {
            console.log("SEVENTIES")
        } else if (eightiesDolly.length >= 2 ){
            console.log("EIGHTIES")
        } else {
            console.log("PRESENT DAY DOLLY")

        }


        // Create an array that stores the value of all of user's choices. 

        // const userSelections = []

        // userSelections.push(questionOneSelection)
        // userSelections.push(questionTwoSelection)
        // userSelections.push(questionThreeSelection)

        // console.log(userSelections)


        // // loop through the user's choice array. 

        // answerTotal = 0

        // for (let i = 0; i < userSelections.length; i++) {
        //     answerTotal = (answerTotal + userSelections[i])
        //     answerTotal / userSelections.length

        //     console.log(answerTotal)
        // }

        // userSelections.forEach ((responses) => {
        
        //     if (userSelections.includes("one-point")) {
        //         console.log("yay, one point")
        //     } else if (userSelections.includes("two-point")) {
        //         console.log("yay, two point!")
        //     } else if  (userSelections.includes("three-point")) {
        //         console.log("yay, three point!")
        //     } else {
        //         console.log ("Yay, another dolly!")

        //     }
        //     console.log(responses)
        // });
          
        
        // use a whole bunch of conditionals that state: If the majority of the user's selections are "one-point": The result is "60s Dolly". If the majority is "two-point": "70s Dolly". If the majority "three-point": "80s Dolly". Else, their result is "Present-day Dolly"

        // Display the determined era of Dolly Parton on the page.

       

    });

});


