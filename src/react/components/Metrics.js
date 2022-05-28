import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Metrics = () => {
  const [metrics] = useState([
    {
      id: 1,
      deaths: 6677,
      infected: 879,
      recovered: 897,
      continent: 'asia',
      countries: ['japan', 'indonesia', 'china', 'india'],
      states: [
        ['hokkaido', 'tohoku', 'kanto', 'chubu'],
        ['aceh',
          'bali',
          'bengkulu',
          'banten',
        ],
        ['hainan', 'sichuan', 'henan', 'anhui'],
        ['haryana', 'assam', 'nagaland', 'odisha'],
      ],
    },
    {
      id: 2,
      deaths: 6677,
      infected: 879,
      recovered: 897,
      continent: 'europe',
      countries: ['ukraine', 'germany', 'france', 'italy'],
      states: [
        ['kyiv', 'kharkiv', 'odessa', 'dnipro'],
        ['berlin', 'bavaria', 'saxony', 'hessen'],
        ['paris', 'bretange', 'occitaine', 'normandie'],
        ['lazio', 'tuscany', 'campania', 'marche'],
      ],
    },
    {
      id: 3,
      deaths: 6677,
      infectred: 879,
      recovered: 897,
      continent: 'africa',
      countries: ['nigeria', 'kenya', 'ghana'],
      states: [
        ['abia', 'lagos', 'oyo', 'ogun'],
        ['nairobi', 'central', 'eastern', 'nyanza'],
        ['takoradi', 'accra', 'wa', 'ho'],
      ],
    },
    {
      id: 4,
      deaths: 6677,
      infectred: 879,
      recovered: 897,
      continent: 'northamerica',
      countries: ['canada', 'mexico', 'greenland'],
      states: [
        ['ontario', 'quebec', 'alberta', 'yukon'],
        ['sonora', 'guerrero', 'veracruz'],
        ['avannaata', 'kujalleq', 'qeqqata'],
      ],
    },
  ]);

  // let params = useParams();
  // let location = useLocation();
  // console.log(params);
  // console.log(location);

  return (
    <div>
      <Navigation />
      <div className="hero">
        <div className="info">
          <p>2020 COVID DATA</p>
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

      <div className="continents">
        {metrics.map((item) => (
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
  );
};

export default Metrics;
