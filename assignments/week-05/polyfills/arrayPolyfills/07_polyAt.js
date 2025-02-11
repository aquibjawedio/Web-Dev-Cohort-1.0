const nums = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.polyAt) {
    Array.prototype.polyAt = function (index) {

        if(index >= this.length || index < (-this.length)) return undefined;

        if(index < 0) {
            index = index + this.length;
        }

        return this[index];
    
    }

    const res = nums.polyAt(-2);

    console.log(res);
    

}

