import { Iterable } from 'immutable';

const validate = values => {

    let v = {};
    if(Iterable.isIterable(values)) {
        v = values.toJS();
    }

    const errors = {};

    // if(!v.address) {
    //     errors.address = '必填';
    // }

    if(!v.countyId || v.countyId === '-1') {
        errors.countyId = '必填';
    }

    if(!v.townshipId || v.townshipId === '-1') {
        errors.townshipId = '必填';
    }

    if(!v.quantity) {
        errors.quantity = '必填';
    } else if(!/^\d+$/.test(v.quantity)) {
        errors.quantity = '請輸入數字';
    }

    if(!v.floor) {
        errors.floor = '必填';
    } else if(!/^\d+$/.test(v.floor)) {
        errors.floor = '請輸入數字';
    }

    if(!v.contactName) {
        errors.contactName = '必填';
    }

    if(!v.contactMobile) {
        errors.contactMobile = '必填';
    } else if(!/^09\d{8}$/i.test(v.contactMobile)) {
        errors.contactMobile = '手機格式不正確';
    }

    if(!v.userType) {
        errors.userType = '必填';
    }

    if(v.userType && v.userType === 'C') {
        if(v.unifiedCode && !/^\d{8}$/.test(v.unifiedCode)) {
            errors.unifiedCode = '統編不正確';
        }

        if(!v.companyName) {
            errors.companyName = '必填';
        }
    }


    return errors;
};


export default validate;
