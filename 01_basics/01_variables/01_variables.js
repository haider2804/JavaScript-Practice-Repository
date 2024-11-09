let totalScore = 0;   // Initialize the score
let pointScored = true; // Assume the player scored a point

if (pointScored) {
    totalScore += 10; // Add 10 to the score
    console.log("Total Score:", totalScore); // Output the updated score
} else {
    console.log("Total Score:", totalScore); // Output the score without change
}


let userName = "haider"
console.log("Welcome",userName)

let name = "Haider Abbass"
let age = 34
let country = "Pakistan"

let profileMessage = `My Name is ${name} and I am ${age} old and living in ${country}`

document.getElementById("profileInfo").innerText = profileMessage
