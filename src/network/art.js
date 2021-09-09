import request from './axios'

//登录
export function userLogin(params) {
    return request({
        url: 'api/login',
        method: 'post',
        data: params
    })
}
//注册
export function userRegister(params) {
    return request({
        url: 'api/register',
        method: 'post',
        data: params
    })
}
//用户退出
export function userLogout() {
    return request({
        url: 'api/logout',
    })
}

//办展会
export function holdExhibition(params) {
    return request({
        url: '/api/hold/exhibition',
        method: 'post',
        data: params
    })
}
//获取展会信息
export function homeHighlight() {
    return request({
        url:'/api/home/highlight',
        method: 'get'
    })
}
//获取展会详情信息
export function detailInfo(iid) {
    return request({
        url:'/api/detail' + '?iid='+iid,
        method: 'get'
    })
}
//获取艺术头条信息
export function artheadlines() {
    return request({
        url:'/api/arthead',
        method: 'get',
    })
}

//获取交流中心信息
export function communication() {
    return request({
        url:'/api/communication',
        method: 'get',
    })
}