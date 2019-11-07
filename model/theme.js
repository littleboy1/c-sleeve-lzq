//业务对象
//theme banner spu sku address user
import {Http} from "../utils/http";

class Theme {

    static locationA = 't-1';
    static locationE = 't-2';
    static locationF = 't-3';
    static locationH = 't-4';
    // static themes = [] 扩展性不足
    themes = [];
     async getThemes() {
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`;
         this.themes =  await Http.request({
            url:`theme/by/names`,
            data:{
                names
            }
        });
    }
    // 由于request方法是异步的所以所有的层级都是异步调用都需要传入callback
      getHomeLocationA() {
         return  this.themes.find(theme => theme.name === Theme.locationA);
     }
     getHomeLocationE() {
        return  this.themes.find(theme => theme.name === Theme.locationE);
    }
}
export {
    Theme
}
