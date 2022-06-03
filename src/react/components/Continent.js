import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation';
import { handleReceiveContinentData, handleClearContinentData } from '../../redux/continents/continent';
import Input from './Input';

const Continent = () => {
  const continentdata = useSelector((state) => state.continentdata);
  const loading = useSelector((state) => state.loading);

  const [continentInfo, setContinentInfo] = useState({
    value: '',
  });

  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    if (continentdata.length !== 0) {
      dispatch(handleClearContinentData([]));
    }
    dispatch(handleReceiveContinentData(location.state.countries));
  }, []);

  const updateCategory = (value) => {
    setContinentInfo({
      value,
    });
  };

  const showingContinent = continentInfo.value === ''
    ? continentdata
    : continentdata.filter((country) => (
      country.name.toLowerCase().includes(continentInfo.value.toLowerCase())
    ));

  return (
    <>
      <Navigation />
      <div
        className="cont-head"
        style={{ backgroundImage: `url(${location.state.imageurl})` }}
      >
        <div className="bgi"><div className="bgiin">{params.continent}</div></div>
      </div>

      {continentdata.length === 0 || loading
        ? (<div className="loading"><div className="load">loading...</div></div>)
        : (
          <div>
            <div className="forminput">
              <div style={{ color: 'black' }}>Search Country:</div>
              <Input value={continentInfo.value} onchange={updateCategory} placeholder="country" />
            </div>

            <div className="countries">
              {showingContinent.length === 0 && (
                <div className="loading">
                  <div className="load">No Matches</div>
                </div>
              )}
              {showingContinent.map((country) => (
                <Link
                  key={country.id}
                  to={{
                    pathname: `/${params.continent}/${country.id}`,
                  }}
                  state={{
                    country: country.id,
                    states: location.state.states,
                  }}
                  className="country"
                >
                  <p className="cname">{country.name}</p>
                  <p className="ctc">
                    today confirmed:
                    {'  '}
                    {country.today_confirmed}
                  </p>
                  <p className="ctc">
                    todays cases:
                    {'  '}
                    {country.today_open_cases}
                  </p>
                  <p className="ctc">
                    today new confirmed:
                    {'  '}
                    {country.today_new_confirmed}
                  </p>
                  <p className="ctc">
                    today recovered:
                    {'  '}
                    {country.today_recovered}
                  </p>
                  <p
                    className="ctc"
                  >
                    todays deaths:
                    {'  '}
                    {country.today_deaths}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
    </>
  );
};

export default Continent;
