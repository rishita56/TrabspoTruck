import React, { useState } from "react";
import "./Loginsignup.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login/signup logic here
    alert(isLogin ? "Logging in..." : "Signing up...");
  };

  return (
    <div className="auth-container">
      <div className="form-box">
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? "Login" : "Signup"}</button>
        </form>
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleForm}>
            {isLogin ? " Signup" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loginsignup;
