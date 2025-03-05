import {combineReducers} from 'redux';

import register from './components/Register/reducer';
import forgetPassword from './components/ForgetPassword/reducer';
import zCoin from './components/ZCoin/reducer';
import summary from './components/Summary/reducer';
import exchangeRecord from './components/Exchange/reducer';

export default combineReducers({register, forgetPassword, zCoin, summary, exchangeRecord})
