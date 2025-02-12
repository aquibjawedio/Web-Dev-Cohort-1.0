const nums = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.polyCopyWithin) {
    Array.prototype.polyCopyWithin = function (position, start, end = this.length) {
        
        if(start == undefined) return this;
        if(this.length <= 0) return undefined;

        while(start != end ) {
            this[position++] = this[start++];
        }
        return this;
    
    }

}

console.log(nums.polyCopyWithin(0));
