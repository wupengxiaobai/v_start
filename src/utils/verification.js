const Regs = {
    //  校验返回Boolean
    phone: /^((\+|00)86)?1[3-9]\d{9}$/,
    phone2: /^((\+|00)86)?1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/,
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    idCard: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
    bankCard: /^([1-9]{1})(\d{15}|\d{18})$/,

    //  操作并返回指定值
    trim: {
        0: /(^\s*)|(\s*$)/g,
        1: /\s+/g,
        2: /(^\s*)/g,
        3: /(\s*$)/g
    },
    star: {
        0: /(^\d{3})(\d{6})(\d{2}$)/g, //  电话
        1: /(^[\d\D]{4})([\d\D]{0,})([\d\D]{3}$)/g, //  地址
    }
};

/**
 * test 方法
 * @param {*} reg 
 * @param {*} val 
 * @returns {Boolean}
 */
const regTest = (reg, val) => !!(reg.test(val));

/**
 * 手机
 */
export const phoneExp = phone => regTest(Regs.phone, phone);
export const phoneVerify = phone => regTest(Regs.phone2, phone);

/**
 * 邮箱
 */
export const emailVerify = email => regTest(Regs.email, email);

/**
 * 身份证
 */
export const idCardVerify = idCard => regTest(Regs.idCard, idCard);

/**
 * 银行卡
 */
export const bankCardVerify = bankCard => regTest(Regs.bankCard, bankCard);

/**
 * replace 方法
 * @param {RegExp} 匹配规则
 * @param {String} 源值
 * @param {String|Function} 替换对象
 */
const replace = (reg, val, tarVal) => val.replace(reg, tarVal);

/**
 * 空格去除
 * @param {String} val 字符串值 
 * @param {Number} trimType 类型 默认去除两边 
 */
export const trimSpace = (val, trimType = 0) => replace(Regs.trim[trimType], val, "");

/**
 * 匹配范围字符展示 “*” 
 * @param {String} val 字符串
 * @param {Number} starType 类型，默认电话号码
 */
export const replace2star = (val, starType = 0) => replace(Regs.star[starType], val, (match, $1, $2, $3) => {
    let str = $1,
        len = $2.length;
    for (let i = 0; i < len; i++) {
        str += "*";
    }
    str += $3;
    return str;
})