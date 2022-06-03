import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation';
import { handleReceiveCountryData, handleClearCountryData } from '../../redux/countries/country';
import Input from './Input';

const Country = () => {
  const countrydata = useSelector((state) => state.countrydata);
  const loading = useSelector((state) => state.loading);

  const [countryInfo, setCountryInfo] = useState({
    value: '',
  });

  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const data = location.state.states.filter((s) => s[0][0] === params.country);

  useEffect(() => {
    if (countrydata.length !== 0) {
      dispatch(handleClearCountryData([]));
    }
    dispatch(handleReceiveCountryData(params.country, data[0][1]));
  }, []);

  const updateCategory = (value) => {
    setCountryInfo({
      value,
    });
  };

  const showingCountries = countryInfo.value === ''
    ? countrydata
    : countrydata.filter((country) => (
      country.name.toLowerCase().includes(countryInfo.value.toLowerCase())
    ));

  return (
    <>
      <Navigation />
      <div
        className="state-head"
      >
        <div className="bgiiin">{params.country}</div>
      </div>

      {countrydata.length === 0 || loading
        ? (<div className="loading"><div className="load">loading...</div></div>)
        : (
          <div>
            <div className="forminput">
              <div style={{ color: 'black' }}>Search Region:</div>
              <Input value={countryInfo.value} onchange={updateCategory} placeholder="region" />
            </div>

            <div className="states">
              {showingCountries.length === 0 && (
                <div className="loading">
                  <div className="load">No Matches</div>
                </div>
              )}
              {showingCountries.map((state) => (
                <div
                  key={state.id}
                  className="state"
                >
                  <div className="ccname">
                    <p>{state.name}</p>
                    <div>
                      <p
                        className="ctc"
                      >
                        today new confirmed:
                        {'  '}
                        {state.today_confirmed}
                      </p>
                      <p
                        className="ctc"
                      >
                        today open cases:
                        {'  '}
                        {state.today_open_cases}
                      </p>
                      <p
                        className="ctc"
                      >
                        todays deaths:
                        {'  '}
                        {state.today_deaths}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
    </>
  );
};

export default Country;
