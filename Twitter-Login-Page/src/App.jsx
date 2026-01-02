import React from "react";
import twitter from "./assets/twitter.png";
import google from "./assets/google.png"
import apple from "./assets/apple.png"

function App() {
  return (
    <div className="app">
      <div className="logo-box">
        <img src={twitter} alt="twitter" className="logo" />
        <h2>Sign In Twitter</h2>
        <button><img src={google} alt="google" /> Sign in with google</button>
        <button><img src={apple} alt="apple" className="logo2" /> Sign in with apple</button>
        <hr></hr>
        <span>or</span>
        <form>
          <input type="text" placeholder="Phone email or username" />
          <button>Next</button>
        </form>
        <button>Forget Password</button>
        <p>Dont't have an account <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
}

export default App;
