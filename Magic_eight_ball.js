let userName = "";

if (userName) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log("Hello !");
}

let userQuestion = "";

if (userQuestion) {
    if (userName) {
    console.log(`${userName} ask : ${userQuestion}`);
    } else {
    console.log(`You ask : ${userQuestion}`);
    }
} else {
    console.log("You had no questions");
}

let randomNumber = Math.floor(Math.random * 8);

let eightBall = "";

