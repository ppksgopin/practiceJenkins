import {combineReducers} from 'redux';
import carOrder from './CarOrder/reducer';
import userAppointment from './data/reducer';


export default combineReducers({ carOrder,  userAppointment}) ;
