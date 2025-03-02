// Adding elements in array this call (this:default(if any), arguments)
function addElements(a, b) {
    this.push(a, b);
}

const arr = [1, 2, 5, 9, 7];
addElements.call(arr, 8, 4);

console.log(arr);

// Filtering elemetns 
function filterElements() {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(this[i] * 10);
    }
    return result;
}

console.log(filterElements.call(arr));
