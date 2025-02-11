const nums = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.polyMap) {
    Array.prototype.polyMap = function (callbackFunction) {

        if(this.length <= 0) return undefined;

        const result = [];

        for(let i = 0; i < this.length; i++) {
            callbackFunction(this[i], i, this);
            result.push(this[i]);
        }

        return result;
    
    }

    const res = nums.polyMap((value, index, arr) => {
        console.log(`Value : ${value}, Index : ${index}, arr : ${arr}`);
    })

    console.log(res);
    

}
