const nums = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6];

if(!Array.prototype.polySort) {
    Array.prototype.polySort = function (item) {
        
        if(this.length <= 0) return undefined;
        
        let current = 0;

        for(let i = 0; i < this.length; i++) {
            current = this[i];
            this[i] = item;
            item = current;
        }

        return this.length + 1;
    
    }


}

console.log(nums.polySort());

console.log(nums);