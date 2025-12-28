import React, { useState } from "react";

function App() {
  // making state for our applications
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Logic

  const handleSubmit = (e) => {
    e.preventDefault();
    if(weight === 0 || height === 0){
      alert("Please Enter a valid value");
    }else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      //

      if(bmi<25){
        setMessage("You are Underweight")
      }else if(bmi>=25 && bmi <30){
        setMessage("You are a healthy weight")
      }else{
        setMessage("You are overweigth")
      }
    }
  };

  // Reload

  let relaod = ()=>{
    window.location.reload()
  }

  return (
    <div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Wieght(ibs)</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(in)</label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={relaod}>
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
