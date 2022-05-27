/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  let location = useLocation();
  console.log(location);

  const handleBack = () => {
    if (location.pathname === '/') return;
    navigate(-1);
  };

  return (
    <div className="nav" data-testid="nav-a">

      <div className="back-button">
        <div
          className="back/home"
        >
          <button onClick={handleBack}>{location.pathname === '/' ? 'home' : 'Go back'}</button>
        </div>
        <div className="year" />
      </div>

      <div className="nav-title">views</div>

      <div className="utils">
        <div className="mic" />
        <div className="settings" />
      </div>
    </div>
  );
};
export default Navigation;
