import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import '../../assets/stylesheets/App.css';
import Metrics from './Metrics';
import Continent from './Continent';
import Country from './Country';
import State from './State';
// import { handleReceiveRockets } from '../../redux/rockets/rocket';

const App = () => {
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(handleReceiveRockets());
  }, []);

  return (
    <div className="app" data-testid="app-1">
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Metrics />} />
          <Route path="/:continent" element={<Continent />} />
          <Route path="/:continent/:country" element={<Country />} />
          <Route path="/:continent/:country/:state" element={<State />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
