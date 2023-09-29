import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    //collecting form data into userData to send backend
    const [userData, setUserData] = useState({
        "email":"",
        "password":"",
    })
    const handleChange = (e) =>{
        setUserData({
            ...userData,[e.target.name]:e.target.value
        })
    }
    //connection to backend with post using fetch API
    const navigate = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const response =await fetch("http://localhost:5000/api/login",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:userData.email,
                password:userData.password,
            })
        })
        // console.log(response);
        const json = await response.json();
        // console.log(json)
        if(!json.success){
            alert("Enter Valid Crendentials")
        }else{
            // alert("Logged In Successful");
            localStorage.setItem("authtoken",json.authtoken);
            navigate('/');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h1 className="text-center">Login</h1>
        
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={handleChange} value={userData.email} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={handleChange} value={userData.password} type="password" name='password' className="form-control" id="exampleInputPassword1" />
                    </div>

                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login
