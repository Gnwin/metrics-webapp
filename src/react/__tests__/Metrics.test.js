import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import App from '../components/App';
import metrics from '../../redux/shared/metricsInfo';
import store from '../../redux/configureStore';
import * as API from '../../redux/shared/api';

describe('it tests the App Component', () => {
  it('renders the metrics component as the home page in the App component when the App component is rendered', () => {
    render(<Router><Provider store={store}><App /></Provider></Router>);
    const metricsComponent = screen.getByTestId('met-1');
    expect(metricsComponent).toBeInTheDocument();
  });

  it('renders continents in metrics component', () => {
    render(<Router><Provider store={store}><App /></Provider></Router>);
    const metrics = screen.getByTestId('met-1');
    expect(metrics.childNodes[3].childNodes[1]).toHaveClass('loading');
  });

  it('checks metrics data gotten from the api call for metrics component', () => {
    API.getAllMetrics()
      .then((data) => {
        expect(data).toBe(metrics);
      });
  });
});
