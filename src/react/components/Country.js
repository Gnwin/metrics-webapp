import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Navigation from './Navigation';

const Country = () => {
  // const rockets = useSelector((state) => state.rockets);
  // const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();

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
