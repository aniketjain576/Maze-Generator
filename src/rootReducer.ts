import { combineReducers } from 'redux';
import gridReducer from './1-components/Grid/ducks/reducer';
import cellReducer from './1-components/Cell/ducks/reducer';

export default combineReducers({
  grid: gridReducer,
  cell: cellReducer,
});
