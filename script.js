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

        // Three empty arrays that will store the value of the question selections

        const sixtiesDolly = []
        const seventiesDolly = []
        const eightiesDolly = []

        // Conditional statements that push the assigned values into the designated Dolly arrays. This is repetitive, dear reader, but I wasn't too sure how to clean it up. Maybe make it into a function that I call three times? 

        if (questionOneSelection === "1") {
            sixtiesDolly.push(questionOneSelection)
        } else if (questionOneSelection === "2") {
            seventiesDolly.push(questionOneSelection)
        } else if (questionOneSelection === "3") {
        eightiesDolly.push(questionOneSelection)
        } else {
            // Alert is set off when a value is not selected
            alert("Don't forget to choose an answer for question 1!")
        }

        if (questionTwoSelection === "1") {
            sixtiesDolly.push(questionTwoSelection)           
        } else if (questionTwoSelection === "2") {
            seventiesDolly.push(questionTwoSelection)
        } else if (questionTwoSelection === "3") {
            eightiesDolly.push(questionTwoSelection)
        } else {
            alert("Don't forget to choose an answer for question 2!")
        }

        if (questionThreeSelection === "1") {
            sixtiesDolly.push(questionThreeSelection)
        } else if (questionThreeSelection === "2") {
            seventiesDolly.push(questionThreeSelection)
        } else if (questionThreeSelection === "3") {
            eightiesDolly.push(questionThreeSelection)  
        } else {
            alert("Don't forget to choose an answer for question 3!")
        }
 
        //  Display the determined era of Dolly Parton on the page.

        if (questionOneSelection === undefined || questionTwoSelection === undefined || questionThreeSelection === undefined) {

            // Error proofing. If no selections are made, the text and image containers with the answers are hidden and the errorDolly container arrives

            $(".text-container").hide();
            $(".image-container").hide();
            $("a.reset").hide();

            // Error Dolly container 

            const errorDolly = ` 
                <h3> Maybe try filling out all of the answers next time </h3>
                <figure> 
                    <img src = "./assets/dollyPartonError.gif" alt = "A GIF of Dolly Parton wearing a black turtleneck sweater and chunky silver bracelets, earrings, and a necklace. She takes a sip from a white tea cup, while holding its matching saucer, and winks at the camera."> 
                </figure>
            `;

            $(".error-dolly").html(errorDolly)  

            
        } else if (sixtiesDolly.length >= 2) {
            // 1960s Dolly answer
           
           // Displays the text within the stylized text container 

            const sixtiesDollyResult = `
            <h3>You are 1960s Dolly Parton!</h3>
            
            <p>You are just finding your footing in life, love, and your career but you are full of spunk and brains and nothing can
            stop you from achieving your dreams. Be like Dolly: remain confident and buy some hairspray. You got this.</p>

            `;
            
            $(".text-container").html(sixtiesDollyResult)
            
            // Reveals the quiz reset button that is otherwise hidden as per css "display:none"
            
            $(".quiz-reset").show();
           
            // displays the image within the stylized image container

            const sixtiesDollyResultImg = ` 
                <figure> 
                    <img src = "./assets/dollyParton60s.jpg" alt = "Dolly Parton in the 1960s. She sits on the front stoop of a house and wears yellow pants and a green tanktop."> 
                </figure>
            `;

            $(".image-container").html(sixtiesDollyResultImg);

            
        } else if (seventiesDolly.length >= 2) {
            // 1970s Dolly answer 

            // Displays the text within the stylized text container 

            const seventiesDollyResult = `
            <h3>You are 1970s Dolly Parton!</h3>
            
            <p>You are a force to be reckoned with! You wrote “Jolene” and “I Will Always Love You” in the same day and are on a steady path towards even more success. Don’t forget to keep love in your heart, be true to yourself, and to be open to new opportunities.</p>

            `;

            $(".text-container").html(seventiesDollyResult)

            // Reveals the quiz reset button that is otherwise hidden as per css "display:none"

            $('.quiz-reset').show();

            // displays the image within the stylized image container

            const seventiesDollyResultImg = ` 
                <figure> 
                    <img src = "./assets/dollyParton70s.jpg" alt = "Dolly Parton in the 1970s. She leans against a wooden fence and wears a red plaid shirt and blue jeans. Her hair is big and blonde."> 
                </figure>
            `;

            $(".image-container").html(seventiesDollyResultImg)

            
        } else if (eightiesDolly.length >= 2 ){
            //1980s Dolly answer

            // Displays the text within the stylized text container 

            const eightiesDollyResult = `
            <h3>You are 1980s Dolly Parton!</h3>
            
            <p>Your hair has never been bigger and neither have your dreams. Don’t be afraid to show people a new side of you just like Dolly did when she starred in a string of movies in the 1980s. But maybe don’t get a perm.</p>
            `;

            $(".text-container").html(eightiesDollyResult)

            // Reveals the quiz reset button that is otherwise hidden as per css "display:none"

            $('.quiz-reset').show();

            // displays the image within the stylized image container

            const eightiesDollyResultImg = ` 
                <figure> 
                    <img src = "./assets/dollyParton80s.jpg" alt = "Dolly Parton in the 1980s. She wears a white lace top, a black leather jacket, red lipstick, and blue eyeshadow. The backdrop is red. Her hair is big, blonde, and curly, likely permed, and takes up the majority of the photo."> 
                </figure>
            `;

            $(".image-container").html(eightiesDollyResultImg)

        }  else {

            // If the user selects "1" "2" and "3", the result is Present Day Dolly.    

            // Displays the text within the stylized text container 
            const presentDollyResult = `
            <h3>You are present-day Dolly Parton!</h3>
            
            <p>You are full of wit and wisdom and are a pillar of strength and comfort for many. Bask in the glory of your successes but don’t be afraid to take on new projects when they arise.</p>
            `;

            $(".text-container").html(presentDollyResult)

            // Reveals the quiz reset button that is otherwise hidden as per css "display:none"

            $(".quiz-reset").show();

            const presentDollyResultImg = ` 
                <figure> 
                    <img src = "./assets/dollyPartonPresent.jpg" alt = "Dolly Parton performing on stage in 2014. She wears a bedazzled white outfit, pink lipstick, and blue eyeshadow."> 
                </figure>
            `;

            // displays the image within the stylized image container

            $(".image-container").html(presentDollyResultImg)   
        }

        // scrolls users to the results container

        $("html").animate({
            scrollTop: $("#results").offset().top
        }, "slow");
    
        // once the "take the quiz again" button is clicked, the page reloads and users are scrolled back up to question 1. 

        $("a.reset").on("click", function () {
            location.reload();

            // My HTML is set up so that each section of my quiz is a new form so I have to reset each new form (aka each section) separately. This code isn't very DRY though, so I can't help but think there's a cleaner way to do this. 

            $("#dolly-quiz-1").trigger("reset");
            $("#dolly-quiz-2").trigger("reset");
            $("#dolly-quiz-3").trigger("reset");
            $("#dolly-quiz-4").trigger("reset");
        });
    });
});