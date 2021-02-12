/* java script for mikey's page */
var today = new Date();            // Create a new date object
var hourNow = today.getHours();    // Find the current hour
var greeting;

// Display the appropriate greeting based on the current time
if (hourNow > 18) {
    greeting = 'Good Evening! Thanks for taking the time to visit';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon! Thanks for taking the time to visit';
} else if (hourNow > 0) {
    greeting = 'Good Morning! A Great morning for great photos!';
} else {
    greeting = 'Welcome! Thanks for visiting';
}
document.write(greeting);