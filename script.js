const welcomeHeading = document.getElementById("welcome-heading");
const welcomeMessage = document.getElementById("welcome-message");

const user = prompt("What's your name?");
const currentTime = new Date();
const currentHour = currentTime.getHours();

let greeting = "";

if (currentHour < 6) {
    greeting = "Good night";
} else if (currentHour < 12) {
    greeting = "Good morning";
} else if (currentHour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

welcomeHeading.innerText = `${greeting}, ${user}!`;
welcomeMessage.innerText = "Welcome to our website!";
// 4r3_c0mm3nt3d}