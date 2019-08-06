import {
    u_fixed,
    timeFmt,
    cloneJSON
} from './tool'

const Mixin = {
    methods: {},
    // 过滤器
    filters: {
        //  保留两位小数
        mixin_fixed(val) {
            return u_fixed(val)
        },
        //  数值 -> 汉字
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