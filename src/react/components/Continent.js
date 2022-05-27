/* eslint-disable */
import React, {useState, useEffect} from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Navigation from './Navigation';

const Continent = () => {
  // const rockets = useSelector((state) => state.rockets);
  // const dispatch = useDispatch();
  let params = useParams();
  let location = useLocation();
  // let history = useHref();
  console.log(params);
  console.log(location);
  // console.log(history)

  // const [statesState] = useState([
  //   {
  //     id: 0,
  //     country: 'asia',
  //     states: [],
  //   },
  //   {
  //     id: 1,
  //     country: 'europe',
  //     states: [],
  //   },
  //   {
  //     id: 2,
  //     country: 'africa',
  //     states: [],
  //   },
  //   {
  //     id: 3,
  //     country: 'northamerica',
  //     states: [],
  //   }
  // ]);

  useEffect(() => {})

  // const reserve = (rocket) => {
  //   dispatch(handleReserveRocket(rocket));
  // };

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
            state = {{
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
