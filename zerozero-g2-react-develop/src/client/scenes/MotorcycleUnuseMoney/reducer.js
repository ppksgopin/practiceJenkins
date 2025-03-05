import {combineReducers} from 'redux';

import appointment from './components/appointment/reducer';
import reservation from './components/Reservation/reducer';

export default combineReducers({appointment, reservation})
