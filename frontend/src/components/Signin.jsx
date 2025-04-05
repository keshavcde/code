// import React, { useState } from 'react'
// import axios from "axios"
// import Signup from './Signup';

// const Signin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handlebtn = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/user/signin",
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.status === 200) {
//         localStorage.setItem("token", response.data.token);
//         alert("Sign in successfully");
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         alert("The user does not exist");
//       } else if (error.response && error.response.status === 401) {
//         alert("Incorrect password");
//       } else {
//         console.error("Axios error:", error.message);
//         alert("An error occurred. Please try again.");
//       }
//     }

//   }
//   return (
//     <div>
//       <div>
//         <h1>SIGNIN PAGE</h1>
//         <input type="text" name="" id="" placeholder='enter the email' onChange={(e) => {
//           setEmail(e.target.value);
//         }} /><br />
//         <br />
//         <input type="text" name="" id="" placeholder='enter the password' onChange={(e) => {
//           setPassword(e.target.value);
//         }} /><br />
//         <br />
//         <button onClick={handlebtn}>SIGN IN</button>
//         <button onClick={() => navigate("/signup")}>SIGN UP</button>
//       </div>
//     </div>
//   )
// }

// export default Signin



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate
// import axios from "axios";
// import './login.css'

// const Signin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();  // ✅ Initialize navigation

//   const handlebtn = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/user/signin",
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.status === 200) {
//         localStorage.setItem("token", response.data.token);
//         alert("Sign in successfully");
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         alert("The user does not exist");
//       } else if (error.response && error.response.status === 401) {
//         alert("Incorrect password");
//       } else {
//         console.error("Axios error:", error.message);
//         alert("An error occurred. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="login_div" >
//       <h1 className="login_h1">SIGNIN PAGE</h1>
//       <input
//         className="login_input"
//         type="text"
//         placeholder="Enter the email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <br />
//       <input
//         className="login_pass"
//         type="password"  // ✅ Use type="password" for security
//         placeholder="Enter the password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <br />
//       <button className="login_but" onClick={handlebtn}>SIGN IN</button>
//       <button className="logup_but" onClick={() => navigate("/signup")}>SIGN UP</button>  {/* ✅ Fixed button */}
//     </div>
//   );
// };

// export default  Signin;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlebtn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signin",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        alert("Sign in successfully");
        navigate("/ai");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        alert("The user does not exist");
      } else if (error.response?.status === 401) {
        alert("Incorrect password");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="papa">
    <div className="video-container">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="C:\Users\jangi\Desktop\github\cdoegit\code\frontend\public\video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="login_div">
        <h1 className="login_h1">SIGNIN PAGE</h1>
        <input className="login_input" type="text" placeholder="Enter the email" onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <input className="login_pass" type="password" placeholder="Enter the password" onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button className="login_but" onClick={handlebtn}>SIGN IN</button>
        <button className="logup_but" onClick={() => navigate("/signup")}>SIGN UP</button>
      </div>
    </div>
    </div>
  );
};

export default Signin;
