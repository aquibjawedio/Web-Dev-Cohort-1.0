const nums = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.polyConcat) {
    Array.prototype.polyConcat = function (...rest) {

        if(rest.length <= 0) return undefined;
        
        const result = [];

        for(let i = 0; i < rest.length; i++) {
            if(Array.isArray(rest[i])) {
                result.push(...rest[i])
            } else {
                result.push(rest[i])
            }

        }

        return result;
    
    }

    const res = nums.polyConcat([1, 2, 3], [3, 4, 5], [6, 7, 8], 10);

    console.log(res);
    

}
