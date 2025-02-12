const nums = [11, 12, 23, 14, 25, 36];

if(!Array.prototype.polyEntries) {
    Array.prototype.polyEntries = function () {
        
        if(this.length == 0) return {};

        const result = {};

        for(let i = 0; i < this.length; i++) {
            result[i] = this[i];
        }

        return result;
    
    }

}

console.log(nums.polyEntries());
