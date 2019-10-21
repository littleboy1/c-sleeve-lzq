//业务对象
//theme banner spu sku address user
import {Http} from "../utils/http";

class Theme {
    static getHomeLocationA(callBack){
        Http.request({
           url:'theme/by/names',
           data:{
               names:'t-1'
           },
           callBack:data=>{
               callBack(data)
           }
        });
    }
}
export {
    Theme
}