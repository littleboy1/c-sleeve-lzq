import {config} from "../config/config";

class Http{
    //不传入每个参数直接传入一个对象的方式是在整个参数列表加一个花括号
    static request({url,data,callBack,method='GET'}){
        wx.request({
            url:`${config.apiBaseUrl}${url}`,
            data,
            method,
            header:{
                appkey:config.appkey
            },
            success(res) {
               callBack(res.data);
            }
        })
    }
}
export {
    Http
}