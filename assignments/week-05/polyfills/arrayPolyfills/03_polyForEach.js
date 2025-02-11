const nums = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.polyForEach) {
    Array.prototype.polyForEach = function (callbackFunction) {
        if(this.length <= 0) return undefined;

        for(let i = 0; i < this.length; i++) {
            callbackFunction(this[i], i, this);
        }
    
    }

    nums.polyForEach((value, index, arr) => {
        console.log(`Value : ${value}, Index : ${index}, arr : ${arr}`);
    })
}