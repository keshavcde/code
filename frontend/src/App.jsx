// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Signup from './components/Signup';
// import Signin from './components/Signin';
// import Code from './components/Code';

// const App = () => {
//   return (
//     <Router>
//         <Routes>
//           <Route path="/ai" element={<Code />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/signup" element={<Signup />} />  {/* ✅ Explicit Signup Route */}
//           <Route path="*" element={<Signup />} /> {/* Fallback */}
//         </Routes>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Signup from "./components/Signup";
// import Signin from "./components/Signin";
// import Code from "./components/Code";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//               {/* Default Route (Redirects to Signin) */}
//         <Route path="/" element={<Navigate to="/signin" />} />

//         {/* Defined Routes */}
//         <Route path="/ai" element={<Code />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Fallback Route (Redirects to Signin instead of Signup) */}
//         <Route path="*" element={<Navigate to="/signin" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Code from "./components/Code";
import "./App.css"; // ⬅️ make sure this exists

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);

    // Fully remove splash after fade-out finishes (0.5s later)
    const splashTimer = setTimeout(() => setShowSplash(false), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(splashTimer);
    };
  }, []);

  if (showSplash) {
    return (
      <iframe
        src="/logo.svg"
        title="Splash Logo"
        className={`splash-screen ${fadeOut ? "fade-out" : ""}`}
      />
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/ai" element={<Code />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
};

export default App;

