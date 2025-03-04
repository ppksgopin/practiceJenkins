/**
 * 驗證並處理重量
 * @param {number|string} weight - 要驗證的重量
 * @param {string} materialName - 物料名稱（用於錯誤訊息）
 * @returns {number} - 處理後的重量（四捨五入到小數點後兩位）
 * @throws {Error} - 當重量無效時拋出錯誤
 */
const validateWeight = (weight, materialName) => {
    const parsedWeight = parseFloat(weight);
    
    if (isNaN(parsedWeight)) {
        throw new Error(`物料重量必須為數字：${materialName}`);
    }
    
    if (parsedWeight <= 0) {
        throw new Error(`物料重量必須大於0：${materialName}`);
    }

    // Round to 2 decimal places for precision
    return Math.round(parsedWeight * 100) / 100;
};

/**
 * 計算金額
 * @param {number} price - 單價
 * @param {number} weight - 重量
 * @returns {number} - 計算後的金額（四捨五入到小數點後兩位）
 */
const calculateAmount = (price, weight) => {
    return Math.round(price * weight * 100) / 100;
};

module.exports = {
    validateWeight,
    calculateAmount
};
