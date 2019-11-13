import {Paging} from "../utils/Paging";


class SpuPaging{
    static getLatestPaging(){
       const req = {
           url:`spu/latest`
       }
       return new Paging(req,3)
    }
}
export {
    SpuPaging
}
