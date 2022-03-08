/**
 * @author lee
 * @time 2022/3/3
 * @description 用户登录、注册请求
 */
import ajax from './ajax'

// 用户登录
export function loginApi (params) {
    return ajax({
        url: `/user?name=${params.username}`,
        params
    })
}

// 用户注册
export function registerApi (data) {
    return ajax({
        url: `/user`,
        method: 'POST',
        data
    })
}