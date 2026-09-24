class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    } // In JavaScript, the static keyword defines methods, fields (properties), or initialization blocks that belong to the class itself rather than to instances of that class. You call static members directly using the class name, without creating an object via new. Instances(Objects) of a class cannot directly access static properties or methods.
}

const hello = new User('Hello guys');
// console.log(hello.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","iphone@gmail.com" );
iphone.logMe();
// console.log(iphone.createId());  TypeError: iphone.createId is not a function

