/**
 * @author lee
 * @time 2022/3/3
 * @description 封装axios
 */
import axios from 'axios'

const Ajax = axios.create({
    timeout: 5000,
    baseURL: '/apis'
})

export default function (req) {
    if (!req || req.constructor !== Object) throw new Error('请求数据请传入参数')
    if (!req.url) throw new Error('url地址必须为参数')
    return new Promise(resolve => {
        Ajax.request({
            url: req.url,
            method: req.method || 'GET',
            data: req.data || {},
            params: req.params || {}
        }).then(({ data }) => {
            resolve(data)
        }).catch((e) => {
            resolve(e)
        })
    })
}