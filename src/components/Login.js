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
    <div className="container">
    <h1 className="text-center mb-4">Login</h1>
    
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="form-group mb-2 col-md-6">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          className="form-control"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="form-group mb-4 col-md-6">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          className="form-control"
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      <center><button type="submit" className="btn btn-primary mb-4">Submit</button></center>
 
       <center>
      <p className="forgot-password text-right">
        Not a member <Link to="/signup">Sign up?</Link>
      </p>
      </center>
    </form>
  </div>
     
  );
}

export default Login;