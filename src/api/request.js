import axios from "axios";
const ins = axios.create({
    baseURL: "https://mallapi.duyiedu.com/"
});


// 拦截请求
ins.interceptors.request.use(config => {
    return config;
}, err => {
    return Promise.reject(err);
})

// 拦截响应
ins.interceptors.response.use(resp => {
    if(resp.data.status === 'fail') {
        return Promise.reject(resp.data.msg);
    }else {
        return resp.data;
    }
}, err => {
    return Promise.reject(err);
})

export default ins;