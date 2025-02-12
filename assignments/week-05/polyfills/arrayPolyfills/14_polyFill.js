const nums = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.polyFill) {
    Array.prototype.polyFill = function (value, start, end = this.length) {
        
        if(this.length <= 0) return undefined;

        while(start != end ) {
            this[start++] = value;
        }

        return this;
    
    }


}


console.log(nums.polyFill(10, 0, nums.length));
