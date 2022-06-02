/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation';
import arrange from '../helpers';
import { handleReceiveContinentData, handleClearContinentData } from '../../redux/continents/continent';

const Continent = () => {
  let continentdata = useSelector((state) => state.continentdata);

  const [continentInfo, setContinentInfo] = useState({
    value: '',
    modcontinentdata: [],
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
    console.log(value);
    setContinentInfo({
      value,
    });
    let modcont = continentdata.map((data) => {
      let obj = data[value];
      console.log(obj)
      return obj;
    })

    console.log(continentdata);
    console.log()
    // modcont;

    const val = arrange(modcont, continentdata)
    console.log(val);
    continentdata = val[1];
    setContinentInfo({
      modcontinentdata : val[1],
    });
  };

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
        <div>
          <div className="forminput">
            <div style={{color: 'black'}}>Choose Category...</div>
            <select
              placeholder="Category"
              className="select"
              value={continentInfo.value}
              onChange={(e) => updateCategory(e.target.value)}
              required
            >
              <option value="" defaultValue hidden>Category</option>
              <option value="today_confirmed">today confirmed</option>
              <option value="today_deaths">today deaths</option>
              <option value="today_recovered">today recovered</option>
              <option value="today_new_open_cases">today new open cases</option>
            </select>
        </div>

        {continentInfo.modcontinentdata.length === 0
          ? (<div className="loading"><div className="load">There is nothing here!!, Choose a Category</div></div>)
          : (
            <div className="countries">
              {continentInfo.modcontinentdata.map((country, index) => (
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
                    today deaths:
                    {' '}
                    {country.today_deaths}
                  </p>
                  <p
                    className="ctc"
                  >
                    today new open cases:
                    {' '}
                    {country.today_new_open_cases}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default Continent;
