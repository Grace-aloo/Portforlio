import React,{useState} from "react";
import { useNavigate,Link } from "react-router-dom";

function Signup({setIsLoggedIn}){
   const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    username:'',
    email: "",
    password: "",
    

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
        // setIsLoggedIn(true)
        navigate("/");
      
    }
    return (
        <div>
          <h1>Sign Up</h1>
      
      <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">FirstName</label>
        <input
          type="text"
          placeholder="firstname"
          name="firstname"
          id="firstname"
          onChange={handleChange}
          value={formData.firstname}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          placeholder="Lastname"
          name="lastname"
          id="lastname"
          onChange={handleChange}
          value={formData.lastname}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          onChange={handleChange}
          value={formData.username}
        />
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
          Already registered <Link to="/">Login?</Link>
        </p>
      </form>
        </div>
    )
}
export default Signup