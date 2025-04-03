import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Code from './components/Code';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/ai" element={<Code />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />  {/* ✅ Explicit Signup Route */}
          <Route path="*" element={<Signup />} /> {/* Fallback */}
        </Routes>
    </Router>
  );
};

export default App;
