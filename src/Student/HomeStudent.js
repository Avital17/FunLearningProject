import React from 'react';
import './HomeStudent.css';
import icon1 from '../Assets/contract.png';
import icon2 from '../Assets/user.png';
import { useNavigate } from 'react-router-dom';

function HomeStudent() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/HomeStudent/signup');
  };

  const handleLoginClick = () => {
    navigate('/HomeStudent/LoginPageStudent');
  };

  return (
    <div className="home-container">
      <h1>ברוכים הבאים</h1>
      <div className="button-container">
        <div className="button-with-image">
          <img src={icon2} alt="First Button" />
          <button className="home-button" onClick={handleLoginClick}>התחברות</button>
        </div>
        <div className="button-with-image">
          <img src={icon1} alt="Second Button" />
          <button className="home-button" onClick={handleSignUpClick}>הרשמה</button>
        </div>
      </div>
    </div>
  );
}

export default HomeStudent;
