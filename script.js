// Document ready !
$(document).ready(function() {
    
    // Set up an event listener on the form's submit button which, once clicked (aka a submit event), it will set off a series of instructions. 
    $("form").on("submit", function (event) {

        // prevent default so the page doesn't reload automatically when the form is submitted 

        event.preventDefault();


        // store the value of the user's choice in a variable. In HTML, each radio button is assigned a different value: "one-point", "two-point", "three-point". 

        // Create an array that stores the value of all of user's choices. 

        // loop through the user's choice array. 

        // use a whole bunch of conditionals that state: If the majority of the user's selections are "one-point": The result is "60s Dolly". If the majority is "two-point": "70s Dolly". If the majority "three-point": "80s Dolly". Else, their result is "Present-day Dolly"

        // Display the determined era of Dolly Parton on the page.

    });

});


