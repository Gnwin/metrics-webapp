import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import App from '../components/App';
import metrics from '../../redux/shared/metricsInfo';
import store from '../../redux/configureStore';
import * as API from '../../redux/shared/api';

describe('it tests the App Component', () => {
  it('checks that continent component will get data from metrics component', () => {
    render(<Router><Provider store={store}><App /></Provider></Router>);
    const metrics = screen.getByTestId('met-1');
    console.log(metrics.childNodes[3].childNodes[1])
    expect(metrics.childNodes[3].childNodes[1]).toHaveClass('loading');
  });

  it('checks if states data is correctly rendered in country component', () => {
    API.getAllMetrics()
    .then((data) => {
      expect(data[0].states).toBe(metrics[0].states);
    })
  });

  it('checks the number of states received is complete', () => {
    API.getAllMetrics()
    .then((data) => {
      expect(data[1].states.length).toBe(metrics[1].states.length);
    })
  });
})