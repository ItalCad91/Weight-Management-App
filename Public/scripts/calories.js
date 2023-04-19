function showQuestion2() {
    var weight = parseInt(document.getElementById("weight").value);
    if (isNaN(weight)) {
        alert("Please enter a valid weight.");
    } else {
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "block";
    }
}

function showQuestion3() {
    var age = parseInt(document.getElementById("age").value);
    if (isNaN(age)) {
        alert("Please enter a valid age.");
    } else {
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "block";
    }
}

function showQuestion4() {
    var sex = document.getElementById("sex").value;
    if (sex === "") {
        alert("Please select a sex.");
    } else {
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "block";
    }
}

function calculateCalories() {
var activity = parseInt(document.getElementById("activity").value);
if (isNaN(activity)) {
alert("Please select an activity level.");
} else {
var weight = parseInt(document.getElementById("weight").value);
var age = parseInt(document.getElementById("age").value);
var sex = document.getElementById("sex").value;

var calories = 0;
if (age >= 0 && age <= 12) {
    // Children
    if (sex === "male") {
        calories = [1400, 1600, 1800][activity];
    } else if (sex === "female") {
        calories = [1200, 1400, 1600][activity];
    }
} else if (age >= 13 && age <= 18) {
    // Teens
    if (sex === "male") {
        calories = [2000, 2400, 2800][activity];
    } else if (sex === "female") {
        calories = [1800, 2000, 2400][activity];
    }
} else if (age >= 19 && age <= 59) {
    // Adults
    if (sex === "male") {
        calories = [2000, 2400, 3000][activity];
    } else if (sex === "female") {
        calories = [1600, 1800, 2400][activity];
    }
} else if (age >= 60) {
    // Elderly
    if (sex === "male") {
        calories = [1800, 2000, 2400][activity];
    } else if (sex === "female") {
        calories = [1600, 1800, 2000][activity];
    }
}

var diet = document.getElementById("diet").value;
if (diet === "Moderate") {
    calories -= 500;
} else if (diet === "Slow") {
    calories -= 300;
} else if (diet === "Aggressive") {
    calories -= 800; 
}

document.getElementById("question4").style.display = "none";
document.getElementById("result").innerHTML = "Based on your weight of " + weight + " kg, age of " + age + " years, sex of " + sex + ", and activity level of " + ["sedentary", "moderately active", "active"][activity] + ", and your selected diet of " + diet + ", you should consume " + calories + " calories per day.";

document.getElementById("result2").style.display = "block";
}
}
