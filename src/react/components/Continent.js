import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation';
import { handleReceiveContinentData, handleClearContinentData } from '../../redux/continents/continent';

const Continent = () => {
  const continentdata = useSelector((state) => state.continentdata);

  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    if (continentdata.length !== 0) {
      dispatch(handleClearContinentData([]));
    }
    dispatch(handleReceiveContinentData(location.state.countries));
  }, []);

  return (
    <>
      <Navigation />
      <div>{params.continent}</div>
      <div className="countries">
        {continentdata.map((country, index) => (
          <Link
            key={country.id}
            to={{
              pathname: `/${params.continent}/${country.id}`,
            }}
            state={{
              country: country.id,
              states: location.state.states[index],
            }}
            className="country"
          >
            {country.name}
            {country.today_confirmed}
            {country.today_open_cases}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Continent;
