/* eslint-disable */
import React, { useState } from 'react';
import Navigation from './Navigation';
import { useParams, useLocation, Link } from 'react-router-dom';

const Country = () => {
  // const rockets = useSelector((state) => state.rockets);
  // const dispatch = useDispatch();
  let params = useParams();
  let location = useLocation();
  // let history = useHref();
  console.log(params)
  console.log(location)
  const [] = useState([
    // logotext: 'Space Travelers\' Hub',
    // continents: ['asia', 'europe', 'africa', 'northamerica'],
      {
        id: 0,
        states: ['Japan', 'Indonesia', 'China', 'India']
      },
      {
        id: 1,
        states: ['Ukraine', 'Germany', 'France', 'Italy']
      },
      {
        states: ['SouthAfrica', 'Nigeria', 'Kenya', 'Ghana']
      },
      {
        id: 3,
        states: ['Unitedstates', 'Canada', 'Mexico', 'Greenland']
      }
    ])
  // console.log(history)

  return (
    <>
      <Navigation />
      <div>{params.country}</div>
      <div className="states">
      {location.state.states.map((state) => (
        <Link
          key={state}
          to={{
            pathname: `/${params.continent}/${params.country}/${state}}`,
          }}
          className="state"
        >
          {state}
        </Link>
      ))}
      </div>
    </>
  );
};

export default Country;
