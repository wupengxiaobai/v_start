/**
 * @param {Number} 数值  
 * @param {Number} 保留位数 
 */
export const u_fixed = (val, num = 2) => val.toFixed(num);

/**
 * 日期时间格式化
 * @param {Date} 时间实例
 * @param {String} 格式
 */
export const timeFmt = (date, fmt = 'yyyy/MM/dd') => {
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
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
 * 倒计时格式化
 * @param {Date} endTime 目标时间戳
 * @param {String} fmt 格式 
 * @param {String} prevText 前置文案
 * @param {String} lastText 后置文案
 */
export const countDown = (endTime, fmt = 'dd天hh时mm分ss秒', prevText = "", lastText = "") => {
    var diffTime = parseInt((endTime.getTime() - (new Date()).getTime()) / 1000);
    var day = ~~(diffTime / (60 * 60 * 24)),
        hour = ~~((diffTime - day * 24 * 60 * 60) / 3600),
        minute = ~~((diffTime - day * 24 * 60 * 60 - hour * 3600) / 60),
        second = ~~((diffTime - day * 24 * 60 * 60 - hour * 3600 - minute * 60));
    var o = {
        "d+": day,
        "h+": hour,
        "m+": minute,
        "s+": second
    };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
        }
    }
    return (prevText + fmt + lastText);
}

/**
 * 数组去重
 * @param {Array} 数组 
 */
export const unique = array => {
    const tmp = new Map();
    return array.filter(item => {
        return !tmp.has(item) && tmp.set(item, 1);
    })
}

/**
 * 数组乱序
 * @param {Array} 源数组
 */
export const arrDisorder = (arr) => {
    let t, j, i = arr.length;
    for (; i;) {
        j = ~~(Math.random() * i);
        t = arr[--i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr
}

/**
 * 深度拷贝
 * @param {Object} 拷贝源对象
 */
export const cloneJSON = source => JSON.parse(JSON.stringify(source));

export const deepClone = (obj, hash = new WeakMap()) => {
    if (!isObject(obj)) return obj;
    if (hash.has(obj)) return hash.get(obj);
    let isArray = Array.isArray(obj);
    let cloneObj = isArray ? [] : {};
    hash.set(obj, cloneObj);
    let allDesc = Object.getOwnPropertyDescriptors(obj);
    let symKeys = Object.getOwnPropertySymbols(obj);
    if (symKeys.length > 0) {
        symKeys.forEach(symKey => {
            cloneObj[symKey] = isObject(obj[symKey]) ? deepClone(obj[symKey], hash) : obj[symKey];
        })
    }
    cloneObj = Object.create(
        Object.getPrototypeOf(cloneObj),
        allDesc
    )
    for (let key in obj) {
        cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key], hash) : obj[key];
    }
    return cloneObj;
}

//  判断一个值是不是对象
function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null;
}

/**
 * 截取指定字节的字符串
 * @param str 要截取的字符穿
 * @param len 要截取的长度，根据字节计算
 * @param suffix 截取前len个后，其余的字符的替换字符，一般用“…”
 */
export const cutString = (str, len, suffix = "") => {
    if (!str || len <= 0) return "";
    let tempLen = 0;
    for (let i = 0, length = str.length; i < length; i++) {
        if (str.charCodeAt(i) > 255) {
            tempLen += 2;
        } else {
            tempLen++;
        }
        if (tempLen == len) {
            return str.substring(0, i + 1) + suffix;
        } else if (tempLen > len) {
            return str.substring(0, i) + suffix;
        }
    }
    return str;
}

/**
 * 生成随机字符串
 * @param {Number} len 指定长度
 * @param {String} str 字符串范围
 */
export const randomStr = (len = 8, str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
    let strLen = str.length,
        tempStr = '';
    for (let i = 0; i < len; i++) {
        tempStr += str.charAt(randomInt(0, strLen));
    }
    return tempStr;
}

// 生成范围内随机整数
function randomInt(min, max) {
    return ~~(Math.random() * (max - min + 1) + min);
}

/**
 * 判断值是否为空
 * @param {*} value 
 */
export const isEmpty = value => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
    );
}