import {config} from "../config/config";
import {promisic} from "./util";

class Http{
    //不传入每个参数直接传入一个对象的方式是在整个参数列表加一个花括号
    //异步调用的三种方式
    //1.callback  2.promise   3aysnc  awit 只有一个函数返回promise 才可以使用这个方法
    //一个函数内部出现了awit就必须在函数声明的地方写上aysnc使用awit（求值）强调函数必须返回一个结果
    //加上async和awit可以将当前函数作为一个同步的函数调用
    //一个函数加上了async关键字表示这个函数一定会返回一个promise所以其他调用他的函数都需要加上awit
    static async request({url,data,method='GET'}){
        console.log(url);
        console.log(`${config.apiBaseUrl}${url}`);
        const res = await promisic(wx.request)({
            url:`${config.apiBaseUrl}${url}`,
            data,
            method,
            header:{
                appkey:config.appkey,
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        });
        return res.data
    }
}
export {
    Http
}
