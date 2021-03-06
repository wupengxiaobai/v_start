import {
    u_fixed,
    timeFmt,
    cloneJSON,
    cutString,
    randomStr,
    isEmpty
} from './tools'

const Mixin = {
    methods: {
        // 字符串截取
        mixin_cutString(str, len, suffix) {
            return cutString(str, len, suffix)
        },
        // 随机字符串生成
        mixin_randomStr(len, str) {
            return randomStr(len, str)
        },
        // 判断值是否为空
        mixin_isEmpty(val) {
            return isEmpty(val)
        }
    },
    // 过滤器
    filters: {
        //  保留两位小数
        mixin_fixed(val) {
            return u_fixed(val)
        },
        //  数值汉字化
        mixin_num2chinese(val) {
            return val > 9999 ? u_fixed(val / 10000) + '万' : val;
        },
        // 时间格式化
        mixin_time_fmt(date, fmt) {
            return timeFmt(date, fmt);
        },
        mixin_clone(obj) {
            return cloneJSON(obj)
        }
    }
}

export default Mixin