import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 🔹 Import useNavigate

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // 🔹 Initialize navigate

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:3000/user/signup", {
                username,
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.token) {
                localStorage.setItem("token", response.data.token); // ✅ Store JWT for authentication
                alert("Signup successful!");
                navigate("/ai"); // ✅ Redirect to /ai (Code component)
            }
        } catch (error) {
            console.error("Signup error:", error);
            alert("Signup failed. Try again.");
        }
    };

    return (
        <div>
            <h1>SIGNUP PAGE</h1>
            <input type="text" placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)} /><br /><br />
            <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <button onClick={handleSignup}>SIGN UP</button>
        </div>
    );
};

export default Signup;
