import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Navigation from './Navigation';

const Continent = () => {
  // const rockets = useSelector((state) => state.rockets);
  // const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  // let history = useHref();
  console.log(params);
  console.log(location);
  // console.log(history)

  useEffect(() => {});

  return (
    <>
      <Navigation />
      <div>{params.continent}</div>
      <div className="countries">
        {location.state.countries.map((country, index) => (
          <Link
            key={country}
            to={{
              pathname: `/${params.continent}/${country}`,
            }}
            state={{
              country,
              states: location.state.states[index],
            }}
            className="country"
          >
            {country}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Continent;
