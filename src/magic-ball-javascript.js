let userName = "Jane";
console.log(`Hello ${userName}, let's see what is up with the future...`);

let userQuestion = "Will I be rich?";
console.log(`${userName} asked "${userQuestion}"`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = randomNumber;

switch (eightBall) {
  case 1:
    eightBall = "It is certain. But I am not so sure...";
    break;
  case 2:
    eightBall =
      "It is decidedly so, but I am not sure that this is what you want";
    break;
  case 3:
    eightBall = "Reply hazy try again, please";
    break;
  case 4:
    eightBall = "Cannot predict now. I am kinda sleepy... Mondays, am I right?";
    break;
  case 5:
    eightBall = "Do not count on it... But maybe you can count on it";
    break;
  case 6:
    eightBall = "My sources say no, you should not even try again. Go to sleep";
    break;
  case 7:
    eightBall = "Outlook not so good. You should go to therapy";
    break;
  case 8:
    eightBall =
      "Signs point to yes. But maybe it is also a no... I do not know, I lost my glasses";
    break;
  default:
    eightBall = "Why are you asking me this?";
    break;
}

console.log(`The Magic Eight Ball answers "${eightBall}"`);