var oneToTwelve = function() {
    return Math.floor((Math.random() * 11) + 1);
}

var ninteenToOneTwenty = function() {
    return Math.floor(Math.random() * 119) + 1;
}



$(document).ready(function(){
    
    var addScore;

    $("#randomNumber").text(ninteenToOneTwenty);

 
    $("#blueCrystal").on("click", function() {
        console.log("blue");
        var blueCrystalVal = oneToTwelve();
        console.log(oneToTwelve());
        $("#totalScore").text(blueCrystalVal);
    })

    $("#redCrystal").on("click", function() {
        console.log("red");
        var redCrystalVal = oneToTwelve();
        console.log(oneToTwelve());
        $("#totalScore").text(redCrystalVal);
    })

    $("#yellowCrystal").on("click", function() {
        console.log("yellow");
        var yellowCrystalVal = oneToTwelve();
        console.log(oneToTwelve());
        $("#totalScore").text(yellowCrystalVal);
    })

    $("#greenCrystal").on("click", function() {
        console.log("green");
        var greenCrystalVal = oneToTwelve();
        console.log(oneToTwelve());
        $("#totalScore").text(greenCrystalVal);
    })

    
 
})









