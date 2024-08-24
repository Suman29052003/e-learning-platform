import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { ToastProvider } from "./context/ToastProvider";
import OnlineDegree from "./pages/OnlineDegree";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import CourseDetail from "./components/CourseDetail";

const App = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <ToastProvider>
      <Router>
        <div className="max-w-full m-0 p-0">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/degree" element={<OnlineDegree />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />          </Routes>
        </div>
          <Footer />
      </Router>
    </ToastProvider>
  );
};

export default App;
