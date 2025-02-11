const nums = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.polyFilter) {
    Array.prototype.polyFilter = function (callbackFunction) {

        if(this.length <= 0) return undefined;

        const result = [];

        for(let i = 0; i < this.length; i++) {
            if(callbackFunction(this[i], i, this)) {
                result.push(this[i]);
            }
        }

        return result;
    
    }

    const res = nums.polyFilter((value, index, arr) => {
        return value < 5;
    })

    console.log(res);
    
}