import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { saveUser,storeToken } from "./utils/auth";
import './login.css'

function Login({setIsLoggedIn,setUserId}) {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
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
  function handleLoginSuccess(response) {
    const data = response.data
    setUserId(data.id); // set the userId state to the id of the logged-in user
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)  
        fetch('https://grace-portfolio-app.onrender.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            response.json().then((err)=>setErrors([err.errors]))
          }
          setLoading(false)
        })
        .then(data => {
          // Store session ID in browser storage
          setIsLoggedIn(true);
          // console.log(data.data)
          saveUser(data.data.id)
          storeToken(data.data.token)
          //  console.log(data)
          navigate('/home');
        });   
      
      
    }
  console.log(errors)
  return (
    <div className="contained">
    <h1 className="text-center mb-4">Login</h1>
    
    <form onSubmit={handleSubmit} >
      <div className="row justify-content-center">
      <div className="form-group mb-2 col-md-4">
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
      </div>
      <div className="row justify-content-center">
      <div className="form-group mb-4 col-md-4">
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
      </div>
      { loading ? (<div className="d-flex align-items-center">
                                        <strong>Please Wait...</strong>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> ): (
                        <center><button type="submit" className="btn btn-primary mb-4">Login</button></center>
                        )
            }
      {errors.length > 0 && (
                <div className="text-danger">
                {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                ))}
                </div>
            )}
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