const nums = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.polytoString) {
    Array.prototype.polytoString = function () {
        
        if(this.length <= 0) return undefined;

        let result = "";
        
        for(let val of this) {
            result += `${val},`;
        }

        return result;
    
    }


}

nums.polytoString();

console.log(nums.polytoString());