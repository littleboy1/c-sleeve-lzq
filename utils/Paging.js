import {Http} from "./http";
import boolean from "../miniprogram_npm/lin-ui/common/async-validator/validator/boolean";

class Paging{

    start
    count
    req
    locker = false
    url  //防止改变对象中的值
    moreData = true
    accumulator = []

    constructor(req,count=10,start=0) {
        this.req = req
        this.count = count
        this.start = start
        this.url = req.url
    }
    async getMoreData() {
        if (!this.moreData) {
            return;
        }
        if (!this._getLocker()) {
            return
        }
        const data = await this._actualGetData()
        this._releaseLocker()
        return data
    }
    async _actualGetData(){
        const req = this._getCurrentReq()
        let paging = Http.request(req)
         if(!paging){
             return null
         }
         if (paging.total === 0){
             return {
                 empty:true,
                 items: [],
                 moreData:false,
                 accumulator: []
             }
         }
         this.moreData = this._moreData(paging.total_page,paging.page) //如果一个变量需要在多个地方用到的话可以定义为一个属性
        if (this.moreData){
            this.start += this.count
        }
        this._accumulate(paging.items)
        return {
             empty:false,
             items:paging.items,
             moreData:this.moreData,
             accumulator:this.accumulator
         }
         //1.组成数据结构如果返回的数据比较多需要定义一个数据结构
     }
    _accumulate(items){
        this.accumulator = this.accumulator.concat(items);
    }
     //如果当前的总页数和当前的页数相等则表示没有更多的数据，否则表示当前还有更多的数据
     _moreData(totalPage,pageNum){
        return pageNum < totalPage -1
     }
    _getCurrentReq(){
        let url = this.url
        const params = `start=${this.start}&count=${this.count}`
        //uurl = vi/spu + ? +params
        //url = vi/spu?aa=11 +&param
        if(url.includes('?')){
            url += '&' +params
        }else {
            url += '?' + params
        }
        this.req.url = url
        return this.req
    }
    _getLocker(){
        if (this.locker){
            return false
        }
        this.locker = true
        return true
    }
    _releaseLocker(){
        this.locker = false;
    }

}
export {
    Paging
}
