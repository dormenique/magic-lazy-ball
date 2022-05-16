import React from "react";
import "./App.css";

function App() {
  let userQuestion = document.getElementById("input").textContent;
  console.log(userQuestion);

  return (
    <div className="App">
      <h1>Magic Lazy Ball</h1>
      <h3>Hello! Let's see what is up with the future...</h3>
      <input id="input" type="text" placeholder="type your question here" />

      <div>
        <h2>The Magic Lazy Ball answers...</h2>
        <p></p>
      </div>
    </div>
  );
}

export default App;
