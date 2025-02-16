// class in javascript

// class className {
//     constructor(input if any) {

//     }
// }

class User {
    constructor(name, email, lastLogin, subscription) {
        this.name = name;
        this.email = email;
        this.lastLogin = lastLogin;
        this.subscription = subscription;
    }
}


const aquib = new User('Aquib', 'info@aquib.com', '3 days ago', true);

const jawed = new User('Jawed', 'info@jawed.com', '1 days ago', false);

console.log(aquib);
console.log(jawed);
