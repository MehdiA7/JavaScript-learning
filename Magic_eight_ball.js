let userName = "Mehdi";

if (userName) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log("Hello !");
}

let userQuestion = "I'm good ?";
let eightBall = "";
let randomNumber = Math.floor(Math.random() * 8);

if (userQuestion) {
    if (userName) {
        console.log(`${userName} ask : ${userQuestion}`);
    } else {
        console.log(`You ask : ${userQuestion}`);

    } switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            break;
        case 1:
            eightBall = 'It is decidedly so';
            break;
        case 2:
            eightBall = 'Reply hazy try again';
            break;
        case 3:
            eightBall = 'Cannot predict now';
            break;
        case 4:
            eightBall = 'Do not count on it';
            break;
        case 5:
            eightBall = 'My sources say no';
            break;
        case 6:
            eightBall = 'Outlook not so good';
            break;
        case 7:
            eightBall = 'Signs point to yes';
            break;
        default:
            eightBall = 'Unexpected value';
            break;
    }
} else {
    console.log("You had no questions");
}


console.log(eightBall)
