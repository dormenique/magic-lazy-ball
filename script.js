function askButton() {
  let userQuestion = document.getElementById("question").value;
  console.log(userQuestion);

  if (userQuestion) {
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = randomNumber;

    switch (eightBall) {
      case 1:
        eightBall = "I don't know.. Ask me later, I'm busy";
        break;
      case 2:
        eightBall = "I don't have time for you right now";
        break;
      case 3:
        eightBall = "Ask Google";
        break;
      case 4:
        eightBall =
          "Cannot predict now. I am kinda sleepy... Mondays, am I right?";
        break;
      case 5:
        eightBall = "Do not count on it... But maybe you can count on it";
        break;
      case 6:
        eightBall =
          "My sources say no. You should not even try again. Go to sleep";
        break;
      case 7:
        eightBall = "Definitely no. You should go to therapy, though...";
        break;
      case 8:
        eightBall =
          "Signs point to yes. But maybe it is also a no... I do not know, I lost my glasses";
        break;
      default:
        eightBall = "Why are you asking me this?";
        break;
    }
    console.log(eightBall);
    document.getElementById("answer-value").innerHTML = eightBall;
  }
}

function doItAgain() {
  document.getElementById("answer-value").innerHTML = "";
  document.getElementById("question").value = "";
}
