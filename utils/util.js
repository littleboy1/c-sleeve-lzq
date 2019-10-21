const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params,{
                success:(res) =>{
                    console.log(res)
                    resolve(res);
                },
                fail: (error) =>{
                    console.log(error)
                    reject(error);
                }
            });
            func(args);
        });
    };
};
//代理模式
export {
    promisic
}