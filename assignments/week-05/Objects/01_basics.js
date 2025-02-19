// const obj = new Object();
// obj.name = "OBJ";
// obj.type = "Object";

// console.log(obj);

// // OR

// const otherObj = {};
// otherObj.name = "Other OBJ";
// otherObj.type = "Object";

// console.log(otherObj);


const arr = new Array(1, 3, 5, 7);
console.log(arr);

Array.prototype.swap = function () {
    let j = this.length - 1;
    for(let i = 0; i < j; i++) {
        let temp = arr[i];

        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    return this;
}



arr.swap();



console.log(arr);

