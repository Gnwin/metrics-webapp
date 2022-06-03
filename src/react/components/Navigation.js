import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import home from '../../assets/images/home.png';
import back from '../../assets/images/back.png';
import settings from '../../assets/images/settings.png';
import mic from '../../assets/images/mic.png';

const Navigation = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const handleBack = () => {
    if (location.pathname === '/') return;
    navigate(-1);
  };

  return (
    <div className="nav" data-testid="nav-a">
      <div className="back-button">
        <div
          className="back"
        >
          <button
            onClick={handleBack}
            type="button"
            className="backb"
          >
            {location.pathname === '/' ? <img src={home} alt="" className="imgw" /> : <img src={back} alt="" className="imgw" />}
          </button>
        </div>
        <div className="year">{Object.keys(params).length === 1 ? '2020-03-22' : ''}</div>
      </div>

      {location.pathname === '/' && (
        <div className="nav-title">2020-03-22 stats</div>
      )}
      {Object.keys(params).length === 1 && (
        <div className="nav-title">most infections</div>
      )}
      {Object.keys(params).length === 2 && (
        <div className="nav-title">town/city infections</div>
      )}

      <div className="utils">
        <div className="mic">{location.pathname !== '/' ? <img src={mic} alt="" className="imgw" /> : ''}</div>
        <div className="settings">
          <img src={settings} alt="" className="imgw" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
