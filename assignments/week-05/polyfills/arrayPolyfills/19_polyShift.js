const nums = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6];

if(!Array.prototype.polyShift) {
    Array.prototype.polyShift = function () {
        
        if(this.length <= 0) return undefined;

        let result = this[0];

        this.splice(0, 1);

        return result;
    
    }


}



console.log(nums.polyShift());

