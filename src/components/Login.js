import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

function Login() {
 
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  let navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
        
        navigate("/home");
      
    }

  return (
    <div>
      <h1>Login</h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
        />
        <button type="submit">Submit</button>

        <p className="forgot-password text-right">
          Not a member <Link to="/signup">Sign up?</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;