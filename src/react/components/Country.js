/* eslint-disable */
import React, { useState } from 'react';
import Navigation from './Navigation';
import { useParams, useLocation, Link } from 'react-router-dom';

const Country = () => {
  // const rockets = useSelector((state) => state.rockets);
  // const dispatch = useDispatch();
  let params = useParams();
  let location = useLocation();

  console.log(params);
  console.log(location);

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
