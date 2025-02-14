let str = "Hello this is an string";


if (!String.prototype.polyLength) {

    String.prototype.polyLength = function () {

        let len = 0;
        let i = 0;

        while (this[i++] !== undefined) {
            len++;
        }

        return len;

    }

}

// That's not how it works
console.log(str.polyLength());



