import axios from 'axios'

var $axios = axios.create({
    baseURL: 'http://localhost:3000/', // 默认基准路径
    timeout: 5000, // 请求超时
})

// 添加请求拦截器
$axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    if (!config.headers.Authorization && localStorage.getItem('token')) {
        config.headers.Authorization = localStorage.getItem('token')
    }

    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 添加响应拦截器
$axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    if (response.data.status === 401) {
        this.$route.replace('/login')
        return;
    }

    return response;
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
})

export default $axios
