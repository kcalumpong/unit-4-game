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
  
    
    $("#randomNumber").text(ninteenToOneTwenty);
    

    $("#blueCrystal").on("click", function() {
        console.log("blue");
        var blueCrystalVal = oneToTwelve();
        console.log(oneToTwelve());
        totalScore += blueCrystalVal;
        $("#totalScore").text(totalScore); 
    })

    $("#redCrystal").on("click", function() {
        console.log("red");
        var redCrystalVal = oneToTwelve();
        console.log(oneToTwelve());
        $("#totalScore").text(redCrystalVal);
        totalScore += redCrystalVal;
        $("#totalScore").text(totalScore);
    })

    $("#yellowCrystal").on("click", function() {
        console.log("yellow");
        var yellowCrystalVal = oneToTwelve();
        console.log(oneToTwelve());
        $("#totalScore").text(yellowCrystalVal);
        totalScore += yellowCrystalVal;
        $("#totalScore").text(totalScore);
    })

    $("#greenCrystal").on("click", function() {
        console.log("green");
        var greenCrystalVal = oneToTwelve();
        console.log(oneToTwelve());
        $("#totalScore").text(greenCrystalVal);
        totalScore += greenCrystalVal;
        $("#totalScore").text(totalScore);
    })

    // if totalScore === 

    
 
})









