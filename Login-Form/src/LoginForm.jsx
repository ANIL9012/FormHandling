import React, { useState } from "react";

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log(isLogin ? "LOGIN DATA" : "SIGNUP DATA");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleForgotPassword = () => {
    if (!email) {
      alert("Please enter your email first");
      return;
    }

    console.log("FORGOT PASSWORD");
    console.log("Email:", email);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <h2>{isLogin ? "Login Form" : "SignUp Form"}</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={isLogin ? "Password" : "Confirm Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={`eye-icon ${showPassword ? "hide" : ""}`}
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </span>
          </div>

          {isLogin && (
            <a href="#" onClick={handleForgotPassword}>
              Forgot Password?
            </a>
          )}

          <button type="submit">{isLogin ? "Login" : "SignUp"}</button>

          {isLogin && (
            <p>
              Not a Member?{" "}
              <a href="#" onClick={() => setIsLogin(false)}>
                SignUp now
              </a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
