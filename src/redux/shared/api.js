/* eslint-disable */
import axios from 'axios';
import metrics from './metricsInfo';

const baseUrl = 'https://api.covid19tracking.narrativa.com/api/2020-03-22/country'

export const getAllMetrics = () => new Promise((res) => {
  setTimeout(() => {
    res(metrics);
  }, 2000);
});

export const getAllContinentData = (countries) => {
  const res = countries.map((region) => axios.get(`${baseUrl}/${region}`));
  return Promise.all(res);
}

export const getAllCountryData = (country, states) => {
  const res = states.map((region) => axios.get(`${baseUrl}/${country}/region/${region}`));
  return Promise.all(res);
}
