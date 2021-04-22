import ins from "./request";

export default {
    // 登录
    login(params) {
        return ins.post("/passport/login", params);
    },
    // 注册
    logon(params) {
        return ins.post("/passport/logon", params)
    },
    // 获取验证码
    getCode(params) {
        return ins.post("/passport/getCode", params);
    },
    // 找回密码
    findBack(params) {
        return ins.post("/passport/findBack", params);
    }
   
}