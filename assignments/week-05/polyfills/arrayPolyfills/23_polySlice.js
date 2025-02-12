const nums = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.polySlice) {
    Array.prototype.polySlice = function (start = 0, end = this.length) {
        
        if(this.length <= 0) return undefined;

        let result = [];
        
        for(let i = start; i < end; i++) {
            result.push(this[i]);
        }

        return result;
    
    }


}


console.log(nums.polySlice(2, 4));
