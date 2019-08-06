/**
 * @param {Number} 数值  
 * @param {Number} 保留位数 
 */
export const u_fixed = (val, num = 2) => val.toFixed(num)

/**
 * @param {Date} 时间实例
 * @param {String} 格式
 */
export const timeFmt = (date, fmt = 'yyyy/MM/dd') => {
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

/**
 * 数组去重
 * @param {Array} 数组 
 */
export const unique = array => {
    const tmp = new Map();
    return array.filter(item => {
        return !tmp.has(item) && tmp.set(item, 1)
    })
}

/**
 * 深拷贝
 * @param {Object} 拷贝对象
 */
export const cloneJSON = source => JSON.parse(JSON.stringify(source))

export const deepClone = (obj, hash = new WeakMap()) => {
    if (!isObject(obj)) {
        return obj
    }
    if (hash.has(obj)) return hash.get(obj)
    let isArray = Array.isArray(obj)
    let cloneObj = isArray ? [] : {}
    hash.set(obj, cloneObj)
    let allDesc = Object.getOwnPropertyDescriptors(obj)
    let symKeys = Object.getOwnPropertySymbols(obj)
    if (symKeys.length > 0) {
        symKeys.forEach(symKey => {
            cloneObj[symKey] = isObject(obj[symKey]) ? deepClone(obj[symKey], hash) : obj[symKey]
        })
    }
    cloneObj = Object.create(
        Object.getPrototypeOf(cloneObj),
        allDesc
    )
    for (let key in obj) {
        cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key], hash) : obj[key];
    }
    return cloneObj
}

//  判断一个值是不是对象
function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null
}