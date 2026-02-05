
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try{
       const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/products")
    } catch(err) {
      console.log("Invalid Credentials");
    }
   
  };

  return (
    <div className="row justify-content-center">
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h3 className="text-center">Customer Login</h3>
        </div>
        <div className="card-body">
          <form onSubmit={submit}>
            <div className="row">
              <input 
                placeholder="Email" 
                className="form-control"
                type="email"
                onChange={e => setEmail(e.target.value)}
                required />
            </div>
            <div className="row">
              <input 
                type="password" 
                placeholder="Password" 
                className="form-control"
                onChange={e => setPassword(e.target.value)} 
                style={{marginTop:"1%"}}
                required/>
            </div>
            <div className="row">
              <button className="btn btn-outline-success" style={{marginTop:"1%"}}>Login</button>
            </div>
          </form>
          <p className="text-center mt-3">New User? <Link to="/register">Register</Link></p>
        </div>
      </div>

    </div>
  );
}
