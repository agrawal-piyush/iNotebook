import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
export default function Login(props) {
  const [Credentials,setCredentials]=useState({email:"",password:""})
 let navigate =useNavigate()

    const handleSubmit= async(e)=>{
    e.preventDefault()
    
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
       
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    body:JSON.stringify({email:Credentials.email,password:Credentials.password})
    
    })
    const json = await response.json()
    if(json.success){
        setCredentials({email:"",password:""})

        //redirect
        
        localStorage.setItem('token',json.authToken)
        //console.log(localStorage)
        navigate("/")
        props.showAlert("Login Successfully","success")
    }
    else{
      props.showAlert(json.error,"danger")
    }
    
}
  
  const onChange=(e)=>{

    setCredentials({...Credentials,[e.target.name]:e.target.value})
    
  }
  
    return (
    <div className="mt-3">
      <h2 className="my-3"> Login to continue to INotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name = "email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={Credentials.email}
            onChange={onChange}
          />
          <small id="emailtext" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
            value={Credentials.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
}
