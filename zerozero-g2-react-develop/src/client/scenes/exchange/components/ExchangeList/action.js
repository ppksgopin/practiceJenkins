import axios from 'axios';
import {filter, find, forEach, isEmpty, map, remove} from 'lodash';

import {exchangeType} from "../../../../commons/constants/actionTypes";

export function exchangeOrder(cb, errCB) {
    return (dispatch, getState) => {
        //console.log('getState: ', getState(), getState().form.getIn(['ExchangeListForm', 'values']).toJS());
        const deliveryData = getState().form.getIn(['ExchangeListForm', 'values']).toJS();
        const userId = getState().data.auth.getIn(['PROFILE', 'userId'])
        const exchangeList = initExchangeList(userId);
        const itemList = map(filter(exchangeList, item => item.isSelected), (item) => {
            if (item.isSelected) {
                return {id: item.itemId, itemType: item.itemType, quantity: item.itemVal}
            }
        });
        let requestData = {}
        if (!isEmpty(filter(exchangeList, (item) => item.itemType === 2 && item.isSelected))) {
            requestData = {
                deliveryOfOrder: deliveryData,
                itemList,
            }
        } else {
            requestData = {itemList};
        }

        //console.log('requestData: ', JSON.stringify(requestData, null, 2));

        return axios.post('exchange/exchange', requestData)
            .then(res => {
                dispatch({type: exchangeType.EXCHANGE_ORDER_SUCCESS, payload: res.data})
                return res;
            })
            .then(res => {
                //TODO 其他Status 的處理
                if (res.status === 200) {
                    forEach(itemList, i => {
                        remove(exchangeList, item => item.itemId === i.id)
                    });
                    dispatch(syncExchangeList(exchangeList));
                    if (typeof cb === "function") cb();
                }
            }).catch(err => {
                // console.log('exchange order fail: ', err);
                // console.log('err', err.response.data)
                if(typeof errCB === "function") {
                    errCB(err.response.data)
                }
            })
    }
}

export function checkExchangeListStatus(cb, checkSelected=false) {
    return async (dispatch, getState) => {
        const userId = getState().data.auth.getIn(['PROFILE', 'userId'])
        //直接兌換：進入購物車時，exchangeList 會比header 早進入故這裡也需判斷
        const selected = typeof localStorage.getItem('selectedItem') === 'string' ? JSON.parse(localStorage.getItem('selectedItem')) : undefined;
        if(selected){
            await dispatch(addItem(selected))
            localStorage.removeItem('selectedItem')
        }
        const exchangeList = initExchangeList(userId);
        //const selectedList = filter(exchangeList, item => item.isSelected)
        const postData = {itemIds: map(exchangeList, item => item.itemId)};
        return axios.post('exchange/items/state', postData).then(res => {
            return res.data
        }).then(res => {
            //console.log('exchangeList: ', exchangeList);
            let outStock= []
            let offMarket= []
            if(checkSelected){
                outStock = filter(exchangeList, i => i.isSelected);
                offMarket = filter(exchangeList, i => i.isSelected);
            }else{
                outStock = filter(exchangeList, i => true);
                offMarket = filter(exchangeList, i => true);
            }

            //console.log('outStock: ', outStock);
            //console.log('offMarket: ', offMarket);
            //取出庫存不足及下架的分類
            forEach(res, it => {
                remove(outStock, item => item.itemId === it.itemId && item.itemVal <= it.stock);
                remove(offMarket, item => item.itemId === it.itemId && it.onMarket)
            });

            //移除下架商品
            forEach(offMarket, i => {
                //console.log('remove offMarket: ', i)
                remove(exchangeList, item => item.itemId === i.itemId)
            });

            //加入stock property, 更新商品剩餘數量
            let newList = [];
            forEach(exchangeList, it => {
                forEach( res, i => {
                    if(it.itemId === i.itemId && (it.itemVal > i.stock)) {
                        newList.push({
                            ...it,
                            quantity: i.stock,
                            outStockMsg: `很抱歉，庫存不足(剩餘${i.stock}組)`,
                            stock: i.stock,
                            isSelected: false,
                            itemVal: i.stock === 0 ? 0 : it.itemVal
                        })
                    }else if(it.itemId === i.itemId){
                        newList.push({ ...it, outStockMsg:'',quantity:i.stock})
                    }
                });
            });
            //console.log('newLits:' , newList)
            //  async
            dispatch(syncExchangeList(newList));

            // callback update state from activeModel
            if (typeof cb === "function") {
                /*console.log('activeModal: ', (!isEmpty(outStock) || !isEmpty(offMarket)) );
                console.log('set state:', new Date().getTime())*/
                cb({outStock, offMarket}, (!isEmpty(outStock) || !isEmpty(offMarket)) )
            }

            return {outStock, offMarket}

        }).catch(err => {
            // console.log('exchange item state error: ', err);
        });

    }
}


export function getUserExchangeList() {
    //console.log('getUserExchangeList: ', new Date().getTime());
    return async (dispatch, getState) => {
        const userId = getState().data.auth.getIn(['PROFILE', 'userId'])
        if(userId){
            //加入兌換清單：因沒有直接進入購物車，所以在此時判斷
            const selected = typeof localStorage.getItem('selectedItem') === 'string' ? JSON.parse(localStorage.getItem('selectedItem')) : undefined;
            if(selected){
                await dispatch(addItem(selected))
                localStorage.removeItem('selectedItem')
            }else{
                const exchangeList = typeof localStorage.getItem(userId) === 'string' ? JSON.parse(localStorage.getItem(userId)) : [];
                dispatch(syncExchangeList(exchangeList));
            }
        }
    }
}

