import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/stylesheets/App.css';
import Metrics from './Metrics';
import Continent from './Continent';
import Country from './Country';
import { handleReceiveMetrics } from '../../redux/metrics/metrics';

const App = () => {
  const metrics = useSelector((state) => state.metrics);
  const dispatch = useDispatch();

  useEffect(() => {
    if (metrics.length === 0) {
      dispatch(handleReceiveMetrics());
    }
  }, []);

  return (
    <div className="app" data-testid="app-1">
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Metrics />} />
          <Route path="/:continent" element={<Continent />} />
          <Route path="/:continent/:country" element={<Country />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
