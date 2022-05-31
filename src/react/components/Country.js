import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation';
import { handleReceiveCountryData, handleClearCountryData } from '../../redux/countries/country';

const Country = () => {
  const countrydata = useSelector((state) => state.countrydata);

  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    if (countrydata.length !== 0) {
      dispatch(handleClearCountryData([]));
    }
    dispatch(handleReceiveCountryData(params.country, location.state.states));
  }, []);

  return (
    <>
      <Navigation />
      <div>{params.country}</div>
      <div className="states">
        {countrydata.map((state) => (
          <div
            key={state.id}
            className="state"
          >
            {state.name}
            {state.today_confirmed}
            {state.today_open_cases}
          </div>
        ))}
      </div>
    </>
  );
};

export default Country;
