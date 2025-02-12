const nums = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.polyReverse) {
    Array.prototype.polyReverse = function () {
        
        if(this.length <= 1) return this;
        
        let start = 0;
        let end = this.length - 1;

        while(start < end) {
            let temp = this[start];
            this[start] = this[end];
            this[end] = temp;
            start++;
            end--;
        }

        return this;
    
    }


}

nums.polyReverse();

console.log(nums);