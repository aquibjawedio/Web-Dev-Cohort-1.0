const nums = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6];

if(!Array.prototype.polyIndexOf) {
    Array.prototype.polyIndexOf = function (target, start = 0) {
        
        if(this.length <= 0) return undefined;

        for(let i = start; i < this.length; i++) {
            if(this[i] === target) return i;
        }

        return -1;
    
    }


}


console.log(nums.polyIndexOf(5, 0));


