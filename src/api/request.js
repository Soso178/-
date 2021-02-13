import axios from 'axios';
// import { Message } from 'element-ui';

var service = axios.create({
    baseURL:'',
    timeout:10000
})

//请求之前
service.interceptors.request.use(function(config) {
    return config;
},function(error){
    return Promise.reject(error);
})

// 响应之前
service.interceptors.response.use(function(response){
    // let data = response.data;
    // if(data.status !==200){
    //     Message.error(data.message);
    //     return Promise.reject(data);
    // }else{
    //     return response;
    // }
    return response;
},function(error){
    return Promise.reject(error);
})

export default service;