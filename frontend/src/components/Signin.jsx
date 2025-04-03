import React, { useState } from 'react'
import axios from "axios"

const Signin = () => {
     const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
    const handlebtn=async()=>{
        try {
            const response = await axios.post(
              "http://localhost:3000/user/signin",
              { email,password },
              { headers: { "Content-Type": "application/json" } }
            );
      
            if (response.status === 200) {
              localStorage.setItem("token", response.data.token);
              alert("Sign in successfully");
            }
          } catch (error) {
            if (error.response && error.response.status === 404) {
              alert("The user does not exist");
            } else if (error.response && error.response.status === 401) {
              alert("Incorrect password");
            } else {
              console.error("Axios error:", error.message);
              alert("An error occurred. Please try again.");
            }
          }

    }
  return (
    <div>
      <div>
        <h1>SIGNIN PAGE</h1>
       <input type="text" name="" id="" placeholder='enter the email' onChange={(e)=>{
         setEmail(e.target.value);
       }}/><br />
       <br />
        <input type="text" name="" id=""  placeholder='enter the password' onChange={(e)=>{
         setPassword(e.target.value);
       }}/><br />
        <br />
        <button onClick={handlebtn}>SIGN IN</button>
      </div>
    </div>
  )
}

export default Signin
