const nums = [];

if(!Array.prototype.polyPush) {

    Array.prototype.polyPush = function (value) {

        this[this.length] = value;
    
    }

}

nums.polyPush(1);
nums.polyPush(2);
nums.polyPush(3);

console.log(nums);
