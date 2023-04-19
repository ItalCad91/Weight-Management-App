var totalCalories = parseInt(localStorage.getItem("calories"));
var remainingCalories = totalCalories;
document.getElementById("calories").innerHTML = totalCalories;
document.getElementById("remaining-calories").innerHTML = remainingCalories;
function subtractCalories() {
var itemName = document.getElementById("item-name").value;
var caloriesConsumed = parseInt(document.getElementById("calories-consumed").value);
if (isNaN(caloriesConsumed)) {
    alert("Please enter a valid number of calories.");
} else {
    remainingCalories -= caloriesConsumed;
    localStorage.setItem("remainingCalories", remainingCalories);
    document.getElementById("remaining-calories").innerHTML = remainingCalories;
    alert(itemName + " subtracted from remaining calories. You now have " + remainingCalories + " calories remaining.");
}
}
