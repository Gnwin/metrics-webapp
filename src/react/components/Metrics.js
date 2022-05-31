import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Metrics = () => {
  const metrics = useSelector((state) => state.metrics);
  const loading = useSelector((state) => state.loading);

  return (
    <div>
      <Navigation />
      <div className="hero">
        <div className="info">
          <p>2020-03-22 COVID DATA</p>
          <p>4000 deaths</p>
        </div>
      </div>

      <div className="all-stats">
        <h1 className="stats-title">ALL STATS</h1>
        <div className="stats">
          <div className="infected">54894538</div>
          <div className="recovered">348348</div>
          <div className="deaths">348945</div>
        </div>
      </div>

      <div className="continentss">
        <h1 className="stats-title">CONTINENTS</h1>
        <div className="continents">
          {loading ? <div className="loading">loading...</div> : metrics.map((item) => (
            <Link
              key={item.id}
              to={{
                pathname: `/${item.continent}`,
              }}
              state={{
                countries: item.countries,
                states: item.states,
              }}
              className="continent"
            >
              {item.continent}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
