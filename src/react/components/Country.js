import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation';
import { handleReceiveCountryData, handleClearCountryData } from '../../redux/countries/country';

const Country = () => {
  const countrydata = useSelector((state) => state.countrydata);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    if (countrydata.length !== 0) {
      dispatch(handleClearCountryData([]));
    }
    dispatch(handleReceiveCountryData(params.country, location.state.states));
  }, []);

  console.log(countrydata);

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
          <div className="states">
            {countrydata.map((state) => (
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
        )}
    </>
  );
};

export default Country;
