import showConnectionError from '../shared/error';
import * as API from '../shared/api';

// actions
const RECEIVE_METRICS = 'metricswebapp/metrics/RECEIVE_METRICS';

// reducer
export default function metrics(state = [], action) {
  switch (action.type) {
    case RECEIVE_METRICS:
      return action.metrics;
    default:
      return state;
  }
}

// action creators
function receiveMetrics(metrics) {
  return {
    type: RECEIVE_METRICS,
    metrics,
  };
}

// Thunk action creators
export function handleReceiveMetrics() {
  return (dispatch) => API.getAllMetrics()
    .then((metrics) => {
      dispatch(receiveMetrics(metrics));
    })
    .catch(() => {
      showConnectionError();
    });
}
