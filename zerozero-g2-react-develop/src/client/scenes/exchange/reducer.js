import {combineReducers} from 'redux';

import search from './components/Search/reducer';
import index from './components/Index/reducer';
import affordable from './components/common/AffordableItemList/reducer';
import item  from './components/ItemIntro/reducer';
import record from './components/Record/reducer';
//v2.10.0
import exchangeList from './components/ExchangeList/reducer';
import quickSearch from './components/QuickSearch/reducer';

export default combineReducers({search, index, affordable, item, record, exchangeList, quickSearch});