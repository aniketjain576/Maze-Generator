import { combineReducers } from 'redux';
import cellReducer from './1-components/Cell/ducks/reducer';

export default combineReducers({
  arena: cellReducer,
});
