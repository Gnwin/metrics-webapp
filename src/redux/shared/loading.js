// actions
const RECEIVE_METRICS = 'metricswebapp/metrics/RECEIVE_METRICS';

// reducer
export default function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_METRICS:
      return false;
    default:
      return state;
  }
}
