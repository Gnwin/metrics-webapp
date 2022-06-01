import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Metrics = () => {
  const metrics = useSelector((state) => state.metrics);
  const loading = useSelector((state) => state.loading);

  return (
    <div data-testid="met-1">
      <Navigation />
      <div
        className="hero"
      >
        <div
          className="info"
        >
          <div className="hp">2020-03-22</div>
          <p>COVID DATA</p>
          <p className="num">54894538</p>
          <p className="deat">infected</p>
        </div>
      </div>

      <div className="all-stats">
        <h1 className="stats-title">ALL STATS</h1>
        <div className="stats">
          <div className="infected">
            <p>54894538</p>
            <small className="st">infected</small>
          </div>
          <div className="recovered">
            <p>348348</p>
            <small className="st">deaths</small>
          </div>
          <div className="deaths">
            <p>348945</p>
            <small className="st">recovered</small>
          </div>
        </div>
      </div>

      <div className="continentss">
        <h1 className="stats-title">CONTINENTS</h1>
        {loading
          ? (<div className="loading" data-testid="load1"><div className="load">loading...</div></div>)
          : (
            <div className="continents" data-testid="cont">
              {metrics.map((item, index) => (
                <Link
                  key={item.id}
                  to={{
                    pathname: `/${item.continent}`,
                  }}
                  state={{
                    countries: item.countries,
                    states: item.states,
                    imageurl: item.imageurl,
                  }}
                  className="continent"
                  data-testid={`cont-${index + 1}`}
                  style={{ backgroundImage: `url(${item.imageurl})` }}
                >
                  <div className="bg"><div className="bgin">{item.continent}</div></div>
                </Link>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default Metrics;
