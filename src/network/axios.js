import axios from 'axios'
import router from "../router";

const instance = axios.create({
    // baseURL: 'http://localhost:3000/api',
    timeout: 30000
})
//    配置请求和响应拦截
instance.interceptors.request.use(config => {
    // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画
    // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面
    // if(localStorage.token) {
    //     config.headers.Authorization = 'Bearer' + localStorage.token
    // }
    return config
},err => {
    console.log(err)
    // return Promise.reject(err)
})

instance.interceptors.response.use(res => {
    return res
},err => {
    // if(err.response.data.$message) {
    //     Vue.prototype.$message({
    //         type: 'error',
    //         message: err.res.data.message
    //     })
    //
    //     if(err.response.status === 401){
    //         router.push('/login')
    //     }
    // }
    // return Promise.reject(err)
})
export default instance

