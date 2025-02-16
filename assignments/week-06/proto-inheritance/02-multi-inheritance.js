class Person1 {
    constructor(name, email, lastLogin, subscription) {
        this.name = name;
        this.email = email;
        this.lastLogin = lastLogin;
        this.subscription = subscription;
    }
}


class Person2 extends Person1 {
    constructor(name, email, lastLogin, subscription) {
        super(name, email, lastLogin, subscription);
    }
}


const aquib = new Person1('Aquib', 'info@aquib.com', '3 days ago', true);

const jawed = new Person2 ('Jawed', 'info@jawed.com', '1 day ago', false);


console.log(aquib);
console.log(jawed);