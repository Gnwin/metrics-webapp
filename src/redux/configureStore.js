import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import metrics from './metrics/metrics';
import continentdata from './continents/continent';
import countrydata from './countries/country';
import loading from './shared/loading';
import middleware from './middleware';

const rootReducer = combineReducers({
  metrics,
  continentdata,
  countrydata,
  loading,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
