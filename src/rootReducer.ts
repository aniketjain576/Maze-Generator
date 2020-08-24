import { combineReducers } from 'redux';
import gridReducer from './1-components/Grid/ducks/reducer';

export default combineReducers({
  grid: gridReducer,
});
