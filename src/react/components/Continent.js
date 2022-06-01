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
    <div data-testid="count-1">
      <Navigation />
      <div
        className="cont-head"
        data-testid="count-2"
        style={{ backgroundImage: `url(${location.state.imageurl})` }}
      >
        <div className="bgi"><div className="bgiin">{params.continent}</div></div>
      </div>
      {continentdata.length === 0
        ? (<div className="loading"><div className="load">loading...</div></div>)
        : (
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
                <p className="cname">{country.name}</p>
                <p className="ctc">
                  today confirmed:
                  {' '}
                  {country.today_confirmed}
                </p>
                <p className="ctc">
                  todays cases:
                  {' '}
                  {country.today_open_cases}
                </p>
                <p className="ctc">
                  today new confirmed:
                  {' '}
                  {country.today_new_confirmed}
                </p>
                <p className="ctc">
                  today recovered:
                  {' '}
                  {country.today_recovered}
                </p>
                <p
                  className="ctc"
                >
                  todays deaths:
                  {' '}
                  {country.today_deaths}
                </p>
              </Link>
            ))}
          </div>
        )}
    </div>
  );
};

export default Continent;
