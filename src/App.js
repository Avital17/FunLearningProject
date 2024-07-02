import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import HomePage from './HomePage';
import LoginPageStudent from './Student/LoginPageStudent';
import SignUp from "./Student/SignUp";
import HomeStudent from "./Student/HomeStudent";
import HomeParent from "./Parent/HomeParent";
import LoginPageParent from "./Parent/LoginPageParent";
import SignUpParent from "./Parent/SignUpParent";
import HomeTeacher from "./Teacher/HomeTeacher";
import LoginPageTeacher from "./Teacher/LoginPageTeacher";
import SignUpTeacher from "./Teacher/SignUpTeacher";

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/HomeStudent" element={<HomeStudent/>} />
          <Route path="/HomeStudent/LoginPageStudent" element={<LoginPageStudent />} />
          <Route path="/HomeStudent/SignUp" element={<SignUp />} />
          <Route path="/HomeParent" element={<HomeParent/>} />
          <Route path="/HomeParent/LoginPageParent" element={<LoginPageParent />} />
          <Route path="/HomeParent/SignUpParent" element={<SignUpParent />} />
          <Route path="/HomeTeacher" element={<HomeTeacher/>} />
          <Route path="/HomeTeacher/LoginPageTeacher" element={<LoginPageTeacher/>} />
          <Route path="/HomeTeacher/SignUpTeacher" element={<SignUpTeacher/>} />


          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
