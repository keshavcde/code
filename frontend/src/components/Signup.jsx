// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom"; // 🔹 Import useNavigate
// // import Signin from "./Signin";

// // const Signup = () => {
// //     const [username, setUsername] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const navigate = useNavigate(); // 🔹 Initialize navigate

// //     const handleSignup = async () => {
// //         try {
// //             const response = await axios.post("http://localhost:3000/user/signup", {
// //                 username,
// //                 email,
// //                 password
// //             }, {
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 }
// //             });

// //             if (response.data.token) {
// //                 localStorage.setItem("token", response.data.token); // ✅ Store JWT for authentication
// //                 alert("Signup successful!");
// //                 navigate("/ai"); // ✅ Redirect to /ai (Code component)
// //             }
// //         } catch (error) {
// //             console.error("Signup error:", error);
// //             alert("Signup failed. Try again.");
// //         }
// //     };

// //     return (
// //         <div>
// //             <h1>SIGNUP PAGE</h1>
// //             <input type="text" placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)} /><br /><br />
// //             <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} /><br /><br />
// //             <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} /><br /><br />
// //             <button onClick={handleSignup}>SIGN UP</button>
// //             <button formaction="Signin.jsx">SIGN IN</button>
// //         </div>
// //     );
// // };

// // export default Signup;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import './sign.css'

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // ✅ Initialize navigation

    const handleSignup = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/user/signup",
                { username, email, password },
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.data.token) {
                localStorage.setItem("token", response.data.token); // ✅ Store JWT
                alert("Signup successful!");
                navigate("/ai"); // ✅ Redirect to /ai (Code component)
            }
        } catch (error) {
            console.error("Signup error:", error);
            alert("Signup failed. Try again.");
        }
    };

    return (
        <div className="papa2">
        <div className="sign_div">
            <video autoPlay muted loop playsInline className="bg-video">
                <source src="C:\Users\jangi\Desktop\github\cdoegit\code\frontend\public\video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <h1 className="sign_h1">SIGNUP PAGE</h1>
            <input className="sign_user"
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
            /><br></br>

            <input
                className="sign_email"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
            /><br></br>

            <input
                className="sign_pass"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
            /><br></br>

            <button className="signup_but" onClick={handleSignup}>SIGN UP</button>
            <button className="signin_but" onClick={() => navigate("/signin")}>SIGN IN</button>  {/* ✅ Fixed navigation */}
            </div>
        </div>
    );
};

export default Signup;
