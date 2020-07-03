import { combineReducers } from 'redux';
import arenaReducer from './1-components/Arena/ducks/reducer';

export default combineReducers({
  arena: arenaReducer,
});
