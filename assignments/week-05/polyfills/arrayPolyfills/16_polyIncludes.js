const nums = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6];

if(!Array.prototype.polyIncludes) {
    Array.prototype.polyIncludes = function (target, start = 0) {
        
        if(this.length <= 0) return undefined;

        for(let i = start; i < this.length; i++) {
            if(this[i] === target) return true;
        }

        return false;
    
    }


}


console.log(nums.polyIncludes(5, 10));

