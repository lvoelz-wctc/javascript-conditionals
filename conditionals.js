$(document).ready(function () {
    $("#clickCountButton").click(countClick);
    $("#birthYearButton").click(checkAge);
    $("#salesTaxButton").click(calcSalesTax);
    $("#catAgeButton").click(recommendFood);
    $("#drawCardButton").click(drawCard);

    var click = 0;

	function countClick(event) {
	    event.preventDefault();
	    click++;
	    if (click > 10)
	    {
            click = 0;
        }
        $("#clickCountOutput").text(click);

	}

    function checkAge(event) {
	    event.preventDefault();
	    var yearInput = $("#birthYear").val();
	    if (2020 - yearInput < 18)
        {
            $("#birthYearOutput").text("Child");
        }
	    else
        {
            $("#birthYearOutput").text("Adult");
        }
    }

    function calcSalesTax(event) {
	    event.preventDefault();
        var purchase = $("#purchaseAmount").val();
	    var state = $("#state").val();

	    if (state === "WI")
        {
            var taxAmount = (purchase * .05).toFixed(2);
            $("#salesTaxOutput").text("$"+taxAmount);
        }
	    else if (state === "IL")
        {
            var taxAmount = (purchase * .08).toFixed(2);
            $("#salesTaxOutput").text("$"+taxAmount);
        }
        else if (state === "MN")
        {
            var taxAmount = (purchase * .075).toFixed(2);
            $("#salesTaxOutput").text("$"+taxAmount);
        }
        else if (state === "MN")
        {
            var taxAmount = (purchase * .055).toFixed(2);
            $("#salesTaxOutput").text("$"+taxAmount);
        }
        else if (state === "MN")
        {
            var taxAmount = (purchase * .075).toFixed(2);
            $("#salesTaxOutput").text("$"+taxAmount);
        }
        else
        {
            $("#salesTaxOutput").text("Error");
        }

    }

    function recommendFood(event) {
        event.preventDefault()
	    var age = $("#catAge").val();
	    if (age<2)
	    {
            var response = "Kitten Chow";
        }

        else if (age >= 2 && age <= 10)
        {
            var response = "Adult Chow";
        }

        else {
            var response = "Senior Chow";
        }
        $("#catAgeOutput").text(response);
    }


    function drawCard(event) {
        event.preventDefault();
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;

        //Face Value Naming
        if (faceValue === 1)
        {
            faceValue = "Ace";
        }

        else if (faceValue === 11)
        {
            faceValue = "Jack";
        }

        else if (faceValue === 12)
        {
            faceValue = "Queen";
        }

        else if (faceValue === 13)
        {
            faceValue = "King";
        }

        //Suit naming
        if (suit === 1)
        {
            suit = "Clubs";
        }

        else if (suit ===2)
        {
            suit = "Spades";
        }

        else if (suit ===3)
        {
            suit = "Hearts";
        }

        else if (suit ===4)
        {
            suit = "Diamonds";
        }

        $("#drawCardOutput").text(faceValue + " of " + suit);
    }

});