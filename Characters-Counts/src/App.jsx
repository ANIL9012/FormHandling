import React, { useState } from "react";

function App() {

  const [text, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  const handleTextchange = (e) => {
    const inputText = e.target.value;
    setText(inputText)

    //calculate charecter

    const characters = inputText.replace(/\s+/g, "");
    setCharacterCount(characters.length);

    const sentences = inputText.trim().split(/[.!?](\s|$)/).filter(sentece => sentece.trim().length > 0);
    setSentenceCount(sentences.length);

  }

  const resetCounter = () => {
    setText("");
    setCharacterCount("")
    setSentenceCount("")
  }

  return (
    <div className="container">
      <div className="container_middle">
        <div className="right">
          <textarea
            className="text-input"
            value={text}
            onChange={handleTextchange}
            rows="6"
            placeholder="Type or paste your text here..."
          ></textarea>
          <div className="button_div">
            <button className="button-65" onClick={resetCounter}>Delete</button>
          </div>
        </div>
        {/* left section */}
        <div className="left">
          <div className="container_middle-para">
            <h1>Results</h1>
          </div>
          <div className="flex-container">
            <div>
              <p>
                <strong>Characters:</strong>
                {characterCount}
              </p>
            </div>
            {/* sentanse count */}
            <div>
              <p>
                <strong>Sentences:</strong>
                {sentenceCount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
