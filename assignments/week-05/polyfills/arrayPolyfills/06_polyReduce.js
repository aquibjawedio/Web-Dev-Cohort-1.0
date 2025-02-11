const nums = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.polyFilter) {
    Array.prototype.polyFilter = function (callbackFunction, start) {

        if(this.length <= 0) return undefined;

        let result = start;
        prev = this[0];

        for(let i = 0; i < this.length; i++) {
            callbackFunction(prev, this[i]);
            result += this[i]
            prev = this[i];
        }

        return result;
    
    }

    const res = nums.polyFilter((prev, current) => {
        console.log(`prev : ${prev} current : ${current}`);
        
        return prev + current;
    }, 0)

    console.log(res);
    
}