import { combineReducers } from 'redux';
import cellReducer from './1-components/Cell/ducks/reducer';
import currentCellReducer from './1-components/Arena/ducks/reducer';

export default combineReducers({
  arena: cellReducer,
  currentCell: currentCellReducer,
});
