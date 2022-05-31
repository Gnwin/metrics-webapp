import showConnectionError from '../shared/error';
import * as API from '../shared/api';
import date from '../shared/covidDataDay';

// actions
const RECEIVE_CONTINENTDATA = 'metricswebapp/continents/RECEIVE_CONTINENTDATA';
const CLEAR_CONTINENTDATA = 'metricswebapp/continents/CLEAR_CONTINENTDATA';

// reducer
export default function continentdata(state = [], action) {
  switch (action.type) {
    case RECEIVE_CONTINENTDATA:
      return action.continentdata;
    case CLEAR_CONTINENTDATA:
      return action.continentdata;
    default:
      return state;
  }
}

function receivecontinentdata(continentdata) {
  return {
    type: RECEIVE_CONTINENTDATA,
    continentdata,
  };
}

function clearcontinentdata(continentdata) {
  return {
    type: CLEAR_CONTINENTDATA,
    continentdata,
  };
}

// Thunk action creators
export function handleReceiveContinentData(countries) {
  return (dispatch) => API.getAllContinentData(countries)
    .then((continentdata) => {
      console.log(continentdata);
      // eslint-disable-next-line
      const cont = continentdata.map((u) => {
        return Object.values(u.data.dates[date].countries)[0];
      });
      console.log(cont);

      dispatch(receivecontinentdata(cont));
    })
    .catch(() => {
      showConnectionError();
    });
}

export function handleClearContinentData(data) {
  return (dispatch) => {
    dispatch(clearcontinentdata(data));
  };
}
