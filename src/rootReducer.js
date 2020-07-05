import { combineReducers } from 'redux';
import arenaReducer from './1-components/Cell/ducks/reducer';

export default combineReducers({
  arena: arenaReducer,
});
