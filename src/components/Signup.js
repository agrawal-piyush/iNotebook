import React,{useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup(props) {
    const [Credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""})
 let navigate =useNavigate()

    const handleSubmit= async(e)=>{
    e.preventDefault()
    const{name,email,password} =Credentials
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
       
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    body:JSON.stringify({name,email,password})
    
    })
    const json = await response.json()
    //console.log(json.authToken)
    if (json.success){
        setCredentials({email:"",password:"",cpassword:"",name:""})

        //redirect
        //console.log(json.authToken)
        localStorage.setItem('token',json.authToken)

        navigate("/")
        props.showAlert("Account Created Successfully","success")
    }
    else {
        
        props.showAlert(json.error,"danger")
    }
    
    
}
  
  const onChange=(e)=>{

    setCredentials({...Credentials,[e.target.name]:e.target.value})
    
  }
  

  return (
    <div className="container mt-3">
     
      <h2 className="my-3"> Create an account to use INotebook</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            onChange={onChange}
            required
            minLength={3}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
            required
            
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={onChange}
            required
            minLength={5}

          />
          <div className="form-group my-3">
            <input
              type="password"
              name="cpassword"
              className="form-control"
              id="cpassword"
              placeholder="Confirm Password"
              onChange={onChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
