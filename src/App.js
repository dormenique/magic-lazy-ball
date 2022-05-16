import React from "react";
import "./App.css";

function App() {
  return (
    <body>
      <div className="app">
        <header className="app-header">
          <h1>Magic Lazy Ball</h1>
        </header>
        <h3>Hello! Let's see what is up with the future...</h3>
        <input
          className="input"
          id="input"
          type="text"
          placeholder="Insert your question here"
        />
        <button>Ask</button>

        <div className="ball-shape">
          <div className="ball-content">
            <h3 className="h3-ball">The Magic Lazy Ball answers...</h3>
            <div className="display-answer">
              <h4 className="answer-value">insert the input value here</h4>
            </div>
          </div>
          <button className="do-it-again">Do it again</button>
        </div>
      </div>
      <footer>
        Made with Love by <a href="dormenique.com">@dormenique</a>
      </footer>
    </body>
  );
}

export default App;
