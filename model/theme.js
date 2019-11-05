//业务对象
//theme banner spu sku address user
import {Http} from "../utils/http";

class Theme {

    static locationA = 't-1';
    static locationE = 't-2';
    // 由于request方法是异步的所以所有的层级都是异步调用都需要传入callback
    static async getHomeLocationA() {
        return await Http.request({
             url: 'theme/by/names',
             data: {
                 names: 't-1'
             }
         })
    }
}
export {
    Theme
}
