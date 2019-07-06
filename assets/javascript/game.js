var oneToTwelve = function() {
    return Math.floor((Math.random() * 11) + 1);
}

var ninteenToOneTwenty = function() {
    return Math.floor(Math.random() * 119) + 1;
}

$(document).ready(function(){
    
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    //creates a function that gives each crystal a random number 1-12
    function randomNumberForCrystals(min, max) {
    return Math.floor(Math.random() * (max + 1 -min) );
    }

    //
    function setCrystalValues() {

    $("#blueCrystal").attr("data-randomnumber", randomNumberForCrystals(1,12))
    // var b = $("#blueCrystal").attr("data-randomnumber")
    // console.log('blue',b);

    $("#redCrystal").attr("data-randomnumber", randomNumberForCrystals(1,12))

    $("#yellowCrystal").attr("data-randomnumber", randomNumberForCrystals(1,12))

    $("#greenCrystal").attr("data-randomnumber", randomNumberForCrystals(1,12))

    }

    //generates a random number and pushes it to the html
    var randomNumberGenerated;

    function createRandomNumber() {
        randomNumberGenerated = ninteenToOneTwenty()
        $("#randomNumber").text(randomNumberGenerated);
    }

    createRandomNumber();
    setCrystalValues();
    
    //created a function that each time it adds the score to the total
    function crystalClicked(context) {
        var crystalValue = $(context).attr("data-randomnumber");
        totalScore += parseInt(crystalValue);
        $("#totalScore").text(totalScore); 
        checkIf();
    }

    $("#blueCrystal").on("click", function() {
        crystalClicked(this)
    })

    $("#redCrystal").on("click", function() {
        crystalClicked(this)
    })

    $("#yellowCrystal").on("click", function() {
        crystalClicked(this)
    })

    $("#greenCrystal").on("click", function() {
        crystalClicked(this)
    })


    //created a function that checks if your score is less than or equal to the random number
    function checkIf() {

        if (totalScore === randomNumberGenerated) {
            wins++
            $("#winCounter").text("Wins: " + wins)
            reset();
            alert("You Win!")
        } else if (totalScore > randomNumberGenerated) {
            losses++;
            $("#lossesCounter").text("Losses: "+ losses)
            reset();
            alert("You Lost!")
        }

    }

    //reset when a user wins or losses
    function reset() {
        totalScore = 0; 
        $("#totalScore").text(totalScore);
        createRandomNumber();
        setCrystalValues();
    }






    
 
})


