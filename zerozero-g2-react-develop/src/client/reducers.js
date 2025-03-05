import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form/immutable";

import data from './data/reducer';
import user from './scenes/user/reducer';
import car from './scenes/car/reducer';
import electronic from './scenes/electronic/data/reducer';
import exchange from './scenes/exchange/reducer';
import enterprise from './scenes/enterprise/reducer';
import dashboard from './scenes/dashboard/reducer';
import recycleMap from './scenes/map/reducer';
import event from './scenes/events/reducer';


export default combineReducers({
    form: formReducer,
    data,
    user,
    car,
    electronic,
    exchange,
    enterprise,
    dashboard,
    recycleMap,
    event
});
