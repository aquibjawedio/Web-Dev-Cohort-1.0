const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if(!Array.prototype.polyPop) {

    Array.prototype.polyPop = function () {

        const result = this[this.length - 1];
        this.length = this.length - 1;
        return result;
    
    }

}

nums.polyPop();
nums.polyPop();

console.log(nums);