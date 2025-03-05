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

    if(!v.items || v.items.length === 0) {
        errors.items = '必填';
    } else {
        const itemOther = v.items.find(item => item.code === 'EAWT04');
        if(itemOther && !v.itemOther) {
            errors.itemOther = '必填';
        }
    }

    if(!v.countyId || v.countyId === '-1') {
        errors.countyId = '必填';
    }

    if(!v.townshipId || v.townshipId === '-1') {
        errors.townshipId = '必填';
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
