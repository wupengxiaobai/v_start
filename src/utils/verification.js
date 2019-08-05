/**
 * 手机格式校验
 * @param {Number} phone 手机号 
 */
export const phoneExp = (phone) => !!(/^1[3-9]\d{9}$/.test(phone));
