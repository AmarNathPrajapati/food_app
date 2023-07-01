import React, { useState } from 'react'

const SignUp = () => {
    //collecting form data into userData to send backend
    const [userData, setUserData] = useState({
        "name":"",
        "email":"",
        "password":"",
        "location":""
    })
    const handleChange = (e) =>{
        setUserData({
            ...userData,[e.target.name]:e.target.value
        })
    }
    //connection to backend with post using fetch API
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const response =await fetch("http://localhost:5000/api/createuser",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:userData.name,
                email:userData.email,
                password:userData.password,
                location:userData.location
            })
        })
        // console.log(response);
        const json = await response.json();
        // console.log(json)
        if(!json.success){
            alert("Enter Valid Crendentials")
        }else{
            alert("User created Successfully")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h1 className="text-center">Sign Up Form</h1>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input onChange={handleChange} value={userData.name} type="text" name='name' className="form-control" id="name" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={handleChange} value={userData.email} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={handleChange} value={userData.password} type="password" name='password' className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Address</label>
                        <input onChange={handleChange} value={userData.location} type="text" name='location' className="form-control" id="location" aria-describedby="emailHelp"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default SignUp
