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
//用户升级
export function promotionUser(query) {
    return request({
        url:'/api/promotion',
        method: 'get',
        params: query
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
//根据城市获取展会信息
export function findCityArts(query) {
    return request({
        url:'/api/findArt/cityArts',
        method: 'get',
        params: query
    })
}

//获取展会详情信息
export function detailInfo(iid) {
    return request({
        url:'/api/detail' + '?iid='+iid,
        method: 'get'
    })
}

//发表详情信息的评论
export function detailPinglun(params) {
    return request({
        url:'/api/detail/pinglun',
        method:'post',
        data:params
    })
}

//详情信息的点赞
export function detailGood(params) {
    return request({
        url:"/api/detail/dianzan",
        method:'post',
        data:params
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

//交流中心发表讨论
export function publicDialogg(params) {
    return request({
        url:'/api/publicDialog',
        method:'post',
        data:params
    })
}

//发表详情信息的评论
export function publicDialogPinglun(params) {
    return request({
        url:'/api/publicDialog/pinglun',
        method:'post',
        data:params
    })
}

//发表详情信息的评论
export function publicDialogSearch(params) {
    return request({
        url:'/api/publicDialog/search',
        method:'post',
        data:params
    })
}

//交流中心点赞
export function publicDialogDianzan(params) {
    return request({
        url:'/api/publicDialog/dianzan',
        method:'post',
        data:params
    })
}

//用户登录存储登录信息
export function loginlog(params) {
    return request({
        url:'/api/login/loginlog',
        method:'post',
        data:params
    })
}