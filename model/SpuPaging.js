import {Http} from "../utils/http";
import {Paging} from "../utils/Paging";

class SpuPaging{
    static async getLatestPaging(){
       const req = {
           url:`spu/latest`
       }
       return new Paging(req,3)
    }
}
export {
    SpuPaging
}
