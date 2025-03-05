/**
 * Created by ryan on 2018/5/25.
 */


export const required = value => (value ? undefined : '必填欄位')

export const maxLength = max => value =>
    value && value.length > max ? `最大 ${max} 個字元` : undefined

export const maxLength15 = maxLength(15)

export const minLength = min => value =>
    value && value.length < min ? `最小 ${min} 個字元` : undefined

export const minLength2 = minLength(2)

export const number = value =>
    value && isNaN(Number(value)) ? '請輸入數字' : undefined

export const minValue = min => value =>
    value && value < min ? `不得小於${min}位` : undefined

export const maxValue = max => value =>
    value && value > max ? `不得大於${max}位` : undefined

export const minValue13 = minValue(13)

export const minValue8 = minValue(8)

export const checkEmail = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? '無效的Email'
        : undefined

export const tooYoung = value =>
    value && value < 13
        ? 'You do not meet the minimum age requirement!'
        : undefined

export const aol = value =>
    value && /.+@aol\.com/.test(value)
        ? 'Really? You still use AOL for your email?'
        : undefined

export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined

export const phoneNumber = value =>
    value && !/^(0|[0-9][0-9]{9})$/i.test(value)
        ? '無效的號碼，請輸入10碥電話'
        : undefined

export const invoiceValid = invoiceType => value => {
    if(invoiceType ==='02' || invoiceType === '04') {
       return required(value)
    }
}

export const invoiceMaxLength = max => invoiceType => value => {
    if(invoiceType ==='02' || invoiceType === '04') {
        return max===value.length ? undefined : `請輸入${max}位統編`
    }
}
