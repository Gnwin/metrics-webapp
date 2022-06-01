import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import App from '../components/App';
import store from '../../redux/configureStore';

describe('it tests the App Component', () => {
  it('renders the App Component', () => {
    render(<Router><Provider store={store}><App /></Provider></Router>);
    const appComponent = screen.getByTestId('app-1');
    expect(appComponent).toBeInTheDocument();
  });

  it('renders the metrics component as the home page in the App component when the App component is rendered', () => {
    render(<Router><Provider store={store}><App /></Provider></Router>);
    const metricsComponent = screen.getByTestId('met-1');
    expect(metricsComponent).toBeInTheDocument();
  });
})