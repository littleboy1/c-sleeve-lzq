//业务对象
//theme banner spu sku address user
import {config} from "../config/config";

class Theme {
    static getHomeLocationA(){
        wx.request({
            url:`${config.apiBaseUrl}theme/by/names`,
            method:"GET",
            data:{
                names:'t-1'
            },
            header:{
                appkey:`${config.appkey}`
            },
            success:res =>{
                //回调函数this指代转向问题当前直的是回调函数的this
                this.setData({
                    topTheme:res.data[0]
                })
            }
        })
    }
}