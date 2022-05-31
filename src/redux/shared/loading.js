// actions
const RECEIVE_METRICS = 'metricswebapp/metrics/RECEIVE_METRICS';
const RECEIVE_CONTINENTDATA = 'metricswebapp/continents/RECEIVE_CONTINENTDATA';
const CLEAR_CONTINENTDATA = 'metricswebapp/continents/CLEAR_CONTINENTDATA';
const RECEIVE_COUNTRYDATA = 'metricswebapp/countries/RECEIVE_COUNTRYDATA';
const CLEAR_COUNTRYDATA = 'metricswebapp/countries/CLEAR_COUNTRYDATA';

// reducer
export default function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_METRICS:
      return false;
    case RECEIVE_CONTINENTDATA:
      return false;
    case CLEAR_CONTINENTDATA:
      return false;
    case RECEIVE_COUNTRYDATA:
      return false;
    case CLEAR_COUNTRYDATA:
      return false;
    default:
      return state;
  }
}
