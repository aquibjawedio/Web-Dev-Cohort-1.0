const nums = [1, 2, 3, 4, 5, 4, 5, 5, 5, 6];

if(!Array.prototype.polyFindIndex) {

    Array.prototype.polyFindIndex = function (callback) {

        if(this.length == 0) return [];

        let result = -1;

        for(let i = 0; i < this.length; i++) {
            if(callback(this[i], i)) {
                result = i;
                break
            }
        }

        return result;
    
    }

    const res = nums.polyFindIndex((value, index ) => {
        return value === 5 && index > 5;
    });

    console.log(res);
}