function checkExchangeLimit(selectedItem) {
    //console.log('Select Item: ', selectedItem);
    if (selectedItem.exchangeLimit) {
        if (selectedItem.exchangeLimitMax < (selectedItem.itemVal + 1)) {
            return {
                outStockMsg: `最多兌換${selectedItem.exchangeLimitMax}組`,
                itemVal: selectedItem.exchangeLimitMax,
            }
        }else {
            return checkExchangeQuantity(selectedItem);
        }
    }else {
        return checkExchangeQuantity(selectedItem);
    }
}

function checkExchangeQuantity(selectedItem) {
    if (selectedItem.quantity < (selectedItem.itemVal + 1)) {
        return  {
            outStockMsg: `很抱歉，該商品剩餘${selectedItem.quantity}組`,
            itemVal: selectedItem.quantity,
        }
    }else {
        return {
            outStockMsg: '',
            itemVal: selectedItem.itemVal +1 ,
        }
    }
}

export function exchangeListAction(action) {
    return (dispatch, getState) => {
        const userId = getState().data.auth.getIn(['PROFILE', 'userId'])
        const exchangeList = initExchangeList(userId);
        //console.log('exchangeListAction: ', exchangeList)
        let newList = [];
        let itemType = 0
        switch (action.type) {
            case 'IncVal':
                const needUpdateProperty = checkExchangeLimit(action.item) ;
                newList = exchangeList.map((i) => i.itemId === action.item.itemId ? {...i, ...needUpdateProperty} : i);
                break;
            case 'DecVal':
                newList = exchangeList.map((i) => i.itemId === action.itemId ? {
                    ...i,
                    outStockMsg: '',
                    itemVal: i.itemVal > 1 ? i.itemVal - 1 : i.quantity === 0 ? i.quantity : 1
                } : i);
                break;
            case 'ToggleSelect':
                newList = exchangeList.map((i) => i.itemId === action.itemId ? {
                    ...i,
                    isSelected: i.quantity === 0 ? false : !i.isSelected,
                    itemVal: i.itemVal > i.quantity ? i.quantity : i.itemVal,
                    outStockMsg: i.quantity === 0 ? '庫存不足': ''
                } : i);
                break;
            case 'SelectAll':
                itemType = action.payload === 'eTicketSelectAll' ? 1 : 2;
                newList = exchangeList.map((i) => i.itemType === itemType ? {
                  ...i,
                  isSelected: i.quantity === 0 ? false : true,
                  itemVal: i.itemVal > i.quantity ? i.quantity : i.itemVal,
                  outStockMsg: i.quantity === 0 ? '庫存不足' : ''
                } : i);
                break;
            case 'DeSelectAll':
                itemType = action.payload === 'eTicketSelectAll' ? 1 : 2;
                newList = exchangeList.map((i) => i.itemType === itemType ? {...i, isSelected: false} : i);
                break;
            case 'Remove':
                newList = filter(exchangeList, i => i.itemId !== action.itemId);
                break;
            case 'RemoveAll':
                itemType = action.payload === 'eTicket' ? 1 : 2;
                newList = filter(exchangeList, i => i.itemType !== itemType);

            default:
                break;
        }

        dispatch(syncExchangeList(newList))
    }
}

export function addItem(item) {
    return async (dispatch, getState) => {
        const logIn = getState().data.auth.get('IS_LOGINED')
        const userId = getState().data.auth.getIn(['PROFILE', 'userId'])
        //console.log('logIn: ', logIn, 'userId:', userId)
        if(logIn && userId){
            const exchangeList = addItemToExchange(item, userId);
            await dispatch(syncExchangeList(exchangeList));
        }else {
            localStorage.setItem('selectedItem', JSON.stringify(item))
            return 'redirect'
        }
    }
}

function syncExchangeList(exchangeList) {
    return (dispatch, getState) => {
        const userId = getState().data.auth.getIn(['PROFILE', 'userId'])
        new Promise((resolve, reject) => {
            dispatch({type: exchangeType.GET_USER_EXCHANGE_LIST, payload: exchangeList});
            resolve(true);
        }).then(r => {
            //localStorage.setItem('exchangeList', JSON.stringify(exchangeList));
            localStorage.setItem(userId, JSON.stringify(exchangeList));
        }).catch(err => {
            // console.log('err: ', err);
        })
    }
}

function initExchangeList(userId) {
    return typeof localStorage.getItem(userId) === 'string' ? JSON.parse(localStorage.getItem(userId)) : [];
}

function addItemToExchange(item, userId) {
    const exchangeList = typeof localStorage.getItem(userId) === 'string' ? JSON.parse(localStorage.getItem(userId)) : [];
    //console.log('exchange from localstorage: ', exchangeList);
    let newList = [];

    const o = find(exchangeList, (i) => i.itemId === item.itemId)
    if (o) {
        newList = exchangeList.map((ite) => {
            if(ite.itemId === item.itemId) {
                return { ...item, itemVal: item.itemVal + ite.itemVal}
            }else {
                return ite
            }
        })
            /* 判斷超過限制，不增加數量
            if(ite.itemId === item.itemId && item.exchangeLimitMax > ite.itemVal){
                return { ...item, itemVal: item.itemVal + ite.itemVal}
            }else {
               return ite
            }})
            */
        return newList;
    } else {
        exchangeList.push(item);
        return exchangeList;
    }
}
