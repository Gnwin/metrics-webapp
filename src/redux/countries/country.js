import showConnectionError from '../shared/error';
import * as API from '../shared/api';
import date from '../shared/covidDataDay';

// actions
const RECEIVE_COUNTRYDATA = 'metricswebapp/continentdata/RECEIVE_COUNTRYDATA';
const CLEAR_COUNTRYDATA = 'metricswebapp/countrydata/CLEAR_COUNTRYDATA';

// reducer
export default function countrydata(state = [], action) {
  switch (action.type) {
    case RECEIVE_COUNTRYDATA:
      return action.countrydata;
    case CLEAR_COUNTRYDATA:
      return action.countrydata;
    default:
      return state;
  }
}

function receivecountrydata(countrydata) {
  return {
    type: RECEIVE_COUNTRYDATA,
    countrydata,
  };
}

function clearcountrydata(countrydata) {
  return {
    type: CLEAR_COUNTRYDATA,
    countrydata,
  };
}

// Thunk action creators
export function handleReceiveCountryData(country, states) {
  return (dispatch) => API.getAllCountryData(country, states)
    .then((countrydata) => {
      console.log(countrydata);
      // eslint-disable-next-line
      const cont = countrydata.map((u) => {
        console.log(Object.values(u.data.dates[date].countries)[0].regions[0]);
        return Object.values(u.data.dates[date].countries)[0].regions[0];
      });
      dispatch(receivecountrydata(cont));
    })
    .catch(() => {
      showConnectionError();
    });
}

export function handleClearCountryData(data) {
  return (dispatch) => {
    dispatch(clearcountrydata(data));
  };
}
