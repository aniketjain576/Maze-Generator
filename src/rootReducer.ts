import { combineReducers } from 'redux';
import cellReducer from './1-components/Cell/ducks/reducer';
import currentCellReducer from './1-components/Grid/ducks/reducer';

export default combineReducers({
  grid: cellReducer,
  currentCell: currentCellReducer,
});
