// ans to the question 01
let celciousTem1 = 38;
let celciousTem2 = 24;
let celciousTem3 = -1;

function temCal(celcious) {
    return (9 * (celcious / 5) + 32);
}

document.getElementById("fahr_1").innerText = temCal(celciousTem1).toFixed(1);
document.getElementById("fahr_2").innerText = temCal(celciousTem2).toFixed(1);
document.getElementById("fahr_3").innerText = temCal(celciousTem3);

// ans to the question 01
let classification = ["John Hill", "Mary Jane", "Gary Vee", "Paricia Mills", " Helen Hall", " Paul Green"];

document.getElementById("best_students").innerText = classification.slice(3);

// ans to the question 01_a
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4,
}

document.getElementById("course_title").innerText = course['title'];

// ans to the question 01_b

document.getElementById("main_category").innerText = course['categories'][0];

// ans to the question 01_c

function getPercentage(course) {
    const totalReviews =
        course["1_stars_reviews"] +
        course["2_stars_reviews"] +
        course["3_stars_reviews"] +
        course["4_stars_reviews"] +
        course["5_stars_reviews"];

    const percent = (course["5_stars_reviews"] / totalReviews) * 100;

    return Math.round(percent);
}
document.getElementById("reviews_5_stars").innerText = getPercentage(course) + " %";


// ans to the question 04


var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];

shoppingList.unshift("Chocolate");
shoppingList.push("Cheese", "Eggs")

console.log(shoppingList);